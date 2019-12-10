function groupBy(array, key) {
    const result = {}
    array.forEach(item => {
        if (!result[item[key]]) {
            result[item[key]] = []
        }
        result[item[key]].push(item)
    })
    return result
};
var CompFormInput = new Vue({
    el: '#totCompForm',
    data: {
        compLocality: [],
        compClasses: [],
        compStatus: [],
        compRetirement: [],
        compContributions: []
    },
    methods: {

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


            var today = new Date();
            var ampm = today.getHours() >= 12 ? 'pm' : 'am';
            var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes();
            var dateTime = date + ' - ' + time + ' ' + ampm;
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
                CompBreakdown.calcComp();
                UIkit.accordion('#totalCompAccord').toggle(0);
                UIkit.accordion('#totalCompAccord').toggle(1);
                $('.me-name-hdr').text(fName + " " + lName);
                $('#emailInput').text(emailP);
                $('#statusColl').text(status);
                $('#viewedTs').text(dateTime);
                $('#localityColl').text(localitySel);
                $('#retirementColl').text(retirementSel);
                $('#classColl').text(classSel);
                $('#compDetailsSect').removeClass('uk-disabled');
            }

        }
    },

    created: function () {
        this.loadLocality();
        this.loadClasses();
        this.loadStatus();
        this.loadRetirement();
    },
});


