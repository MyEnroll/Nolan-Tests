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
			'pictures/Person1.png',
			'pictures/Person2.png',
			'pictures/Person3.png',
			'pictures/Person4.png',
			'pictures/Person5.png',
			'pictures/Person6.png',
			'pictures/Person7.png',
			'pictures/Person8.png',
			'pictures/Person9.png',
			'pictures/Person10.png',
			'pictures/Person11.png',
			'pictures/Person12.png',
			'pictures/Person13.png',
			'pictures/Person14.png',
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
