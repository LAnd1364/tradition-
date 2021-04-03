$(function() {

  // ----------------------------------------------menu__btn------------------------------------------------
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn-line').toggleClass('menu__btn-line--active');
  });
  // ----------------------------------------------header__address-hint------------------------------------------------
  $('.header__address').hover(function() {
    $('.header__address-hint').toggleClass('header__address-hint--hover');
  }); 
  // ----------------------------------------------arrow-right------------------------------------------------
  $('.invite__link').hover(function() {
    $('.invite__content').toggleClass('invite__content--hover');
  }); 
  // ----------------------------------------------product__btn------------------------------------------------
  $('.product__btn').on('click', function() {
    $(this).toggleClass('product__btn--added');
  }); 
  // ----------------------------------------------product-slider------------------------------------------------
  $('.product-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn slick-prev"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    nextArrow: '<button class="slick-btn slick-next"><div class="arrow-right"><span class="arrow-right__angle"></span></div></button>',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });

});