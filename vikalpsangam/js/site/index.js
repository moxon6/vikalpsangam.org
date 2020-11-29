function fixCarouselHeight() {
  if ($('.featured-list').length > 0 && $('.featured-list').offset().left > 200) {
    const featureListHeight = $('.featured-list').innerHeight();
    $('.fill-image').css('height', featureListHeight);
  }
}

$(window).load(() => {
  fixCarouselHeight();
});
