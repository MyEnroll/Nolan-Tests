var HSAInput = new Vue({
    el: '#hsaInputArea',
    data: {
        hsaAnnualVal: null,
        hsaBWK: null,
        hsaOpt: null,
        hsaMax: 7100,
        perPayCount: 26,
        chosenHSAPlan: 'HSA Plan 1',
        hsaAnnualDone: null,
        hsaAnnualRem: null


    },
    watch: {
        hsaAnnualVal: function () {
            if ((Number(this.hsaAnnualVal) + this.hsaAnnualDone) <= this.hsaMax) {
                this.hsaBWK = ((Number(this.hsaAnnualVal) - Number(this.hsaAnnualDone)) / this.perPayCount).toFixed(2);
            } else {
                this.hsaBWK = ((Number(this.hsaAnnualVal) - Number(this.hsaAnnualDone)) / this.perPayCount).toFixed(2);
            }
            if (Number(this.hsaAnnualVal) > this.hsaMax) {
                this.hsaAnnualVal = this.hsaMax;
            }
            this.hsaAnnualRem = this.hsaAnnualVal - this.hsaAnnualDone;
        },

        hsaOpt: function () {

        }
    },
    methods: {
        scenarioSwitch: function () {
            var self = this;
            var currentVal = this.hsaAnnualVal;
            if (this.hsaAnnualDone == null) {
                this.hsaAnnualDone = 500;
                this.perPayCount = 12;
                
                setTimeout(function() {
                    self.hsaAnnualVal = null;
                    setTimeout(function() {
                        self.hsaAnnualVal = currentVal;
                    },1)
                },1);

            } else {
                this.hsaAnnualDone = null;
                this.perPayCount = 26;
                setTimeout(function() {
                    self.hsaAnnualVal = null;
                    setTimeout(function() {
                        self.hsaAnnualVal = currentVal;
                    },1)
                },1);
            }
        }
    }
})