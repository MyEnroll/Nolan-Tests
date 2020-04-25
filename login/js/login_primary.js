var vm = new Vue({
	el: '#loginBlock',
	data: {
		bg_image: '',
		dailyImage: null,
		imageArray: [],
		infoCards: [],
		selectedPeopleImage: '',
		peopleImages: [
			'pictures/1.png',
			'pictures/2.png',
			'pictures/3.png',
			'pictures/4.png',
			'pictures/5.png',
			'pictures/6.png',
			'pictures/7.png',
		],
	},
	methods: {
		getImages: function () {
			var self = this;
			$.getJSON('data/wallpapers.json', function (e) {
				self.imageArray = e.value;
			}).done(function (e) {
				self.dailyImage =
					self.imageArray[Math.floor(Math.random() * self.imageArray.length)];
				self.bg_image = self.dailyImage.contentUrl;
				self.selectedPeopleImage =
					self.peopleImages[
						Math.floor(Math.random() * self.peopleImages.length)
					];
			});
		},
		getInfoCards: function () {
			var self = this;
			$.getJSON('data/infocards.json', function (e) {
				self.infoCards = e;
			});
		},
	},
	created: function () {
		var self = this;
		self.getImages();
		self.getInfoCards();
	},
});
