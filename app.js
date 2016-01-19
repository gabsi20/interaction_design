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
    if ($('.slick-current').attr('src').indexOf("blue") >= 0){
      $('.helpwhom').innerHTML("abc");
    }
    else if($('.slick-current').attr('src').indexOf("green") >= 0){

    }
    else{

    }
  })
});
