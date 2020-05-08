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
				colors: [
					'#20c997',
					'#1e87f0',
					'#fd7e14',
					'#17a2b8',
					'#e83e8c',
					'#ffc107',
					'#6f42c1',
					'#28a745',
					'#dc3545',
					'#17A2B5',
					'#6c757d',
				],
				tooltip: {
					fillSeriesColor: true,
					x: {
						show: false,
					},
					y: {
						title: {
							formatter: (seriesName) => seriesName,
						},
					},
					followCursor: true,
				},
				chart: {
					type: 'bar',
					height: 350,
					background: '#1d2845',
					foreColor: '#fff',
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
					bar: {
						horizontal: false,
						endingShape: 'flat',
						dataLabels: {
							position: 'top',
							offsetY: 30,
						},
					},
				},
				responsive: [
					{
						breakpoint: undefined,
						options: {},
					},
				],
				dataLabels: {
					enabled: true,
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
				legend: {
					show: false,
				},
				fill: {
					opacity: 1,
				},
			},
		};
	},
	computed: {
		dashA1: function () {
			var self = this;
			return self.dashDataA.filter(function (n) {
				return n.Series == 'A1';
			});
		},
		dashA2: function () {
			var self = this;
			return self.dashDataA.filter(function (n) {
				return n.Series == 'A2';
			});
		},
		dashA1Billable: function () {
			var self = this;
			self.dashDataA.filter(function (n) {
				return n.Billable == 'Yes' && n.Series == 'A1';
			});
		},
		dashA2Billable: function () {
			var self = this;
			self.dashDataA.filter(function (n) {
				return n.Billable == 'Yes' && n.Series == 'A2';
			});
		},
		dashDBillable: function () {
			var self = this;
			self.dashDataD.filter(function (n) {
				return n.Billable == 'Yes';
			});
		},
	},
	methods: {
		getSeriesColor: function (index) {
			var self = this;
			return self.chartOptions.colors[index];
		},
		getConfig: function () {
			var self = this;
			$.getJSON('../VueComponents/cobraDashboard/data/config.json?7', function (
				e,
			) {
				self.config = e.queries;
			}).done(function () {
				self.meUpdate();
			});
		},
		getData: function () {
			var self = this;
			if (
				location.href.toLowerCase().indexOf('bastest') > -1 ||
				location.href.toLowerCase().indexOf('myenroll') > -1
			) {
				$.ajax({
					type: 'POST',
					url:
						'/web_projects/MyEnrollWebService/CobraWebMethod.aspx/GetCovidCOBRAReport',
					data: JSON.stringify({
						report_id: 1,
					}),
					contentType: 'application/json; charset=utf-8',
				}).done(function (e) {
					self.dashDataA = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataA');
					self.config[0].countRec = self.dashDataA.filter(function (n) {
						return n.Series == 'A1';
					}).length;
					self.config[0].countBill = self.dashDataA.filter(function (n) {
						return n.Series == 'A1' && n.Billable == 'Yes';
					}).length;
					self.config[1].countRec = self.dashDataA.filter(function (n) {
						return n.Series == 'A2';
					}).length;
					self.config[1].countBill = self.dashDataA.filter(function (n) {
						return n.Series == 'A2' && n.Billable == 'Yes';
					}).length;
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
					self.dashDataB = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataB');
					self.config[2].countRec = self.dashDataB.length;
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
					self.dashDataC = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataC');
					self.config[3].countRec = self.dashDataC.length;
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
					self.dashDataD = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataD');
					self.config[4].countRec = self.dashDataD.length;
					self.config[4].countBill = self.dashDataD.filter(function (n) {
						return n.Billable == 'Yes';
					}).length;
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
					self.dashDataE = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataE');
					self.config[5].countRec = self.dashDataE.length;
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
					self.dashDataF = JSON.parse(e.d);
					self.meUpdate();
					self.loaded.push('dashDataF');
					self.config[6].countRec = self.dashDataF.length;
				});
			} else {
				$.getJSON('data/sample.json', function (e) {
					self.dashDataA = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataA');
				});
				$.getJSON('data/sample2.json', function (e) {
					self.dashDataB = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataB');
				});
				$.getJSON('data/sample3.json', function (e) {
					self.dashDataC = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataC');
				});
				$.getJSON('data/sample4.json', function (e) {
					self.dashDataD = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataD');
				});
				$.getJSON('data/sample5.json', function (e) {
					self.dashDataE = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataE');
				});
				$.getJSON('data/sample6.json', function (e) {
					self.dashDataF = e;
				}).done(function () {
					self.meUpdate();
					self.loaded.push('dashDataF');
				});
			}
		},
		pushConfigCountBill: function (g, h) {
			var self = this;
			self.config.filter(function (n) {
				return n.reportAbbr == g;
			})[0].count = h;
		},
		meUpdate: function () {
			var self = this;
			self.$refs.cobrachart.updateSeries([
				{
					name: 'A1',
					data: [{ x: '', y: self.dashA1.length }],
				},
				{
					name: 'A2',
					data: [{ x: '', y: self.dashA2.length }],
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
			if (report == 'A1') {
				JSONData = self.dashA1;
			} else if (report == 'A2') {
				JSONData = self.dashA2;
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
		'<div>\
			<div v-if="loaded.length < 6" class="m-4 uk-border-rounded uk-card uk-card-default uk-padding-small uk-position-top-right uk-text-center">\
				<div class="spinner-border text-primary" role="status" style="width: 2.5rem; height: 2.5rem;">\
					<span class="sr-only">Loading...</span>\
				</div>\
				<div class="uk-text-bold">Loading Reports...</div>\
			</div>\
			<div class="uk-grid-small uk-child-width-1-1" uk-grid>\
				<div>\
					<h3>\
						COBRA/COVID Dashboard\
					</h3>\
					<div id="chart" class="uk-card uk-border-rounded uk-card-body uk-card-secondary uk-box-shadow-large" style="background:#1d2845">\
						<apexchart ref="cobrachart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>\
						<div>\
							<table class="uk-table uk-table-middle uk-table-hover uk-table-divider uk-table-responsive">\
								<tbody>\
									<tr v-for="(item,index) in config" v-if="loaded.indexOf(item.json)>-1" class="uk-animation-fade uk-animation-fast" @click="exportCSV(item.report,item.title,true)" style="cursor:pointer;font-size:1rem">\
										<td>\
											<span style="font-size:1.25rem;" :style="\'color:\' + getSeriesColor(index)" class="fas fa-square uk-margin-small-right"></span>\
										</td>\
										<td>\
											<span v-html="item.reportAbbr" class="uk-text-bold" style="font-size:1.15rem"></span>\
										</td>\
										<td>\
											<span v-html="item.title"></span>\
										</td>\
										<td class="uk-text-nowrap"><span v-if="item.countBill > 0"><b>Billable</b></span></td>\
										<td class="uk-text-nowrap"><span v-if="item.countRec == 0"><span class="uk-text-meta uk-text-danger">(No Data)</span></span></td>\
										<td class="uk-text-nowrap">\
											<div>\
												<span class="uk-button uk-button-link">Download Data</span>\
											</div>\
										</td>\
									</tr>\
								</tbody>\
							</table>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>',
});