var CompBreakdown = new Vue({
    el: '#breakdownArea',
    data: {
        state: 'Self Only',
        compContributions: [],
        compChoices: [],
        compChoicesSel: [],
        eeCostTotal: '',
        erCostTotal: '',
        costArray: [],
        emptyData: false,
        agencyCont: '',
        eeCostCal: '',
        compFedBen: [],
        compRetBen: [],
        compSSVar: '',
        compMedVar: '',
        compTotalPays: '',
        salaryCollect: '',
        InsuranceVal: [],
        lifeRate: [],
        lifeEEcont: '',
        lifeERcont: '',
        lifeTotalcont: '',
        ChartLabels: ['Base Salary', 'Insurance Benefits', 'Social Security', 'Medicare']
    },
    computed: {
        grouping() {
            return groupBy(this.compChoices, 'Plan')
        }

    },
    methods: {
        loadVariables: function () {
            self = this;
            $.getJSON('./data/variables.json', function (data) {
                console.log(data);
                self.compSSVar = data.social_security_rate;
                self.compMedVar = data.medicare_rate;
                self.compTotalPays = data.total_pays;

            });

        },
        loadFedBen: function () {
            var self = this;
            var baseSal = self.salaryCollect;
            var baseSalCv = (baseSal < 137700) ? baseSal : 137700;
            var fedSS = (baseSalCv * self.compSSVar) / self.compTotalPays;
            var fedMed = (baseSalCv * self.compMedVar) / self.compTotalPays;
            self.compFedBen = [];
            self.compFedBen.push({
                'Fed_Ben': 'Social Security',
                'Fed_Val': '$' + fedSS.toFixed(2)
            }, {
                'Fed_Ben': 'Medicare',
                'Fed_Val': '$' + fedMed.toFixed(2)
            });
            $.ajax({
                type: "GET",
                url: "./data/lifeRates.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.lifeRate = data.filter(function (n) {
                        return n.Plan_ID == self.compContributions[self.compContributions.length - 1].Plan_ID;
                    });

                    self.lifeEEcont = self.lifeRate[0].ee_rate;
                    self.lifeERcont = self.lifeRate[0].er_rate;
                    var series_total_cost = [];

                    $.each(CompBreakdown.compContributions, function (key, value) {
                        var Z = value.total_cost;
                        series_total_cost.push(Z);
                    });
                    var total_cost = series_total_cost.reduce(function (sum, d) {
                        return sum + d
                    });
                    CompBreakdown.InsuranceVal = Number(total_cost);

                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
            
            self.compContributions[self.compContributions.length - 1].Tier = ('$' + parseFloat(Math.round(self.salaryCollect / 1000) * 1000, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            if (self.compContributions[self.compContributions.length - 1].Option == "FDIC Life Only") {
                self.compContributions[self.compContributions.length - 1].ee_cost = 0;
                self.compContributions[self.compContributions.length - 1].er_cost = Math.ceil(((self.salaryCollect / 1000) * self.lifeERcont) * 100) / 100;
                self.compContributions[self.compContributions.length - 1].total_cost = Math.ceil(((self.compContributions[self.compContributions.length - 1].ee_cost) + (self.compContributions[self.compContributions.length - 1].er_cost)) * 100) /100;
            };

            self.costArray = [];
            setTimeout(function() {
                self.costArray.push(self.salaryCollect, self.InsuranceVal, fedSS, fedMed);
            },250);

            
            chartAct.reset();
        },
        loadLifeRates: function () {
            var self = this;
            $.getJSON('./data/lifeRates.json', function (data) {

                self.lifeRate = data.filter(function (n) {
                    return n.Plan_ID == self.compContributions[self.compContributions.length - 1].Plan_ID;
                });

                self.lifeEEcont = self.lifeRate[0].ee_rate;
                self.lifeERcont = self.lifeRate[0].er_rate;

            });
        },
        clearReset: function () {
            $('.uk-dropdown input[type="radio"]').prop('checked', false);
            CompBreakdown.compContributions = [];
            CompBreakdown.costArray = [];
            setTimeout(function () {
                chartAct.reset();
            }, 250);
            UIkit.notification({
                message: 'Selections Cleared',
                status: 'primary',
                pos: 'top-right',
                timeout: 3000
            });
            $('#chartArea, #ratesTable').addClass('uk-hidden');
            $('#noData').removeClass('uk-hidden');
        },
        calcComp: function () {
            var self = this;

            var currColl = $('#currency-field').val();
            var baseSal = Number(currColl.replace(/[^0-9.-]+/g, ""));
            self.salaryCollect = baseSal;
            self.agencyCont = (Number(currColl.replace(/[^0-9.-]+/g, "")) * .065) + Number(self.eeCostCal);
            var totalCompensation = baseSal + self.agencyCont;
            self.compFedBen.push([{
                'Fed_Ben': 'Social Security',
                'Fed_Val': baseSal
            }, {
                'Fed_Ben': 'Medicare',
                'Fed_Val': baseSal
            }]);

            $('#agencyCont').text('$' + parseFloat(self.agencyCont, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#basePayColl').text(currColl);
            $('#totalComp').text('$' + parseFloat(totalCompensation, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            
            self.loadFedBen();
            
        },
        loadChoices: function () {
            var self = this;
            self.compChoices = [];
            $.ajax({
                type: "GET",
                url: "./data/contributions.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compChoices = data;
                    var defaultPlans = [];
                    self.compChoicesSel = data.filter(function (n) {
                        return n.default == true;
                    });
                    $.each(self.compChoicesSel, function (key, value) {
                        var X = value.Plan_ID;
                        var Y = value.Tier_ID;
                        defaultPlans.push(X + Y)
                    });
                    self.compChoicesSel = defaultPlans;

                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
        },


        loadContributions: function () {
            var self = this;
            self.compContributions = [];
            self.costArray = [];

            $.ajax({
                type: "GET",
                url: "./data/contributions.json",
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.compChoices = data;
                    self.compContributions = data.filter(function (n) {
                        return $.inArray(n.Plan_ID + n.Tier_ID, self.compChoicesSel) >= 0
                    });


                    var series_data_arrX = [];
                    var series_data_arrY = [];
                    var series_cost_array = [];
                    var series_total_cost = [];

                    $.each(self.compContributions, function (key, value) {
                        var X = value.ee_cost;
                        var Y = value.er_cost;
                        var Z = value.total_cost;
                        series_data_arrX.push(X);
                        series_data_arrY.push(Y);
                        series_cost_array.push([X, Y]);
                        series_total_cost.push(Z);
                    });




                    var ee_cost_total = series_data_arrX.reduce(function (sum, d) {
                        return sum + d;
                    }, 0);
                    var total_cost = series_total_cost.reduce(function (sum, d) {
                        return sum + d
                    });

                    var er_cost_total = series_data_arrY.reduce(function (sum, d) {
                        return sum + d;
                    }, 0);
                    self.eeCostTotal = ee_cost_total;
                    self.erCostTotal = er_cost_total;
                    self.eeCostCal = ee_cost_total;
                    self.InsuranceVal = Number(total_cost);


                    $.each(self.compChoicesSel, function (index, value) {
                        $('#' + value).prop('checked', true);
                    });
                    self.loadFedBen();



                },
                error: function (data) {
                    // alert("Error: " + data.d);
                    console.log('error');
                }
            });
            

            UIkit.update(element = document.body, type = 'update');

        },
        loadDefault: function () {
            $('#chartArea, #ratesTable').removeClass('uk-hidden');
            $('#noData').addClass('uk-hidden');
            this.loadContributions();

            setTimeout(function () {
                chartAct.reset();

            }, 250);

        }

    },


    created: function () {
        this.loadVariables();
        //this.loadContributions();
        this.loadChoices();
        this.loadDefault();


    }
});