UIkit.util.on(document,'show','#schedulerNav',  function () {
    $('body').addClass('navPadding');
});
UIkit.util.on(document,'hide','#schedulerNav',  function () {
    $('body').removeClass('navPadding');
});