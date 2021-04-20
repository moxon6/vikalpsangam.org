<?php

class CategoryPostsBuilder {
        
	function __construct() {
		$this->unusedCategories = array_map(
			fn($category) => $category->term_id,
			array_values(get_categories())
		);

		$this->unusedCategories = array_filter(
			$this->unusedCategories, 
			fn($cat) => (
				$cat != get_cat_ID("Perspectives") 
				&& $cat != get_cat_ID("Uncategorised") 
				&& $cat != get_cat_ID("Uncategorized")
			)
		);

		$this->usedCategories = [];
		$this->usedPosts = [];
	}

	function getRelevantCategory($post) {        
		return wp_get_post_categories(
			$post -> ID,
			[ 
				'fields' => 'all',
				"exclude" => $this->usedCategories
			]
		)[0];
	}

	function getLatestRelevantPost() {
		$post = get_posts(array(
			'numberposts'	=> 1,
			'post_type'		=> 'post',
			"orderby"   => "date",
			"order"     => "DSC",
			'post_password' => '',
			'category__in'	=> $this->unusedCategories,
			"exclude" => $this->usedPosts
		))[0];

		$this->usedPosts[] = $post->ID;

		$category = $this->getRelevantCategory($post);

		$this->unusedCategories = array_filter($this->unusedCategories, fn($cat) => $cat != $category->term_id);
		$this->usedCategories[] = $category->term_id;

		return [
			"post" => new Timber\Post($post),
			"category" => new Timber\Term($category)
		];
	}

	function getCategoryPosts($n) {
		return array_map(
			fn($i) => $this->getLatestRelevantPost(),
			range(0, $n - 1)
		);
	}
}

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$NUMBER_OF_CAROUSEL_ITEMS = 3;
$NUMBER_PROMOTED_ARTICLES = 3;
$NUMBER_STORIES_BY_CATEGORY = 4;

$context["carousel_items"] = Timber::get_posts(array(
    'numberposts'	=> $NUMBER_OF_CAROUSEL_ITEMS,
    'post_type'		=> 'post',
    'meta_key'		=> 'add_to_carousel',
    'meta_value'	=> '1',
	'post_password' => ''
));

$context["promoted_articles"] = Timber::get_posts(array(
    'numberposts'	=> $NUMBER_PROMOTED_ARTICLES,
    'post_type'		=> 'post',
    'meta_key'		=> 'promoted',
    'meta_value'	=> '1',
	'post_password' => ''
));

$context["category_posts"] = (new CategoryPostsBuilder())->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);

Timber::render( array( 'pages/_page-front.twig' ), $context );

?>