
var CompFormInput = new Vue({
    el: '#totCompForm',
    data: {
        state: 'Self Only',
        compLocality: [],
        compClasses: [],
        compStatus: [],
        compRetirement: [],
        compContributionsSelf: [],
        compContributionsFamily: [],
        compContributions: []
    },
    methods: {
        familySwitch: function () {
            var tableHeight = $('#ratesTable').height();
            $('#ratesTable').height(tableHeight);
            if (this.state == "Self Only") {
                this.state = "Family";
                this.loadContributions();
            } else {
                this.state = "Self Only";
                this.loadContributions();
            }
            setTimeout(function () {
                $('#ratesTable').height('auto');
            }, 150);


        },
        loadContributions: function () {
            var self = this;
            self.compContributions = null;
            if (self.state == "Family") {
                $.ajax({
                    type: "GET",
                    url: "./data/contributions.json",
                    data: JSON.stringify({}),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        self.compContributions = data.filter(function (n) {
                            return n.Tier === 'Self and Family'
                        });

                    },
                    error: function (data) {
                        // alert("Error: " + data.d);
                        console.log('error');
                    }
                });
            } else {
                $.ajax({
                    type: "GET",
                    url: "./data/contributions.json",
                    data: JSON.stringify({}),
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        self.compContributions = data.filter(function (n) {
                            return n.Tier === 'Self Only'
                        });
                        var series_data_arrX = [];
                        var series_data_arrY = [];
                        $.each(self.compContributions, function (key, value) {
                            var X = value.ee_cost;
                            var Y = value.er_cost;
                            series_data_arrX.push(X);
                            series_data_arrY.push(Y);


                        });
                        console.log(series_data_arrX);
                        var ee_cost_total = series_data_arrX.reduce(function (sum, d) {
                            return sum + d;
                        }, 0);
                        console.log(ee_cost_total);
                        var er_cost_total = series_data_arrY.reduce(function (sum, d) {
                            return sum + d;
                        }, 0);
                        console.log(er_cost_total);
                    },
                    error: function (data) {
                        // alert("Error: " + data.d);
                        console.log('error');
                    }
                });
            }



        },
        loadLocality: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: "./data/locality.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compLocality = data;

                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
        },
        loadClasses: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: "./data/classes.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compClasses = data;
                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
        },
        loadStatus: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: "./data/status.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compStatus = data;
                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
        },
        loadRetirement: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: "./data/retirement.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compRetirement = data;
                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
        },
        runReport: function () {
            var fName = $.trim($('#firstNameInput').val());
            var mName = $.trim($('#middleNameInput').val());
            var lName = $.trim($('#lastNameInput').val());
            var emailP = $.trim($('input[type=email]').val());
            var status = $('input[name="statusSel"]:checked').val();
            var localitySel = $('#localityDrop').children('option:selected').text();
            var retirementSel = $('#retirementDrop').children('option:selected').text();
            var classSel = $('#classDrop').children('option:selected').text();
            this.state = 'test';
            if (fName == "" || lName == "" || emailP == "" || status == null || localitySel == null || retirementSel == null || classSel == null) {
                UIkit.modal.alert('<div class="uk-text-large uk-text-primary">Oops!</div><div class="uk-margin">It looks like you missed some required fields. Make sure to fill in the below fields.</div><div><ul class="uk-list me-list-pop"><li>First Name</li><li>Last Name</li><li>Email Address</li><li>Base Salary</li><li>Status</li><li>Locality</li><li>Retirement Plan</li><li>Benefits Class</li></ul></div>').then(function () {
                    console.log('Alert closed.')
                });
            } else {
                UIkit.accordion('#totalCompAccord').toggle(0);
                UIkit.accordion('#totalCompAccord').toggle(1);
                $('.me-name-hdr').text(fName + " " + lName);
                $('#emailInput').text(emailP);
                $('#statusColl').text(status);
                $('#localityColl').text(localitySel);
                $('#retirementColl').text(retirementSel);
                $('#classColl').text(classSel);
            }

        }
    },
    created: function () {
        this.loadLocality();
        this.loadClasses();
        this.loadStatus();
        this.loadRetirement();
        this.loadContributions();
    },
});

