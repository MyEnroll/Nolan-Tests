$(document).ready(function () {
    setTimeout(function () {

    });
})

$(document).on('change', '.uk-modal input[type="radio"]', function (event) {
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
});
$(document).on('click', '.me-close-btn', function () {
    UIkit.dropdown('#planSelectionsDrop').hide();
});

$(document).on('keyup', 'input.me-validate2[type="text"]', function () {
    if ($(this).val().length > 1) {
        $(this).removeClass('uk-form-danger');
    } else {
        $(this).addClass('uk-form-danger');
    }
})

$(document).on('keyup', 'input.me-validate2[type="email"]', function () {
    var TypeEl = $(this).val();
    if (TypeEl.indexOf("@") > -1 && TypeEl.indexOf(".") >= -1) {
        $(this).removeClass('uk-form-danger');
    } else {
        $(this).addClass('uk-form-danger');
    }
});

$(document).on('change', 'select.required', function () {
    if ($(this).val() != -1) {
        $(this).removeClass('uk-form-danger');
    } else {
        $(this).addClass('uk-form-danger');
    }
});

$(document).on('change', 'input[type="radio"]', function () {
    $('input[type="radio"]').siblings('label').removeClass('uk-form-danger');
});
$(document).on('keyup', 'input.me-validate2[type="number"]', function () {
    if ($(this).val() > 19999 && $(this).val() < 500001) {
        $(this).removeClass('uk-form-danger');
    } else {
        $(this).addClass('uk-form-danger');
    }
});



function saveToHist() {
    var firstName = $.trim($('#firstNameInput').val());
    var emailAddr = $.trim($('#emailEntry').val());
    CompFormInput.pushFormVals();
    UIkit.modal.confirm('<div class="uk-text-large uk-text-primary">One more thing...</div><div>Would you like to send a copy of this Report to <span class="uk-text-bold">' + firstName + '</span> at <span class="uk-text-bold">' + emailAddr + '</span>?</div>', {
        stack: true,
        labels: {
            cancel: 'No, do not send Email',
            ok: 'Yes, Send Email'
        }
    }).then(function () {
            console.log('sending Email');
            capture();
            UIkit.modal.alert('<div class="uk-text-large uk-text-primary">Got it!</div><div>A copy of this report has been sent to <span class="uk-text-bold">' + firstName + '</span> at <span class="uk-text-bold">' + emailAddr + '</span>.</div><div class="pt-2 uk-text-bold">Thanks for using the Total Compensation Statement Manager!</div>').then(function () {
                console.log('sending Email');

            })
        },
        function () {
            UIkit.modal.alert('<div class="uk-text-large uk-text-primary">Got it!</div><div>No email will be sent to <span class="uk-text-bold">' + firstName + '</span> at <span class="uk-text-bold">' + emailAddr + '</span>.</div><div class="pt-2 uk-text-bold">Thanks for using the Total Compensation Statement Manager!</div>').then(function () {
                console.log('notsending Email');
            })
        });
};