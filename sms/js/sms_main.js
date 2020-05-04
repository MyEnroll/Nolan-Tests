var vm = new Vue({
	el: '#main',
	data: {
		recipient: '',
		body: '',
		sending: false,
		valid: false,
	},
	methods: {
		validateSMS: function () {
			var self = this;
			if (
				self.recipient.length >= 10 &&
				self.recipient.indexOf('+') < 0 &&
				self.recipient.length < 12 &&
				!/\D/.test(self.recipient)
			) {
				return true;
			} else {
				return false;
			}
		},
		sendSMS: function () {
			var self = this;
			if (self.recipient.length == 10) {
				self.recipient = '1' + self.recipient;
			}
			$.ajax({
				type: 'POST',
				url: '/web_projects/SyWebService/sms.aspx/AddSMS',
				data: JSON.stringify({
					To: self.recipient,
					Title: '',
					Body: self.body,
				}),
				contentType: 'application/json; charset=utf-8',
			})
				.done(function () {
					UIkit.notification({
						message: 'Message Sent to ' + self.recipient + ' successfully!',
						status: 'success',
						pos: 'top-right',
						timeout: 2000,
					});
				})
				.fail(function () {
					UIkit.notification({
						message: 'Message failed to send to' + self.recipient,
						status: 'danger',
						pos: 'top-right',
						timeout: 2000,
					});
				});
		},
		resetSMS: function () {
			var self = this;
			self.recipient = '';
			self.body = '';
		},
	},
	watch: {
		recipient: function () {
			var self = this;
			self.valid = self.validateSMS();
		},
	},
});
