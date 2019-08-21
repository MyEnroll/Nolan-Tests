

$(document).ready(function () {

    // remove this to not shohw the modal on ready.. only here for demo
    UIkit.modal('#obResources').show();
})

$(document).on('click', '#addResource', function () {
    $('<tr class="uk-animation-slide-left-medium"><td> <input class="uk-input uk-border-rounded" type="text" placeholder="Title"></td><td> <input class="uk-input uk-border-rounded" type="text" placeholder="URL"></td><td> <button class="uk-button uk-button-small uk-button-danger remove-resource"> <i class="fal fa-times"></i> </button></td></tr>').insertBefore($(this).closest('tr'));
    $(".uk-modal-body").animate({
        scrollTop: $(document).height()
    }, "slow");
    return false;
});
$(document).on('click', '.remove-resource', function () {
    $('<td class="confirm-remove-block"><div class="uk-position-center uk-flex uk-flex-center"> <button class="uk-margin-small-right uk-border-pill uk-button-small uk-button uk-button-danger me-rmv-res">Remove</button> <button class="me-keep-res uk-button uk-button-small uk-button-secondary uk-margin-small-left uk-border-pill">Keep </button></div></td>').insertAfter($(this).closest('td'));
    $('.confirm-remove-block').fadeIn();
});

$(document).on('click','.me-rmv-res',function() {
    $(this).closest('tr').children('td').fadeOut('350',function() {
        $(this).closest('tr').remove();
    });
  
});
$(document).on('click','.me-keep-res',function() {
    $(this).closest('.confirm-remove-block').fadeOut('350', function() {
        $(this).closest('.confirm-remove-block').remove();
    });
   
});

$(document).on('click','#saveOBResources',function() {
    UIkit.notification("<span uk-icon='icon: check'></span>  Resources Modified", {pos: 'top-right',status: 'primary',timeout: '2500'});
})