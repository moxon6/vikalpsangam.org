<?php 
    $article_content = $args['article_content'];
?>

<div id="carouselExampleIndicators" class="carousel slide front-page-carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
  </ol>
  <div class="carousel-inner">

    <?php foreach ($article_content as $key => $post) { setup_postdata( $post );  ?>    
      <div class="carousel-item <?=($key == 0 ? "active" : "") ?>">
        <img class="d-block w-100 carousel-image" alt="First slide [800x400]" src="<?php the_post_thumbnail_url(); ?>" data-holder-rendered="true">
      </div>
    
    <?php } ?>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>