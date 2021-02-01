<?php get_header(); ?>

<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">

                <main class="col-md-8 left-section">
                    <div class="d-flex justify-content-between mb-4">
                        <h2><?php the_title(); ?></h2>
                        <div>
                            <a href="/stories/" class="btn btn-primary">Show all latest stories</a>
                        </div>
                    </div>

                    <?php get_template_part( 'template-parts/latest-stories/latest-stories-categories-section', null, []); ?>

                </main>
                <aside class="col-sm-12 col-md-4 sidebar-aside">
                    <?php get_sidebar() ?>
                </aside>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>