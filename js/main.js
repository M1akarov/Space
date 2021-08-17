$(function(){
  $('.slider__box').slick({

    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/left.svg" alt="left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/right.svg" alt="right">',
    

  });

  $('.menu-btn').on('click', function() {
    $('.menu__list').toggleClass('active');
  })
});

