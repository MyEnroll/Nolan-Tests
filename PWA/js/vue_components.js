var mainBlock = new Vue({
    el: '#app',
    data: {
        weatherArrayLoc: [],
        weatherArrayDat: [],
        weatherArrayFore: [],
        weatherArrayAll: [],
        dataURI: 'https://api.weatherapi.com/v1/current.json?key=149cd2b7169e49ff9d3171456200502&q=',
        dataURIFore: 'https://api.weatherapi.com/v1/forecast.json?key=149cd2b7169e49ff9d3171456200502&days=5&q=',
        queryString: 19525,
        fullURI: null,
        weatherLoaded: false
    },
    methods: {
        removeCard: function (index) {
            var self = this;
            self.weatherArrayLoc.splice(index, 1);
        },
        getWeather: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: this.dataURI + this.queryString,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log('basic');
                    self.weatherArrayLoc.push(data);

                },
                error: function (xhr) {
                    alert(xhr.responseText);
                }
            });
            
            $.ajax({
                type: "GET",
                url: self.dataURIFore + self.queryString,
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log('forecast');
                    var tempArray = [];
                    tempArray.push(data.forecast.forecastday);
                    self.weatherArrayFore.push(data.forecast);
                    self.weatherArrayLoc.push(Object.assign(self.weatherArrayLoc, self.weatherArrayFore));
                    console.log(self.weatherArrayFore, self.weatherArrayLoc);
                    
                },
                error: function (xhr) {
                    alert(xhr.responseText);
                }
            }).then(function () {
                self.weatherLoaded = true;

            });


        }
    },
    watch: {
        queryString: function () {
            this.fullURI = this.dataURI + this.queryString;
        }
    },
    created: function () {
        this.getWeather();
    }
})