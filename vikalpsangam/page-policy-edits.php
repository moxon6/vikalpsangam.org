<?php
/**
 * The Front Page
 * @package vikalpsangam
 */

get_header();

?>

<div id="content">

    <div class="section generic_section">

        <div class="container main-body-container">

            <div class="row">

                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div class="category-page-heading">

                        <div class="category-title-link" style="background-image:
                        url('/static/media/uploads/.thumbnails/perspectives_1_1-50x50.png')">
                            PERSPECTIVES
                        </div>

                    </div>

                    <div class="row category-page-category-list-wrapper category-topping-wrapper" id="articles-list">

                        <div class="col-xs-6 col-sm-4 category">

                            <a class="category-link-wrapper"
                                href="/article/ecopolitical-imperative-a-few-critical-comments/">
                                <div class="top-sub-section">
                                    <h4 style="height: 64px;">“Ecopolitical imperative”: a few critical comments</h4>
                                </div>
                                <div class="image-sub-section col-xs-12">

                                    <img class="img-responsive"
                                        src="/static/media/uploads/.thumbnails/perspectives_1-327x218.png">

                                </div>
                            </a>
                            <div class="plain-text-sub-section">
                                <p class="col-xs-12" style="height: 54px;">In a finite world, infinite growth is
                                    impossible</p>

                                <div class="read-more-wrapper">
                                    <a class="read-more"
                                        href="/article/ecopolitical-imperative-a-few-critical-comments/">
                                        Read More
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div class="col-xs-6 col-sm-4 category">

                            <a class="category-link-wrapper"
                                href="/article/uttarakhands-draft-ecotourism-policy-could-threaten-biodiversity/">
                                <div class="top-sub-section">
                                    <h4 style="height: 64px;">Uttarakhand’s draft ecotourism policy could threaten
                                        biodiversity</h4>
                                </div>
                                <div class="image-sub-section col-xs-12">

                                    <img class="img-responsive"
                                        src="/static/media/uploads/Environment Ecology 2/.thumbnails/mayank_aggarwal_uttarakhand_biodiversity-327x218.jpg">

                                </div>
                            </a>
                            <div class="plain-text-sub-section">
                                <p class="col-xs-12" style="height: 54px;">This draft policy is framed in a way that it
                                    leaves almost all the power with bureaucrats</p>

                                <div class="read-more-wrapper">
                                    <a class="read-more"
                                        href="/article/uttarakhands-draft-ecotourism-policy-could-threaten-biodiversity/">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="endless_container">
                            <a class="endless_more" href="/policy-edits/?page=2" rel="page">
                                <div class="load-more-bottom-button"><button type="button" class="form-control">Load
                                        More</button></div>
                            </a>
                            <div class="endless_loading" style="display: none;"><img src="/static/img/loader.gif"
                                    alt="loading"></div>
                        </div>

                    </div>

                </div>

                <div class="col-sm-12 col-md-3 right-section left-border-separator">

                    <?php get_template_part('template-parts/common/sidebar') ?>
                
                </div>
            </div>

        </div>

    </div>

</div>

<?php

get_footer();