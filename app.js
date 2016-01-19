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
  $('.task').click(function(){
    $('.description').remove();
    $(this).after('<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nisi ipsam, amet labore animi at fuga consequuntur, ut doloremque mollitia obcaecati modi magnam voluptatem neque numquam provident! Quis sint recusandae officia id, aliquid velit laudantium praesentium obcaecati, reiciendis mollitia, non.</div>');
    $('.description').css('background-color',$(this).css('background-color'));
  })
  $('.caro').on("afterChange",function(){
    if ($('.slick-current img').first().attr('src').indexOf("blue") >= 0){
      $('.help_whom').html("Help the Water planet");
      $('.element').html("WATER");
    }
    else if($('.slick-current img').first().attr('src').indexOf("green") >= 0){
      $('.help_whom').html("Help the planets nature");
      $('.element').html("NATURE");
    }
    else{
      $('.help_whom').html("Help the planet Earth");
      $('.element').html("EARTH");
    }
  })
});
