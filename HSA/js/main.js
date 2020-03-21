var HSAInput = new Vue({
    el: '#hsaInputArea',
    data: {
        hsaBWK: null,
        hsaOpt: null,
        hsaMax: 7100,
        hsaMaxMod: 7100,
        perPayCount: 26,
        chosenHSAPlan: 'HSA Plan 1',
        hsaAnnualDone: null,
        hsaAnnualRem: null,
        additional55: false,
        hsaMonthly: null,
        hsaMonthlyFormat: '',
        hsaAnnualCalc: null,
        hsaAnnualFormat: '',
        overMax: false,
        hsaERCont: 100,
        hsaERContFormat: '',
        hsaEEAnnual: '',
        hsaERAnnual: ''

    },
    watch: {
        hsaMonthly: function () {
            var self = this;
            if (self.hsaMonthly.length == 0 || self.hsaMonthly <= 0) {
                self.hsaAnnualCalc = '';
                self.hsaEEAnnual = '';
                self.hsaAnnualFormat = self.numberWithCommas(((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2));
                self.hsaMonthlyFormat = '';
            } else {
                self.hsaAnnualFormat = self.numberWithCommas(((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2));
                self.hsaAnnualCalc = (Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12;
                self.hsaMonthlyFormat = self.numberWithCommas(Number(self.hsaMonthly));
                self.hsaEEAnnual = self.numberWithCommas(Number(self.hsaMonthly) * 12);
            }
            if (self.hsaMonthly > self.hsaMaxMod) {
                self.hsaMonthly = self.hsaMaxMod;

            }
        },
        hsaAnnualCalc: function () {
            var self = this;
            if (self.hsaAnnualCalc > self.hsaMaxMod) {
                self.overMax = true;
            } else {
                self.overMax = false;
            }
        },

        additional55: function () {
            var self = this;
            if (self.additional55) {
                self.hsaMaxMod = self.hsaMax + 1000;
            } else {
                self.hsaMaxMod = self.hsaMax;
                if (self.hsaAnnualVal > self.hsaMaxMod) {
                    self.hsaAnnualVal = self.hsaMaxMod;
                }
            }
        }
    },
    created: function () {
        var self = this;
        self.hsaERContFormat = self.numberWithCommas(self.hsaERCont);
        self.hsaAnnualCalc = self.hsaERContFormat;
        self.hsaERAnnual = self.numberWithCommas(Number(self.hsaERCont) * 12);
        self.hsaAnnualFormat = self.numberWithCommas(((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2));
    },
    methods: {
        scenarioSwitch: function () {
            var self = this;
            var currentVal = this.hsaAnnualVal;
            if (this.hsaAnnualDone == null) {
                this.hsaAnnualDone = 500;
                this.perPayCount = 12;

                setTimeout(function () {
                    self.hsaAnnualVal = null;
                    setTimeout(function () {
                        self.hsaAnnualVal = currentVal;
                    }, 1)
                }, 1);

            } else {
                this.hsaAnnualDone = null;
                this.perPayCount = 26;
                setTimeout(function () {
                    self.hsaAnnualVal = null;
                    setTimeout(function () {
                        self.hsaAnnualVal = currentVal;
                    }, 1)
                }, 1);
            }
        },
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})