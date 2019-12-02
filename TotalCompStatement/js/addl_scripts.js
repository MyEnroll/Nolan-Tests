$(document).on('click','.me-check-cont',function() {
    if ($('#disclaimerCheck').is(':checked')) {
        $('#disclaimerCheck').prop('checked',false);
        $('.me-check-cont').removeAttr('style');
    } else {
        $('#disclaimerCheck').prop('checked',true);
        $('.me-check-cont').css({'background':'#1e87f0','color':'#fff'});
    }
})