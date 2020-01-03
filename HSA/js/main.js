var HSAInput = new Vue ({
    el: '#hsaInputArea',
    data: {
        hsaAnnualVal: null,
        hsaBWK: null,
        hsaOpt: null,
        hsaMax: 7100,
        perPayCount: 26,
        chosenHSAPlan: 'HSA Plan 1',
        

    },
    watch: {
        hsaAnnualVal: function() {
            if (this.hsaAnnualVal <= this.hsaMax) {
                this.hsaBWK = (Number(this.hsaAnnualVal) / this.perPayCount).toFixed(2);
            } else {
                this.hsaBWK = (Number(this.hsaMax) / this.perPayCount).toFixed(2);
                this.hsaAnnualVal = this.hsaMax;
            }
        },
       
        hsaOpt: function() {
            
        }
    }
})