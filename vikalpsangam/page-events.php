<?php
get_header();
?>
<?php
    $events_str = file_get_contents(get_template_directory() ."/mock-data/past-events.json");
    $events = json_decode($events_str, true);
?>
<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <h2>Upcoming Events</h2>
                    <p>Click on the event title to read more details about the event.</p>

                    <div data-tockify-component="calendar" data-tockify-calendar="alternatives"></div>
                    <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>


                    <h2>Reports on Past Events</h2>
                    <ul>
                        <?php foreach($events as $event) { ?>
                            <li>
                                <p><?php echo $event ?></p>
                            </li>
                        <?php } ?>
                    </ul>



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