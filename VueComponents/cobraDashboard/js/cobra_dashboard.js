Vue.component('cobradashboard', {
	components: {
		apexchart: VueApexCharts,
	},
	data: function () {
		return {
			config: [],
			dashDataA: [],
			dashDataB: [],
			dashDataC: [],
			dashDataD: [],
			dashDataE: [],
			dashDataF: [],
			loaded: [],
			model: [
				{
					id: 'A',
					title: 'TC&apos;s with Initial Election Ends within OBP',
					json: 'dashDataA',
					details: [],
				},
				{
					id: 'B',
					title: 'TC&apos;s with initial Election Ends after OBP',
					json: 'dashDataB',
					details: [],
				},
				{
					id: 'C',
					title: 'All C&apos;s',
					json: 'dashDataC',
					details: [],
				},
				{
					id: 'D',
					title:
						'All XC&apos;s (Reinstated to &apos;C&apos;) where original termination date within OBP',
					json: 'dashDataD',
					details: [],
				},
				{
					id: 'E',
					title: 'C&apos;s with Natural End of 18/29/26 months after OBP',
					json: 'dashDataE',
					details: [],
				},
				{
					id: 'F',
					title: 'C&apos;s with Natural End of 18/29/26 months within OBP',
					json: 'dashDataF',
					details: [],
				},
			],
			series: [
				{
					name: 'A',
					data: [],
				},
				{
					name: 'B',
					data: [],
				},
				{
					name: 'C',
					data: [],
				},
				{
					name: 'D',
					data: [],
				},
				{
					name: 'E',
					data: [],
				},
				{
					name: 'F',
					data: [],
				},
			],
			chartOptions: {
				chart: {
					type: 'bar',
					height: 350,
				},
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '55%',
						endingShape: 'flat',
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: true,
					width: 2,
					colors: ['transparent'],
				},
				xaxis: {
					type: 'category',
				},
				yaxis: {
					title: {
						text: 'Count',
					},
				},
				fill: {
					opacity: 1,
				},
			},
		};
	},
	computed: {
		bigData: function () {
			var self = this;
			var temp = self.dashDataB;
			return;
		},
	},
	methods: {
		getConfig: function () {
			var self = this;
			$.getJSON('data/config.json', function (e) {
				self.config = e.queries;
			}).done(function () {
				self.meUpdate();
			});
		},
		getData: function () {
			var self = this;
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 1,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataA = e;
				self.meUpdate();
				self.loaded.push('dashDataA');
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 2,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataB = e;
				self.meUpdate();
				self.loaded.push('dashDataB');
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 3,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataC = e;
				self.meUpdate();
				self.loaded.push('dashDataC');
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 4,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataD = e;
				self.meUpdate();
				self.loaded.push('dashDataD');
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 5,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataE = e;
				self.meUpdate();
				self.loaded.push('dashDataE');
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
				data: JSON.stringify({
					report_id: 6,
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.dashDataF = e;
				self.meUpdate();
				self.loaded.push('dashDataF');
			});
			// $.getJSON('data/sample.json', function (e) {
			// 	self.dashDataA = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataA');
			// });
			// $.getJSON('data/sample2.json', function (e) {
			// 	self.dashDataB = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataB');
			// });
			// $.getJSON('data/sample3.json', function (e) {
			// 	self.dashDataC = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataC');
			// });
			// $.getJSON('data/sample4.json', function (e) {
			// 	self.dashDataD = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataD');
			// });
			// $.getJSON('data/sample5.json', function (e) {
			// 	self.dashDataE = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataE');
			// });
			// $.getJSON('data/sample6.json', function (e) {
			// 	self.dashDataF = e;
			// }).done(function () {
			// 	self.meUpdate();
			// 	self.loaded.push('dashDataF');
			// });
		},
		meUpdate: function () {
			var self = this;
			self.$refs.cobrachart.updateSeries([
				{
					name: 'A',
					data: [{ x: '', y: self.dashDataA.length }],
				},
				{
					name: 'B',
					data: [{ x: '', y: self.dashDataB.length }],
				},
				{
					name: 'C',
					data: [{ x: '', y: self.dashDataC.length }],
				},
				{
					name: 'D',
					data: [{ x: '', y: self.dashDataD.length }],
				},
				{
					name: 'E',
					data: [{ x: '', y: self.dashDataE.length }],
				},
				{
					name: 'F',
					data: [{ x: '', y: self.dashDataF.length }],
				},
			]);
		},
		exportCSV: function (report, ReportTitle, ShowLabel) {
			var self = this;
			var dt = new Date();
			var todayDt =
				((dt.getMonth() + 1).toString().length == 1
					? '0' + (dt.getMonth() + 1).toString()
					: dt.getMonth() + 1) +
				'-' +
				(dt.getDate().toString().length == 1
					? '0' + dt.getDate().toString()
					: dt.getDate()) +
				'-' +
				dt.getFullYear();
			var JSONData;
			if (report == 1) {
				JSONData = self.dashDataA;
			} else if (report == 2) {
				JSONData = self.dashDataB;
			} else if (report == 3) {
				JSONData = self.dashDataC;
			} else if (report == 4) {
				JSONData = self.dashDataD;
			} else if (report == 5) {
				JSONData = self.dashDataE;
			} else if (report == 6) {
				JSONData = self.dashDataF;
			}
			var arrData =
				typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

			var CSV = '';
			//Set Report title in first row or line

			CSV += ReportTitle + '\r\n\n';

			//This condition will generate the Label/Header
			if (ShowLabel) {
				var row = '';

				//This loop will extract the label from 1st index of on array
				for (var index in arrData[0]) {
					//Now convert each value to string and comma-seprated
					row += index + ',';
				}

				row = row.slice(0, -1);

				//append Label row with line break
				CSV += row + '\r\n';
			}

			//1st loop is to extract each row
			for (var i = 0; i < arrData.length; i++) {
				var row = '';

				//2nd loop will extract each column and convert it in string comma-seprated
				for (var index in arrData[i]) {
					row += '"' + arrData[i][index] + '",';
				}

				row.slice(0, row.length - 1);

				//add a line break after each row
				CSV += row + '\r\n';
			}

			if (CSV == '') {
				alert('Invalid data');
				return;
			}

			//Generate a file name
			var fileName = '';
			//this will remove the blank-spaces from the title and replace it with an underscore
			fileName += ReportTitle.replace(/ /g, '_') + '_' + todayDt;

			//Initialize file format you want csv or xls
			var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

			// Now the little tricky part.
			// you can use either>> window.open(uri);
			// but this will not work in some browsers
			// or you will not get the correct file extension

			//this trick will generate a temp <a /> tag
			var link = document.createElement('a');
			link.href = uri;

			//set the visibility hidden so it will not effect on your web-layout
			link.style = 'visibility:hidden';
			link.download = fileName + '.csv';

			//this part will append the anchor tag and remove it after automatic click
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},
	},
	created: function () {
		var self = this;
		self.getConfig();
		self.getData();
	},
	template:
		'<div class="uk-grid-small uk-child-width-1-1" uk-grid>\
			<div>\
				<h3>\
					COBRA/COVID Dashboard\
				</h3>\
				<div id="chart" class="uk-card uk-card-default uk-border-rounded uk-card-body">\
					<apexchart ref="cobrachart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>\
				</div>\
			</div>\
			<div>\
				<h3 class="mt-3">\
					Report Downloads\
				</h3>\
				<div class="mb-3 uk-text-meta">\
					Each series&apos; as presented in the graph above can be downloaded by clicking one of the links below.\
				</div>\
				<div class="uk-card uk-card-default uk-border-rounded uk-card-body">\
					<ul class="uk-list">\
						<li v-for="item in config" v-if="loaded.indexOf(item.json)>-1" class="uk-animation-fade uk-animation-fast">\
							<button @click="exportCSV(item.report,item.title,true)" class="uk-button">\
								<div class="uk-flex uk-flex-middle">\
									<span style="font-size:1.25rem" class="uk-button-primary uk-icon-button uk-margin-small-right" uk-icon="download">\
									</span>\
									<div class="uk-button-text ml-3" style="font-size:1rem">\
										<span v-html="item.reportAbbr" class="uk-text-bold" style="font-size:1.15rem"></span>\
										<span class="ml-3" v-html="item.title"></span>\
									</div>\
									</>\
								</div>\
							</button>\
						</li>\
					</ul>\
				</div>\
			</div>\
		</div>',
});
new Vue({ el: '#main' });
