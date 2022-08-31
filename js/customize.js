// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $(".mpSlider").slick({
      mobileFirst: true,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      fade: true,
      lazyLoaded: true,
      lazyLoad: "ondemand",
      ease: "ease",
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).find("img").attr("alt").trim();
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
    }
});

    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    $('.bookSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }],
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: false,
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // var fatfooter_h = $('.fatfooter nav').innerHeight();
    // $(".btn-fatfooter").css('width', fatfooter_h);
    // $(".close").css('width', 'auto');

    // 圖片輪播圖變大
    var $carousel = $(".mpSlider2").slick({
      mobileFirst: true,
      dots: true,
      arrow: false,
      infinite: true,
      speed:0,
      autoplaySpeed: 5000,
      autoplay: true,
      fade: true,
      lazyLoaded: true,
      lazyLoad: "ondemand",
      ease: "ease",
      pauseOnHover: false
  });
/* The first slide will not get the animation,
therefore I add and remove a class that will trigger the css animation */
$carousel.find(".slick-current").addClass("start");
/* I use a set-timeoutfunction to hinder optimization
of adding and removing classes */
setTimeout(function () {
  $carousel.find(".start").removeClass("start");
}, 0);


});


//test
$('.mpSlider3 .slick')
.on('init', () => {
    $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
    $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
    $('.slick-slide[data-slick-index="1"]').addClass('gt1');
    $('.slick-slide[data-slick-index="2"]').addClass('gt2');
})
.slick({
  centerMode: true,
  autoplay: true,
  centerPadding: 0,
  slidesToShow: 3,
  arrow: false,
  dots: true,
  speed:0,
  autoplaySpeed: 5000,
  autoplay: true,
  lazyLoaded: true,
  lazyLoad: "ondemand",
  ease: "ease",
  pauseOnHover: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }
},{
    breakpoint: 768,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }
},{
    breakpoint: 575,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
    }
}]

}).on('beforeChange', (event, slick, current, next) => {
  $('.slick-slide.gt2').removeClass('gt2');
  $('.slick-slide.gt1').removeClass('gt1');
  $('.slick-slide.lt1').removeClass('lt1');
  $('.slick-slide.lt2').removeClass('lt2');

  const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
  const lt1 = (current < next && current > 0) ? current : next - 1;
  const gt1 = (current < next || next === 0) ? next + 1 : current;
  const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

  $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

  // Clone processing when moving from 5 to 0
  if (current === 5 && next === 0) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
}

  // Clone processing when moving from 0 to 5
  if (current === 0 && next === 5) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
}

console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
});


//
    //燈箱slick+lightBox組合
    $('.activity_slider').slick({
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',

    });
    // $('.cp_slider').slickLightbox({
    //     caption: false,
    //     lazyLoad: 'ondemand',
    //     useHistoryApi: 'true',
    //     ease: 'ease',
    //     lazy: true
    // });


//accordionblock
$(".accordionblock").each(function () {
  var _accordionItem2 = $(this).children(".Q");
  _accordionItem2.each(function () {
    function accordion2(e) {
      $(this).next(".A").slideToggle();
      $(this).parent().siblings().children(".A").slideUp();
      $(this).parent().siblings().children(".Q").removeClass("turnicon");
      $(this).toggleClass("turnicon");
      e.preventDefault();
  }
  $(this).click(accordion2);
  $(this).keyup(accordion2);
});
});