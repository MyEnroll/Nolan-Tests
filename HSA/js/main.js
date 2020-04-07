var HSAInput = new Vue({
	el: '#hsaInputArea',
	data: {
		hsaBWK: null,
		hsaOpt: null,
		hsaMax: 7100,
		hsaMaxMod: 7100,
		hsaMaxModForm: '7,100',
		perPayCount: 26,
		chosenHSAPlan: 'HSA Plan 1',
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
				self.hsaMonthlyFormat = self.numberWithCommas(Number(self.hsaMonthly));
				self.hsaEEAnnual = self.numberWithCommas(Number(self.hsaMonthly) * 12);
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
	},
	methods: {
		numberWithCommas: function (x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
});
var hsaText = new Vue({
	el: '#catchUp',
	data: {
		catchUpText:
			'<div><p>The $1,000 catch-up total allows you to reduce your taxable income while increasing your HSA balances as you get closer to retirement. Keep in mind that this contribution belongs to your household&apos;s HSA holder -- typically you or your spouse.</p><p>If you&apos;re the account holder, and turned 55 or older by December 31 of the tax year, and are not enrolled in Medicare, you&apos;re eligible to contribute an additional $1,000 to your HSA for that year above your annual max. Keep in mind that this is based on the account holder&apos;s age -- no matter how much older you might be than your spouse, if they own the account and are under 55, catch-up contributions can&apos;t be made.</p><p>If you&apos;re married and both you and your spouse have separate HSAs, each of you are eligible to make $1,000 catch-up contributions.</p></div>',
	},
});
