var CommuterInput = new Vue({
    el: '#commDC',
    data: {
        allMonthsTrans: null,
        janTrans: null,
        febTrans: null,
        marTrans: null,
        aprTrans: null,
        mayTrans: null,
        juneTrans: null,
        julyTrans: null,
        augTrans: null,
        sepTrans: null,
        octTrans: null,
        novTrans: null,
        decTrans: null,
        allMonthsPark: null,
        janPark: null,
        febPark: null,
        marPark: null,
        aprPark: null,
        mayPark: null,
        junePark: null,
        julyPark: null,
        augPark: null,
        sepPark: null,
        octPark: null,
        novPark: null,
        decPark: null,
    },
    methods: {
        unlockMonth: function (event) {
            targetId = event.currentTarget.id;
            target = $('#' + targetId);
            $(target).css({
                'box-shadow': '0px 3px 8px rgba(0,0,0,.18)'
            })

            $('input').not(target).removeAttr('style');


        }
    },
    watch: {
        allMonthsTrans: function () {
            if (this.allMonthsTrans > 0 || this.allMonthsTrans != "") {
                this.janTrans = this.allMonthsTrans;
                this.febTrans = this.allMonthsTrans;
                this.marTrans = this.allMonthsTrans;
                this.aprTrans = this.allMonthsTrans;
                this.mayTrans = this.allMonthsTrans;
                this.juneTrans = this.allMonthsTrans;
                this.julyTrans = this.allMonthsTrans;
                this.augTrans = this.allMonthsTrans;
                this.sepTrans = this.allMonthsTrans;
                this.octTrans = this.allMonthsTrans;
                this.novTrans = this.allMonthsTrans;
                this.decTrans = this.allMonthsTrans;
            }
            // if (this.allMonthsTrans != "") {
            //     $('.monthTransInp').addClass('uk-disabled');
            // } else {
            //     $('.monthTransInp').removeAttr('disabled');
            // }
        },
        allMonthsPark: function () {
            this.janPark = this.allMonthsPark;
            this.febPark = this.allMonthsPark;
            this.marPark = this.allMonthsPark;
            this.aprPark = this.allMonthsPark;
            this.mayPark = this.allMonthsPark;
            this.junePark = this.allMonthsPark;
            this.julyPark = this.allMonthsPark;
            this.augPark = this.allMonthsPark;
            this.sepPark = this.allMonthsPark;
            this.octPark = this.allMonthsPark;
            this.novPark = this.allMonthsPark;
            this.decPark = this.allMonthsPark;
        }


    }
})