jQuery.expr[':'].icontains = function (a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};
$(document).on('keyup', '#librarySearch', function () {
    UIkit.update($('#libraryCards'), type = 'update');
    var value = $(this).val().toLowerCase();
    $("#libraryCards .me-library-card").filter(function () {
        console.log(value);
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        if ($('#librarySearch').val().length > 0) {
            $('.uk-list li').removeClass('matchedText')
            $('.uk-list li:icontains("' + value.toString() + '")').toggleClass(
                'matchedText');
        } else {
            $('.uk-list li').removeClass('matchedText')
        }
    });
    // $("#libraryCards .me-library-card").addClass('uk-margin');
});



$(document).on('change', '#editMode', function () {
    if ($(this).is(':checked')) {

        console.log('on');
        $('.me-palette').fadeIn();
        $('#libraryCards').attr('uk-sortable', '');
        $('.me-library-card').css('cursor', 'move');
        $('#addNewCat').fadeIn(350);
        $('.uk-input').each(function (e) {
            $(this).prev('span').hide();
            $(this).toggleClass('uk-hidden');

        });
        $('.me-add-new-link').show();

        UIkit.update($('#libraryCards'), type = 'update');
    } else {
        console.log('off');
        $('.me-palette').fadeOut();
        $('#libraryCards').removeAttr('uk-sortable');
        $('.me-library-card').css('cursor', 'auto');
        $('#addNewCat').fadeOut(350);
        $('.uk-input').each(function (e) {
            $(this).prev('span').show();

            $(this).prev('span').text($(this).val().toString()).show();
            $(this).toggleClass('uk-hidden');
        });
        $('.me-link-input-title').each(function (e) {
            $(this).siblings('a').text($(this).val().toString()).show();
        })
        $('.me-link-input-url').each(function (e) {
            $(this).siblings('a').attr('href', $(this).val().toString()).show();
        })
        $('.me-add-new-link').hide();

    }
});


// new card  

$(document).on('click', '.me-add-card', function () {
    $('<div data-type="" style="display:none" class="uk-grid-margin me-library-card-new"><div class="uk-card uk-card-default uk-border-rounded uk-box-shadow-medium uk-overflow-auto me-card uk-card-hover"><div class="uk-card-media-top me-card-top"></div><div class="uk-card-body uk-background-default uk-position-relative"><h3 class="uk-card-title"><span style="display:none"></span><input type="text" class="uk-input" placeholder="Category Name"></h3><ul class="uk-list uk-list-divider"><li><a href="" target="_blank"></a><input type="text" class="me-link-input-title uk-input uk-display-block" placeholder="Document Title"><input type="text" class="me-link-input-url uk-input uk-display-block" placeholder="URL/Link"></li><li><button type="button" class="uk-border-pill  uk-button-primary me-add-new-link"><i class="fal fa-plus"></i> Add Link</button></li></ul></div></div></div>')
        .insertBefore($(this).parent());
    $('.me-library-card-new:last').show('slow', function () {
        UIkit.update($('#libraryCards'), type = 'update');
    });
});
$(document).on('click', '.me-add-new-link', function () {
    $('<li style="display:none" class="me-link-sect"><a href="" target="_blank"></a><input type="text" class="me-link-input-title uk-input uk-display-block" placeholder="Document Title"><input type="text" class="me-link-input-url uk-input uk-display-block" placeholder="URL/Link"></li>')
        .insertBefore($(this).parent());
    $('.me-link-sect:last').slideDown('slow');
})


$(document).ready(function () {
    $('#addNewCat').hide();
    $('.me-palette').hide();
    $('.me-library-card').each(function (e) {
        switch ($(this).data('type')) {
            case 'medical':
                $(this).find('.me-card-top').css('background', '#1e87f0');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-book-medical"></i>');
                break;
            case 'dental':
                $(this).find('.me-card-top').css('background', '#6f42c1');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-toothbrush fa-swap-opacity"></i>'
                );
                break;
            case 'vision':
                $(this).find('.me-card-top').css('background', '#e83e8c');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-eye"></i>');
                break;
            case 'life':
                $(this).find('.me-card-top').css('background', '#20c997');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-hands-heart fa-swap-opacity"></i>'
                );
                break;
            case 'disability':
                $(this).find('.me-card-top').css('background', '#17a2b8');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-crutches"></i>');
                break;

            default:
                $(this).find('.me-card-top').css('background', '#dc3545');
                $(this).find('.me-card-top').append(
                    '<i class="longShadow-FA fad fa-star-of-life"></i>');
        }
    });


    $('.uk-list li a').attr('data-toggle', 'tooltip');
    $('.uk-list li a').attr('data-placement', 'left');
    $('.uk-list li a').each(function (e) {
        $(this).attr('uk-tooltip', 'delay:250; pos: top-left; title: ' + $.trim(
            $(this)
            .text()));
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('body').removeClass('uk-hidden');
    $('.me-library-card').addClass('uk-grid-margin');
})