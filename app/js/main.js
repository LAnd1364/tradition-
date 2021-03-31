$(function() {

  // ----------------------------------------------menu-btn------------------------------------------------
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn-line').toggleClass('menu__btn-line--active');
  });
  // ----------------------------------------------header-address-hint------------------------------------------------
  $('.header__address').hover(function() {
    $('.header__address-hint').toggleClass('header__address-hint--hover');
  }); 
  // ----------------------------------------------arrow-right------------------------------------------------
  $('.invite__link').hover(function() {
    $('.invite__content').toggleClass('invite__content--hover');
  }); 

});