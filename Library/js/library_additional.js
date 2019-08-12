UIkit.util.on('#libraryCards', 'moved', function (item) {

    $(".me-library-card").each(function (index) {
        console.log(index + ": " + $(this).find('.uk-card-title').text());
    });


    console.log('item moved ' + item);
});
// $(document).on('click','.me-palette',function() {
//     UIkit.modal('#cardStylePop').show();
// });

// icon picker
$(document).on('click','.icp-opts',function() {
    console.log('clicked');
    $(this).iconpicker({
        title: 'Pick a new Icon',
        icons: [{
                title: "fad fa-book-medical",
                searchTerms: ['medical','doctor']
            },
            {
                title: "fad fa-toothbrush fa-swap-opacity",
                searchTerms: ['dental','tooth']
            },
            {
                title: "fad fa-eye",
                searchTerms: ['vision','eye','glasses','contacts']
            },
            {
                title: "fad fa-hands-heart fa-swap-opacity",
                searchTerms: ['life','coverage','insurance']
            },
            {
                title: "fad fa-crutches",
                searchTerms: ['short term','short','term','disable','injury','hurt']
            },
            {
                title: "fad fa-wheelchair",
                searchTerms: ['long term','long','term','disable','injury','hurt']
            },
            {
                title: "fad fa-money-check",
                searchTerms: ['money','savings','401','saving','hsa','fsa']
            },
            {
                title: "fad fa-users-crown",
                searchTerms: ['admin','manager']
            },
            {
                title: "fad fa-info-circle",
                searchTerms: ['info','question','help']
            },
            {
                title: "fad fa-question-circle",
                searchTerms: ['info','question','help']
            },
            {
                title: "fad fa-sitemap",
                searchTerms: ['organization','team']
            },
            {
                title: "fad fa-address-card",
                searchTerms: ['address','location']
            },
            {
                title: "fad fa-camera-retro",
                searchTerms: ['camera','picture','photo']
            },
            {
                title: "fad fa-heartbeat fa-swap-opacity",
                searchTerms: ['wellness','fitness']
            },
            {
                title: "fad fa-file-pdf",
                searchTerms: ['document','default','pdf','summary']
            },
            {
                title: "fad fa-prescription",
                searchTerms: ['presecription','rx','medicine','drug']
            },
            {
                title: "fad fa-venus",
                searchTerms: ['female','woman','women']
            },
            {
                title: "fad fa-mars",
                searchTerms: ['male','men','man']
            },
            {
                title: "fad fa-star-of-life",
                searchTerms: ['other']
            },
        ],
        selectedCustomClass: 'label label-success',
        placement: 'bottomRight',
        // note that this is ignored cause we have an accept button:
        hideOnSelect: true,
    }).data('iconpicker').show();
})
$('.icp-opts').iconpicker({
    title: 'Pick a new Icon',
    icons: [{
            title: "fad fa-book-medical",
            searchTerms: ['medical','doctor']
        },
        {
            title: "fad fa-toothbrush fa-swap-opacity",
            searchTerms: ['dental','tooth']
        },
        {
            title: "fad fa-eye",
            searchTerms: ['vision','eye','glasses','contacts']
        },
        {
            title: "fad fa-hands-heart fa-swap-opacity",
            searchTerms: ['life','coverage','insurance']
        },
        {
            title: "fad fa-crutches",
            searchTerms: ['short term','short','term','disable','injury','hurt']
        },
        {
            title: "fad fa-wheelchair",
            searchTerms: ['long term','long','term','disable','injury','hurt']
        },
        {
            title: "fad fa-money-check",
            searchTerms: ['money','savings','401','saving','hsa','fsa']
        },
        {
            title: "fad fa-users-crown",
            searchTerms: ['admin','manager']
        },
        {
            title: "fad fa-info-circle",
            searchTerms: ['info','question','help']
        },
        {
            title: "fad fa-question-circle",
            searchTerms: ['info','question','help']
        },
        {
            title: "fad fa-sitemap",
            searchTerms: ['organization','team']
        },
        {
            title: "fad fa-address-card",
            searchTerms: ['address','location']
        },
        {
            title: "fad fa-camera-retro",
            searchTerms: ['camera','picture','photo']
        },
        {
            title: "fad fa-heartbeat fa-swap-opacity",
            searchTerms: ['wellness','fitness']
        },
        {
            title: "fad fa-file-pdf",
            searchTerms: ['document','default','pdf','summary']
        },
        {
            title: "fad fa-prescription",
            searchTerms: ['presecription','rx','medicine','drug']
        },
        {
            title: "fad fa-venus",
            searchTerms: ['female','woman','women']
        },
        {
            title: "fad fa-mars",
            searchTerms: ['male','men','man']
        },
        {
            title: "fad fa-star-of-life",
            searchTerms: ['other']
        },
    ],
    selectedCustomClass: 'label label-success',
    placement: 'bottomRight',
    // note that this is ignored cause we have an accept button:
    hideOnSelect: true,
}).data('iconpicker').show();


$(document).on('iconpickerSelected','.icp', function (e) {
    console.log('icon picked');
    $(this).closest('.me-card-top').find('.picker-target').get(0).className = 'picker-target ' +
        e.iconpickerInstance.options.iconBaseClass + ' ' +
        e.iconpickerInstance.options.fullClassFormatter(e.iconpickerValue) + ' longShadow-FA';
    $('.picker-target').css('color', 'white');
    console.log(e.iconpickerValue);
});