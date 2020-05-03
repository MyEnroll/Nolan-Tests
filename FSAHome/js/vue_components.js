Vue.component('quickbtn', {
	data: function () {
		return {
			quickBtns: [],
		};
	},
	props: ['array'],

	template:
		'<div :class="\'uk-grid-match uk-child-width-\' + array.props.width + \'@s\'" uk-grid>\
			<div v-for="item in array.items">\
				<div class="me-redirect me-card uk-card uk-card-body uk-text-center uk-border-rounded uk-text-center">\
					<div v-html="item.icon"></div>\
					<div style="font-size: 1.2rem;" v-html="item.title"></div>\
				</div>\
			</div>\
		</div>',
});
Vue.component('resources', {
	data: function () {
		return {
			resourceItems: [],
		};
	},
	props: ['array'],

	template:
		'<div class="uk-background-muted">\
		<div class="uk-padding">\
			<ul class="uk-list">\
				<li v-for="(item,index) in array.items">\
					<template v-if="item.type == \'link\'">\
						<a :href="item.url" target="_blank">{{ item.title }}</a>\
					</template>\
					<template v-else-if="item.type == \'popup\'">\
						<a :href="\'#resource\' + index + \'Pop\'" uk-toggle>{{ item.title }}</a>\
					</template>\
					<template>\
						<div :id="\'resource\' + index + \'Pop\'" uk-modal>\
							<div class="uk-modal-dialog">\
								<button class="uk-modal-close-default" type="button" uk-close></button>\
								<div class="uk-modal-header">\
									<h2 class="uk-modal-title">{{item.title}}</h2>\
								</div>\
								<div class="uk-modal-body" v-html="item.body">\
								</div>\
							</div>\
						</div>\
					</template>\
				</li>\
			</ul>\
		</div>\
	</div>',
});

var vh = new Vue({
	el: '#launchpadHome',
	components: {
		apexchart: VueApexCharts,
	},
	data: {
		productPage: 'fsa',
		launchpadItems: null,
		series: [
			{
				name: 'HCFSA - 2020',
				data: [28, 29, 33, 36, 32, 32, 33],
			},
			{
				name: 'DCFSA - 2020',
				data: [12, 11, 14, 18, 17, 13, 13],
			},
		],
		chartOptions: {
			chart: {
				height: 350,
				type: 'line',
				dropShadow: {
					enabled: true,
					color: '#000',
					top: 18,
					left: 7,
					blur: 10,
					opacity: 0.2,
				},
				toolbar: {
					show: false,
				},
			},
			colors: ['#77B6EA', '#545454'],
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth',
			},
			title: {
				text: 'Average Monthly Claims',
				align: 'left',
			},
			grid: {
				borderColor: '#e7e7e7',
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5,
				},
			},
			markers: {
				size: 1,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				title: {
					text: 'Month',
				},
			},
			yaxis: {
				title: {
					text: 'Claim Amount',
				},
				min: 5,
				max: 40,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				floating: true,
				offsetY: -25,
				offsetX: -5,
			},
		},
	},
	methods: {
		getItems: function (f) {
			var self = this;
			$.getJSON('data/' + f + 'Home.json', function (e) {
				self.launchpadItems = e;
			});
		},
	},
	watch: {
		productPage: function (f) {
			var self = this;
			self.getItems(f);
		},
	},
	created: function () {
		var self = this;
		self.getItems(self.productPage);
	},
});
