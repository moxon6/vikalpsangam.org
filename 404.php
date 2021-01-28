<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package vikalpsangam
 */

get_header();
?>

<div id="page">
    <div class="section generic_section">
        <div class="container-fluid">
            <div class="row">
                <main class="col-md-8 left-section">
                    <main id="primary" class="site-main">

                        <section class="error-404 not-found">
                            <header class="page-header">
                                <h1 class="page-title">
                                    <?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'vikalpsangam' ); ?></h1>
                            </header>

                            <div class="page-content">
                                <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'vikalpsangam' ); ?>
                                </p>

                                <?php
									get_search_form();
									the_widget( 'WP_Widget_Recent_Posts' );	
								?>

                                <div class="widget widget_categories">
                                    <h2 class="widget-title">
                                        <?php esc_html_e( 'Most Used Categories', 'vikalpsangam' ); ?></h2>
                                    <ul>
                                        <?php
											wp_list_categories(
												array(
													'orderby'    => 'count',
													'order'      => 'DESC',
													'show_count' => 1,
													'title_li'   => '',
													'number'     => 10,
												)
											);
										?>
                                    </ul>
                                </div>

                            </div>
                        </section>

                    </main>
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