var vm = new Vue({
	el: '#covidMain',

	components: {
		apexchart: VueApexCharts,
	},
	data: {
		dailyData: [],
		stateList: [
			'AK',
			'AL',
			'AR',
			'AS',
			'AZ',
			'CA',
			'CO',
			'CT',
			'DC',
			'DE',
			'FL',
			'GA',
			'GU',
			'HI',
			'IA',
			'ID',
			'IL',
			'IN',
			'KS',
			'KY',
			'LA',
			'MA',
			'MD',
			'ME',
			'MI',
			'MN',
			'MO',
			'MS',
			'MT',
			'NC',
			'ND',
			'NE',
			'NH',
			'NJ',
			'NM',
			'NV',
			'NY',
			'OH',
			'OK',
			'OR',
			'PA',
			'PR',
			'RI',
			'SC',
			'SD',
			'TN',
			'TX',
			'UT',
			'VA',
			'VI',
			'VT',
			'WA',
			'WI',
			'WV',
			'WY',
		],
		selState: 'PA',
		confirmed: [],
		death: [],
		dates: [],
		dailyConfirmed: '',
		dailyDeath: '',
		series: [
			{
				name: 'Confirmed Cases',
				data: [],
			},
			{
				name: 'Deaths',
				data: [],
			},
		],
		chartOptions: {
			chart: {
				height: 350,
				type: 'area',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			xaxis: {
				type: 'datetime',
			},
			tooltip: {
				x: {
					format: 'MM/dd/yyyy',
				},
			},
		},
	},
	methods: {
		getDaily: function () {
			var self = this;
			$.getJSON('https://covidtracking.com/api/v1/states/daily.json', function (
				e,
			) {
				self.dailyData = e;
			});
		},
		getStates: function () {
			var self = this;
			$.each(self.dailyData, function (value) {
				var Z = value.state;
				self.stateList.push(Z);
				console.log(Z);
			});
		},
		numberWithCommas: function (x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
	watch: {
		dailyData: function () {
			var self = this;
			$.each(self.dailyDataState, function (key, value) {
				self.confirmed.push([value.dateChecked, value.positive]);
			});
			$.each(self.dailyDataState, function (key, value) {
				self.death.push([value.dateChecked, value.death]);
			});

			self.series = [
				{
					name: 'Confirmed Cases',
					data: self.confirmed,
				},
				{
					name: 'Deaths',
					data: self.death,
				},
			];
			self.dailyConfirmed = self.confirmed[0][1];
			self.dailyDeath = self.death[0][1];
		},
		selState: function () {
			var self = this;
			self.confirmed = [];
			self.death = [];
			$.each(self.dailyDataState, function (key, value) {
				self.confirmed.push([value.dateChecked, value.positive]);
			});
			$.each(self.dailyDataState, function (key, value) {
				self.death.push([value.dateChecked, value.death]);
			});

			self.series = [
				{
					name: 'Confirmed Cases',
					data: self.confirmed.slice(0, 5),
				},
				{
					name: 'Deaths',
					data: self.death.slice(0, 5),
				},
			];
			self.dailyConfirmed = self.confirmed[0][1];
			self.dailyDeath = self.death[0][1];
		},
	},
	computed: {
		dailyDataState: function () {
			var self = this;
			return self.dailyData.filter(function (n) {
				return n.state == self.selState;
			});
		},
	},
	created: function () {
		var self = this;
		self.getDaily();
	},
});
