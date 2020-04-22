var vh = new Vue({
	el: '#fsaHome',
	data: {
		quickBtns: [],
	},
	methods: {
		getBtns: function () {
			var self = this;
			$.getJSON('data/buttons.json', function (e) {
				self.quickBtns = e.items;
			});
		},
	},
	created: function () {
		var self = this;
		self.getBtns();
	},
});
