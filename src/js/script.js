$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 800,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/arrow-right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
      }
        }
      ]
    });
  });