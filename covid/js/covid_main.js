var vm = new Vue({
	el: '#covidMain',
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
		selState: '',
	},
	methods: {
		getDaily: function () {
			var self = this;
			$.getJSON('https://covidtracking.com/api/v1/states/daily.json', function (
				e,
			) {
				self.dailyData = e.filter(function (n) {
					return (n.state = self.selState);
				});
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
	},

	created: function () {
		var self = this;
		self.getDaily();
	},
});
