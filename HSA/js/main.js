var HSAInput = new Vue ({
    el: '#hsaInputArea',
    data: {
        hsaAnnualVal: null,
        hsaBWK: null,
        hsaOpt: null,
        hsaMax: 7100,
        perPayCount: 26,
        chosenHSAPlan: 'HSA Plan 1',
        hsaAnnualDone: 1000,
        hsaAnnualRem: null
        

    },
    watch: {
        hsaAnnualVal: function() {
            if ((Number(this.hsaAnnualVal) + this.hsaAnnualDone) <= this.hsaMax) {
                this.hsaBWK = ((Number(this.hsaAnnualVal) - Number(this.hsaAnnualDone)) / this.perPayCount).toFixed(2);
            } else {
                this.hsaBWK = ((Number(this.hsaAnnualVal) - Number(this.hsaAnnualDone) )/ this.perPayCount).toFixed(2);
            }
            if (Number(this.hsaAnnualVal) > this.hsaMax ) {
                this.hsaAnnualVal = this.hsaMax;
            }
            this.hsaAnnualRem = this.hsaAnnualVal - this.hsaAnnualDone;
        },
       
        hsaOpt: function() {
            
        }
    }
})