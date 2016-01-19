$(document).ready(function(){
  $('.caro').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    useCSS: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.caro').on("afterChange",function(){
    if ($('.slick-current img').first().attr('src').indexOf("blue") >= 0){
      $('.help_whom').html("Help the Water planet");
      $('.element').html("WATER");
    }
    else if($('.slick-current img').first().attr('src').indexOf("green") >= 0){
      $('.help_whom').html("Help the Green planet");
      $('.element').html("GREEN");
    }
    else{
      $('.help_whom').html("Help the Earth planet");
      $('.element').html("EARTH");
    }
  })
});
