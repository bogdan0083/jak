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

    $('body').on('click', '.js-overlay', function (e) {
         e.stopPropagation();
         e.stopImmediatePropagation();

        if ($(e.target).hasClass('js-overlay')) {
            $('.js-overlay').removeClass('js-overlay');

            $('.mobile-menu').removeClass('active');
            $('.page-wrapper').removeClass('active');
            $('.search-form').removeClass('js-active');
            $('.header .topline').removeClass('js-active');
        }
    });
    
    $('.js-categories-trigger').click(function (e) {


        var wWidth = $(window).width();
        var $asideCatalogIsActive = $('.catalog-nav-aside').length;

        if (wWidth > 880 && !$asideCatalogIsActive) {

            e.preventDefault();

            $(this).toggleClass('active');
            $('.catalog-nav').toggleClass('js-active');

        } else if (wWidth < 880 && $asideCatalogIsActive) {
            e.preventDefault();

            $(this).toggleClass('active');
            $('.catalog-nav-aside').toggleClass('js-active');
        }

    });

    $('.service-block .btn').hover(function () {
        $(this).parent().find('.icon').addClass('active');
    }, function () {
        $(this).parent().find('.icon').removeClass('active');
    });

    $('.custom-select').selectmenu();

    $('.fancybox-modal').fancybox({
        closeBtn: false,
        fitToView: false,
        scrolling: 'visible',
        padding: 0,
        type: 'inline'
    });

    $('.js-modal-timer-trigger').click(function (e) {
        e.preventDefault();

        $.fancybox($('#success-popup'), {
            closeBtn: false,
            fitToView: false,
            scrolling: 'visible',
            padding: 0,
            type: 'inline',
            beforeShow: function () {

                var count = 4;

                var timer = setInterval(function () {

                    if (count === 0) {

                        $.fancybox.close();

                        clearInterval(timer);
                    }

                    $('.js-success-countdown').text(count);
                    count--;

                }, 1000);
            }
        });

    });

    $('.fancybox').fancybox();

    if ($(window).width() > 880) {

        $('.mega-slider').slick({
            slidesToShow: 1,
            infinite: true,
            pauseOnHover: false,
            dots: true
        });

        initParallax();
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

    $(function () {
        var stickWidth = 880;
        var win = $(window);
        var menu = $(".js-sticky-col");

        if (win.width() > stickWidth) {
            menu.stick_in_parent();
        }
        win.resize(function () {
            if (win.width() > stickWidth) {
                menu.stick_in_parent();
            } else {
                menu.trigger("sticky_kit:detach");
            }
        });
    });

    function toggleOverlay() {
        $('.page-wrapper').toggleClass('js-overlay');
    }

    // функция для параллакса. инициализирует Событие на элементах
    function initParallax () {

        var wScroll;
        var shift;
        var windowHeight = $(window).height();

        var $parallaxItem = $('.js-parallax-item');

        if (!$parallaxItem.length) {
            return;
        }

        $(window).on('scroll', onParallaxMove);

        function onParallaxMove (e) {

            wScroll = $(window).scrollTop();

            $parallaxItem.each(function(_, item) {

                shift = parseInt(wScroll);

                if (shift > 0) {

                    var parallaxRatio = $(this).data('parallax-ratio');

                    $(this).css({
                        transform: 'translateY(' + shift * parallaxRatio + 'px'
                    });
                }






            });

        }
    }
});