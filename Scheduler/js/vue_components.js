var calendarComp = new Vue ({
    el:'#schedulerArea',
    components: { 'vuecal': vuecal },
    data: {
        navBar: true,
    },
    methods: {
        navBarToggle: function() {
            if (this.navBar) {
                this.navBar = false
            } else {
                this.navBar = false
            }
        }
    }
    
})