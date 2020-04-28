Vue.use('claimdenial');
var vm = new Vue({
	el: '#loginBlock',
	data: {
		bg_image: '',
		dailyImage: null,
		imageArray: [],
		infoCards: [],
		selectedPeopleImage: '',
		ballIcon: false,
		peopleImages: [
			'pictures/Person1_small.png',
			'pictures/Person2_small.png',
			'pictures/Person3_small.png',
			'pictures/Person4_small.png',
			'pictures/Person5_small.png',
			'pictures/Person6_small.png',
			'pictures/Person7_small.png',
			'pictures/Person8_small.png',
			'pictures/Person9_small.png',
			'pictures/Person10_small.png',
			'pictures/Person11_small.png',
			'pictures/Person12_small.png',
			'pictures/Person13_small.png',
			'pictures/Person14_small.png',
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
