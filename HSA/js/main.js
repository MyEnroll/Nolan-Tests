var HSAInput = new Vue ({
    el: '#hsaInputArea',
    data: {
        hsaAnnualVal: null,
        hsaBWK: null,
        hsaOpt: null

    },
    watch: {
        hsaAnnualVal: function() {
            this.hsaBWK = (Number(this.hsaAnnualVal) / 26).toFixed(2)
        },
        hsaOpt: function() {
            
        }
    }
})