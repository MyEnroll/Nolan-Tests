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
        getWeather: function () {
            var self = this;
            $.ajax({
                type: "GET",
                url: this.dataURI + this.queryString,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    
                    self.weatherArrayLoc.push(data);

                },
                error: function(xhr) {
                    alert(xhr.responseText);
                  }
            }).then(function() {
                self.weatherLoaded = true;
            });


            $.ajax({
                type: "GET",
                url: this.dataURIFore + this.queryString,
                data: JSON.stringify({}),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.weatherArrayFore = data.forecast;
                    self.weatherArrayAll = self.weatherArrayLoc;

                },
                error: function (xhr) {
                    alert(xhr.responseText);
                }
            });
        }
    },
    watch: {
        queryString: function() {
            this.fullURI = this.dataURI + this.queryString;
        }
    },
    created: function() {
        this.getWeather();
    }
})