var vm = new Vue({
	el: '#loginBlock',
	data: {
		bg_image: '',
		dailyImage: null,
		imageArray: [],
	},
	methods: {
		getDailyWallpaper: function () {
			var self = this;

			$.getJSON('data/wallpapers.json', function (e) {
				self.imageArray = e.value;
			}).done(function (e) {
				self.dailyImage =
					self.imageArray[Math.floor(Math.random() * self.imageArray.length)];
				self.bg_image = self.dailyImage.contentUrl;
			});
		},
	},
	created: function () {
		var self = this;
		self.getDailyWallpaper();
	},
});
