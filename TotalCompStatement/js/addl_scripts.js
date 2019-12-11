
$(document).ready(function () {
    setTimeout(function () {

    });
})

$(document).on('change', '.uk-dropdown input[type="radio"]', function (event) {
    var searchIDs = $("input:radio:checked").map(function () {
        return $(this).attr('id');
    }).get();
    if (searchIDs.length == 0) {
        $('#chartArea, #ratesTable').addClass('uk-hidden');
        $('#noData').removeClass('uk-hidden');

    } else {
        $('#chartArea, #ratesTable').removeClass('uk-hidden');
        $('#noData').addClass('uk-hidden');
    }
    CompBreakdown.compChoicesSel = searchIDs;
    CompBreakdown.loadContributions();
    

});
$(document).on('click', '.me-close-btn', function () {
    UIkit.dropdown('#planSelectionsDrop').hide();
});