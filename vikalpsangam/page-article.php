<?php
    get_header();
    $categories = get_categories([
        "type"      => "post",      
        "orderby"   => "name",
        "order"     => "ASC" 
    ]);
?>

<style>
    /* TODO: Integrate this with SCSS stylesheets during refactor */
    .category-title-link {
        background-size: contain;
    }

    .excerpt {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 34px;
        overflow: hidden;
    }
</style>

<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 right-border-separator left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div class="row top-title">
                        <div class="col-xs-7 heading">
                            <h2><?=the_title(); ?></h2>
                        </div>
                        <div class="col-xs-5 link">
                            <a class="read-more" href="/stories/">Show all latest stories</a>
                        </div>
                    </div>

                    <div class="row border-bottom-only-wrapper">
                        <div class="col-xs-12">
                            <div class="border-bottom-only"></div>
                        </div>
                    </div>
                    <section id="storypage-categories" class="row">
                        <?php foreach($categories as $category){
                            $posts = get_posts(array(
                                'numberposts'	=> 3,
                                'post_type'		=> 'post',
                                "orderby"   => "date",
                                "order"     => "DSC",
                                'category'	=> $category -> cat_ID
                            ));
                        ?>

                        <div class="col-xs-12 category-topping-wrapper">
                            <div class="category-page-heading">
                                <a class="category-title-link"
                                    title="Case studies commissioned by Vikalp Sangam or other processes"
                                    style="background-image: url('<?php echo get_category_image($category); ?>')"
                                    href="/article/category/<?php echo $category->slug; ?>">
                                    <?php echo $category -> name ?>
                                </a>
                            </div>

                            <div class="row category-page-category-list-wrapper">
                                <?php foreach($posts as $post){
                                    get_template_part( 'template-parts/common/article-tile', null, [ "post" => $post ]);
                                } ?>
                            </div>
                        </div>
                        <?php } ?>
                    </section>
                </div>
                <div class="col-sm-12 col-md-3 right-section">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>

        </div>

    </div>

</div>

<?php
    get_footer();