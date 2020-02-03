var calendarComp = new Vue({
    el: '#schedulerArea',
    components: {
        'vuecal': vuecal
    },
    data: {
        navBar: true,
        twelveHour: true,
        contextDate: null,
        contextTime: null,
        existingAppt: false,
        events: [{
            start: '2020-02-03 10:30',
            end: '2020-02-03 13:30',
            title: 'Doctor appointment',
            content: '<i class="fad fa-user"></i>',
            class: 'eeAppt'

        }],
        eventsTemp: [],
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
    },
    methods: {
        navBarToggle: function () {
            if (this.navBar) {
                this.navBar = false;
            } else {
                this.navBar = false;
            }
        },
        existingApptClick: function (event) {
            var self = this;
            this.existingAppt = true;
           setTimeout(function() {
            self.contextDate = self.monthNames[event.startDate.getMonth()] + ' ' + event.startDate.getDate() + ', ' + event.startDate.getFullYear();
            self.contextTime = ((event.startDate.getHours() > 12) ? event.startDate.getHours() - 12 : event.startDate.getHours()) + ':' + event.startDate.getMinutes() + ((event.startDate.getHours() > 12) ? 'pm' : 'am') + ' - ' + ((event.endDate.getHours() > 12) ? event.endDate.getHours() - 12 : event.endDate.getHours()) + ':' + event.startDate.getMinutes() + ((event.endDate.getHours() > 12) ? 'pm' : 'am');
            self.existingAppt = true;
           })
        },
        setTemp: function (event) {

            var selMinutes = (event.date.getMinutes() > 30) ? '30' : '00';
            var selStart = event.date.getFullYear() + '-' + (event.date.getMonth() + 1) + '-' + event.date.getDate() + ' ' + event.date.getHours() + ':' + selMinutes;
            var selEnd = event.date.getFullYear() + '-' + (event.date.getMonth() + 1) + '-' + event.date.getDate() + ' ' + (event.date.getHours() + 1) + ':' + selMinutes;

            if (this.existingAppt) {
                console.log('existing appt');
                this.existingAppt = true;
            } else {
                this.existingAppt = false;
                this.contextDate = this.monthNames[event.date.getMonth()] + ' ' + event.date.getDate() + ', ' + event.date.getFullYear();
                this.contextTime = ((event.date.getHours() > 12) ? event.date.getHours() - 12 : event.date.getHours()) + ':' + selMinutes + ((event.date.getHours() > 12) ? 'pm' : 'am') + ' - ' + ((event.date.getHours() > 12) ? event.date.getHours() + 1 - 12 : event.date.getHours() + 1) + ':' + selMinutes + ((event.date.getHours() > 12) ? 'pm' : 'am');
                this.eventsTemp.push({
                    start: selStart,
                    end: selEnd,
                    title: '',
                    class: 'tempAppt'
                });


                if (this.eventsTemp.length > 1) {
                    this.eventsTemp.splice(0, 1);
                    this.events.pop();
                }
                this.events = this.events.concat(this.eventsTemp);
            }
            this.contextClick();


        },
        contextClick: function () {
            $(".custom-menu").hide(100);
            this.existingAppt = false;
            event.preventDefault();

            // Show contextmenu
            $(".custom-menu").finish().toggle(100).

            // In the right position (the mouse)
            css({
                top: event.pageY + "px",
                left: event.pageX + "px"
            });

        },
        singleClick: function () {
            $(".custom-menu").hide(100);
            if (this.eventsTemp.length > 0) {
                this.eventsTemp.splice(0, 1);
                this.events.pop();
            }
            this.existingAppt = false;
        }
    }

})