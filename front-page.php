<?php

class CategoryPostsBuilder {
        
	function __construct($excluded_categories) {
		$this->unusedCategories = array_map(
			function($category) {
				return $category->term_id;
			},
			array_values(get_categories([
				"exclude" => $excluded_categories
			]))
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
			'category__in'	=> $this->unusedCategories,
			"exclude" => $this->usedPosts,
			'has_password'   => false
		))[0];

		$this->usedPosts[] = $post->ID;

		$category = $this->getRelevantCategory($post);

		$this->unusedCategories = array_filter($this->unusedCategories, function($cat) {
			return $cat != $category->term_id;
		});
		$this->usedCategories[] = $category->term_id;

		return [
			"post" => new Timber\Post($post),
			"category" => new Timber\Term($category)
		];
	}

	function getCategoryPosts($n) {
		return array_map(
			function($i) {
				return $this->getLatestRelevantPost();
			},
			range(0, $n - 1)
		);
	}
}

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$NUMBER_PROMOTED_ARTICLES = 4;
$NUMBER_STORIES_BY_CATEGORY = 4;


$context["promoted_articles"] = Timber::get_posts(array(
    'numberposts'	=> $NUMBER_PROMOTED_ARTICLES,
    'post_type'		=> 'post',
    'meta_key'		=> 'promoted',
    'meta_value'	=> '1',
	'category__not_in'	=> $excluded_categories,
	'has_password'   => false
));

$context["latest_posts"] = Timber::get_posts(array(
    'numberposts'	=> 4,
    'post_type'		=> 'post',
	'category__not_in'	=> $excluded_categories,
	'has_password'   => false
));

$context["category_posts"] = (new CategoryPostsBuilder($excluded_categories))->getCategoryPosts($NUMBER_STORIES_BY_CATEGORY);

Timber::render( array( 'pages/_page-front.twig' ), $context );

?>