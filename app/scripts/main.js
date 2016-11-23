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
    function toggleOverlay() {
        $('.page-wrapper').toggleClass('js-overlay');
    }
});