<?php
get_header();
?>
<?php
    require_once get_template_directory() .'/mock-data/perspective-articles.php';
?>

<div id="content">
    <div class="section generic_section">
        <div class="container main-body-container">
            <div class="row">
                <div class="col-md-9 left-section">

                    <div class="space-xs"></div>
                    <div class="space-xs"></div>
                    <div class="space-xs"></div>

                    <div id="map-page-writeup">
                        <h2><?php the_title() ?></h2>
                        <?php the_content() ?>
                        
                    </div>

                    <div id="map"> </div>
                </div>
                <div class="col-sm-12 col-md-3 right-section left-border-separator">
                    <?php get_template_part('template-parts/common/sidebar') ?>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    #map {
        height: 800px;
    }
</style>

<script>

    const mean = (arr) => arr.reduce((x,y) => x + y, 0) / arr.length

    async function fetchCoordinates() {
        const response = await fetch('/wp-json/vikalpsangam/v1/map');
        const coordinatesMap = await response.json();
        return Object.values(coordinatesMap);
    }

    async function loadMap() {
        const INITIAL_ZOOM_LEVEL = 5;
        const coordinates = await fetchCoordinates();

        const map = L.map('map').setView([
            mean(coordinates.map(x => x.latitude)),
            mean(coordinates.map(x => x.longitude))
        ], INITIAL_ZOOM_LEVEL);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var markers = L.markerClusterGroup();

        coordinates.forEach(coordinate => {
            const marker = L.marker([coordinate.latitude, coordinate.longitude])
            marker.bindPopup(`<a href="${coordinate.url}">${coordinate.title}</a>`)
            markers.addLayer(marker);
        })
        map.addLayer(markers);
    }
    loadMap();
</script>

<?php
get_footer();