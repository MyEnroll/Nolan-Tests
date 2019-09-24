UIkit.scrollspy('#obHeaderSect', {
    repeat: true,
    cls: 'uk-animation-fade'
});
UIkit.util.on(document, 'outview', '#obHeaderSect', function () {
    $('.me-sticky-nav, #obSideNav').addClass('uk-box-shadow-large');
});
UIkit.util.on(document, 'inview', '#obHeaderSect', function () {
    $('.me-sticky-nav, #obSideNav').removeClass('uk-box-shadow-large');
});

UIkit.util.on(document, 'show', '.obMainContent', function () {
    $('.obMainContent').closest('.uk-grid').find('.uk-tab-left > .uk-active').each(function () {
        if ($(this).is(':visible')) {
            console.log($(this).text());
            $('.me-ob-content-title').text($(this).text());
        }

    });

});
$(document).ready(function () {
    $('.obMainContent').closest('.uk-grid').find('.uk-tab-left > .uk-active').each(function () {
        if ($(this).is(':visible')) {
            console.log($(this).text());
            $('.me-ob-content-title').text($(this).text());
        }

    });
});
UIkit.util.on(document, 'show', '.me-parent-nav > .uk-active', function () {
    $('.obMainContent').closest('.uk-grid').find('.uk-tab-left > .uk-active').each(function () {
        if ($(this).is(':visible')) {
            console.log($(this).text());
            $('.me-ob-content-title').text($(this).text());
        }

    });
});