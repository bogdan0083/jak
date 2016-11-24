$(document).ready(function () {
    $('.nav-trigger-wrap').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });

    $('.mobile-search-trigger').click(function (e) {

        e.preventDefault();
        e.stopPropagation();
        $('.search-form').toggleClass('js-active');
        $('.header .topline').toggleClass('js-active');

        toggleOverlay();
    });

    $('.page-wrapper').click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        if ($(this).hasClass('js-overlay')) {
            $(this).removeClass('js-overlay');

            $('.mobile-menu').removeClass('active');
            $('.page-wrapper').removeClass('active');
            $('.search-form').removeClass('js-active');
            $('.header .topline').removeClass('js-active');
        }
    });
    
    $('.js-categories-trigger').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $('.catalog-nav').toggleClass('js-active');
    });

    if ($(window).width() > 880) {

        $('.mega-slider').slick({
            slidesToShow: 1,
            infinite: true,
            pauseOnHover: false,
            dots: true
        });
        
        $('.mega-slider').on('init', function () {
            
        });
        //
        // $('.about-slider .wrapper').slick({
        //     slidesToShow: 1,
        //     infinite: true,
        //     autoplay: true,
        //     pauseOnHover: false,
        //     prevArrow: $('.about-slider .long-arrow-left'),
        //     nextArrow: $('.about-slider .long-arrow-right')
        // });
        //
        // $('.about-slider .wrapper').on('beforeChange', function(e, slick, cur, next) {
        //     $('.js-slider-count').find('a').removeClass('active').eq(next).addClass('active');
        // });
        //
        // $('.js-slider-count').on('click', 'a', function(e){
        //     e.preventDefault();
        //
        //     $('.about-slider .wrapper').slick('slickGoTo', $(this).index());
        // });
        //
        //
        // $('.new-items-slider').slick({
        //     slidesToShow: 1,
        //     dots: true,
        //     infinite: true,
        //     autoplay: true,
        //     pauseOnHover: false
        // });
    }

    function toggleOverlay() {
        $('.page-wrapper').toggleClass('js-overlay');
    }
});