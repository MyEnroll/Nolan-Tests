UIkit.util.on('#libraryCards', 'moved', function (item) {

    $(".me-library-card").each(function (index) {
        console.log(index + ": " + $(this).find('.uk-card-title').text());
    });


    console.log('item moved ' + item);
});
$(document).on('click','.me-palette',function() {
    UIkit.modal('#cardStylePop').show();
});

// icon picker
