var HSAInput = new Vue({
	el: '#hsaInputArea',
	data: {
		hsaBWK: null,
		hsaOpt: null,
		singleMax: 3550,
		familyMax: 7100,
		hsaMax: 7100,
		hsaMaxMod: 7100,
		hsaMaxModForm: '7,100',
		perPayCount: 26,
		chosenHSAPlan: '',
		hsaAnnualDone: null,
		hsaAnnualRem: null,
		additional55: false,
		hsaMonthly: null,
		hsaMonthlyFormat: '',
		hsaAnnualCalc: null,
		hsaAnnualFormat: '',
		overMax: false,
		hsaERCont: 0,
		hsaERContFormat: '',
		hsaEEAnnual: '',
		hsaERAnnual: '',
		hsaScenario: 0,
		hsaHost: '',
		dataLoaded: false,
		oeLoading: false,
		eeHasAccess: 2,
		currentPY: '',
	},
	watch: {
		hsaMaxMod: function () {
			var self = this;
			self.hsaMaxModForm = self.numberWithCommas(self.hsaMaxMod);
		},
		hsaScenario: function () {
			var self = this;
			if (self.hsaScenario == 0) {
				self.hsaMaxMod = 7100;
				self.hsaERCont = 0;
			} else if (self.hsaScenario == 1) {
				self.hsaMaxMod = 3550;
				self.hsaERCont = 100;
			} else if (self.hsaScenario == 2) {
				self.hsaMaxMod = 3550;
				self.hsaERCont = 75;
				self.additional55 = true;
			}
		},
		hsaERCont: function () {
			var self = this;
			self.hsaERContFormat = self.numberWithCommas(self.hsaERCont);
			self.hsaERAnnual = self.numberWithCommas(Number(self.hsaERCont) * 12);
			self.hsaAnnualFormat = self.numberWithCommas(
				((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2),
			);
		},
		hsaMonthly: function () {
			var self = this;
			if (self.hsaMonthly.length == 0 || self.hsaMonthly <= 0) {
				self.hsaAnnualCalc = '';
				self.hsaEEAnnual = '';
				self.hsaAnnualFormat = self.numberWithCommas(
					((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2),
				);
				self.hsaMonthlyFormat = '';
			} else {
				self.hsaAnnualFormat = self.numberWithCommas(
					((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2),
				);
				self.hsaAnnualCalc =
					(Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12;
				self.hsaMonthlyFormat = self.numberWithCommas(
					Number(self.hsaMonthly).toFixed(2),
				);
				self.hsaEEAnnual = self.numberWithCommas(
					(Number(self.hsaMonthly) * 12).toFixed(2),
				);
			}
			if (self.hsaMonthly > self.hsaMaxMod) {
				self.hsaMonthly = self.hsaMaxMod;
			}
		},
		hsaAnnualCalc: function () {
			var self = this;
			if (self.hsaAnnualCalc > self.hsaMaxMod) {
				self.overMax = true;
			} else {
				self.overMax = false;
			}
		},

		additional55: function () {
			var self = this;
			if (self.additional55) {
				self.hsaMaxMod = self.hsaMaxMod + 1000;
			} else {
				if (self.hsaAnnualVal > self.hsaMaxMod) {
					self.hsaAnnualVal = self.hsaMaxMod;
				}
			}
		},
	},
	created: function () {
		var self = this;

		self.hsaERContFormat = self.numberWithCommas(self.hsaERCont);
		self.hsaAnnualCalc = self.hsaERContFormat;
		self.hsaERAnnual = self.numberWithCommas(Number(self.hsaERCont) * 12);
		self.hsaAnnualFormat = self.numberWithCommas(
			((Number(self.hsaMonthly) + Number(self.hsaERCont)) * 12).toFixed(2),
		);
		if (window.location.href.toLowerCase().indexOf('github') > -1) {
			self.hsaHost = 'demo';
		} else if (parent.location.href.toLowerCase().indexOf('enrollment') > -1) {
			self.hsaHost = 'enrollment';
		} else {
			self.hsaHost = 'standalone';
		}
		if (self.hsaHost != 'demo') {
			self.getHSAinfo();
			self.getHSAMenu();
		}
	},
	methods: {
		returnHome: function () {
			parent.OnHomeClick();
		},
		parentBack: function () {
			var self = this;
			self.oeLoading = true;
			parent.htmBackButton_onclick();
		},
		parentNext: function () {
			var self = this;
			self.oeLoading = true;
			parent.htmNextButtom_onclick();
		},
		numberWithCommas: function (x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
		getHSAMenu: function () {
			var self = this;
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/showHSAMenu',
				data: JSON.stringify({}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (data) {
				if (data.d == 1) {
					self.eeHasAccess = 1;
					hsaText.eeHasAccess = 1;
				} else {
					self.eeHasAccess = 0;
					hsaText.eeHasAccess = 0;
				}
			});
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/GET_HSA_EE_Info',
				data: JSON.stringify({}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (data) {});
		},
		getHSAinfo: function () {
			var self = this;
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/GET_HSA_EE_Info',
				data: JSON.stringify({}),
				contentType: 'application/json; charset=utf-8',
			})
				.done(function (e) {
					self.dataLoaded = true;
					self.hsaMonthly = JSON.parse(e.d)[0].EE_MONTHLY_CONTRIBUTION;
					self.hsaERCont = JSON.parse(e.d)[0].ER_MONTHLY_CONTRIBUTION;
					self.chosenHSAPlan = JSON.parse(e.d)[0].LONG_DESCRIPTION;
					self.currentPY = JSON.parse(e.d)[0].PROCESSING_YEAR;
					if (JSON.parse(e.d)[0].FAMILY_STATUS == 0) {
						self.hsaMaxMod = self.singleMax;
					} else {
						self.hsaMaxMod = self.familyMax;
					}
					if (JSON.parse(e.d)[0].EE_AGE > 54) {
						self.additional55 = true;
					} else {
						self.additional55 = false;
					}
					if (self.hsaMonthly > 0) {
						self.hsaOpt = 1;
					}
				})
				.fail(function () {
					UIkit.notification({
						message:
							'There&apos;s been an error. Please try again or contact your Benefit Administrator',
						pos: 'top-right',
						timeout: 2500,
						status: 'danger',
					});
				});
		},
		saveHSACont: function () {
			var self = this;
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/GET_HSA_EE_Info',
				data: JSON.stringify({}),
				contentType: 'application/json; charset=utf-8',
			})
				.done(function (e) {
					$.ajax({
						type: 'POST',
						url:
							'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/Save_HSA_EE_Data',
						data: JSON.stringify({
							cat_code: JSON.parse(e.d)[0].CATEGORY_CODE,
							cat_plan: JSON.parse(e.d)[0].CATEGORY_PLAN,
							hsa_amt: Number(self.hsaMonthly),
						}),
						contentType: 'application/json; charset=utf-8',
					}).done(function (f) {
						$.ajax({
							type: 'POST',
							url:
								'/web_projects/MyEnrollWebService/TemplateWebMethod.aspx/GET_HSA_EE_Info',
							data: JSON.stringify({}),
							contentType: 'application/json; charset=utf-8',
						})
							.done(function (g) {
								UIkit.notification({
									message:
										'Successfully saved $' +
										self.numberWithCommas(
											JSON.parse(g.d)[0].EE_MONTHLY_CONTRIBUTION,
										) +
										' as your monthly HSA Contribution',
									pos: 'top-right',
									timeout: 2500,
									status: 'success',
								});
							})
							.fail(function () {
								UIkit.notification({
									message:
										'There&apos;s been an error. Please try again or contact your Benefit Administrator',
									pos: 'top-right',
									timeout: 2500,
									status: 'danger',
								});
							});
					});
				})
				.fail(function () {
					UIkit.notification({
						message:
							'There&apos;s been an error. Please try again or contact your Benefit Administrator',
						pos: 'top-right',
						timeout: 2500,
						status: 'danger',
					});
				});
		},
	},
});
var hsaText = new Vue({
	el: '#catchUp',
	data: {
		eeHasAccess: false,
		catchUpText:
			'<div><p>The $1,000 catch-up total allows you to reduce your taxable income while increasing your HSA balances as you get closer to retirement. Keep in mind that this contribution belongs to your household&apos;s HSA holder -- typically you or your spouse.</p><p>If you&apos;re the account holder, and turned 55 or older by December 31 of the tax year, and are not enrolled in Medicare, you&apos;re eligible to contribute an additional $1,000 to your HSA for that year above your annual max. Keep in mind that this is based on the account holder&apos;s age -- no matter how much older you might be than your spouse, if they own the account and are under 55, catch-up contributions can&apos;t be made.</p><p>If you&apos;re married and both you and your spouse have separate HSAs, each of you are eligible to make $1,000 catch-up contributions.</p></div>',
	},
});
