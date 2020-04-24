var vm = new Vue({
	el: '#loginBlock',
	data: {
		bg_image: '',
		imageArray: [],
	},
	methods: {
		getDailyWallpaper: function () {
			var self = this;
			$.getJSON('https://picsum.photos/v2/list?page=2&limit=1', function (e) {
				self.imageArray = e;
			});
		},
	},
	created: function () {
		var self = this;
		self.getDailyWallpaper();
	},
});
