<?php
get_header();
?>
<?php
    $category = get_the_category()[0];
    $category_link  = get_category_link( $category_name );
    $author = get_post_meta($post->ID, 'author', true);

?>
<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <main class="col-md-8 left-section">

                    <h2><?php the_title(); ?></h2>
                    <div id="author-date-category">
                        <?php if ($author) : ?>
                        <span class="author">By <?php echo $author; ?></span>
                        <?php else: ?>
                        <span>Posted</span>
                        <?php endif ?>
                        <span class="text">on</span>
                        <span class="date"><?php echo get_the_date("M. d, Y") ?></span>
                        <?php if (get_category_link($category->term_id)): ?>
                        <span class="text">in</span>
                        <a
                            href="<?php echo get_category_link($category->term_id) ?>"><?php echo $category->cat_name?></a>
                        <?php endif ?>
                    </div>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <?php the_content(); ?>
                    </article>

                    <div id="story-tags">
                        <?php the_tags("Story Tags: ") ?>
                    </div>
                    <div class="space-xs"></div>
                    <div class="row border-bottom-only-wrapper default-margin-right-margin">
                        <div class="col-xs-12">
                            <div class="border-bottom-only"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div id="article-comments" class="comments-section">
                            <?php comments_template(); ?>
                        </div>
                    </div>
                </main>
                <aside class="col-sm-12 col-md-4 right-section left-border-separator">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();

?>