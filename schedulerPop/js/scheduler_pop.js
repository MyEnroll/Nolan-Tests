Vue.component('appointmentpop', {
	props: ['appt'],
	data: function () {
		return {
			apptInfo: [],
			count: 0,
		};
	},

	methods: {
		getApptInfoTest: function (e) {
			var self = this;
			$.getJSON('data/testAppt.json', function (d) {
				self.apptInfo = d;
			});
		},
		getApptInfo: function () {
			var self = this;
			$.ajax({
				type: 'POST',
				url:
					'/web_projects/MyEnrollWebService/CommonWebMethod.aspx/GetApptInfo',
				data: JSON.stringify({
					appid: self.appt.toString(),
					userid: '732333',
					timezone: 'EST',
				}),
				contentType: 'application/json; charset=utf-8',
			}).done(function (e) {
				self.apptInfo = JSON.parse(e.d)[0];
			});
		},
	},
	created: function () {
		var self = this;
		self.getApptInfo();
	},

	template:
		'<div>\
            <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #apptInfoPop">Check Appointment</button>\
            <div id="apptInfoPop" uk-modal>\
                <div class="uk-modal-dialog">\
                    <div class="uk-modal-header">\
                        <h3 class="mb-0">\
                            Appointment\
                        </h3>\
                        <button class="uk-modal-close-default" type="button" uk-close></button>\
                    </div>\
                    <div class="uk-modal-body">\
                        <p>\
                        <table class="uk-table uk-table-divider">\
                            <tbody>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Attendee\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.ATTENDER }}\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Meeting Type\
                                    </th>\
                                    <td>\
                                        <template v-if="apptInfo.AVAIL_TYPE == 1">\
                                            Phone\
                                        </template>\
                                        <template v-if="apptInfo.AVAIL_TYPE == 3">\
                                            In Person\
                                        </template>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Meeting Location\
                                    </th>\
                                    <td>\
                                        <template>\
                                            <a :href="\'tel:+1-\' + apptInfo.MEETING_LOCATION">{{ apptInfo.MEETING_LOCATION }}</a>\
                                        </template>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Appointment Date\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.START_DATE }}\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Start Time\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.START_TIME }}\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        End Time\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.END_TIME }}\
                                    </td>\
                                </tr>\
                                <template v-if="apptInfo.FOR_DEPENDANT != 0">\
                                    <tr>\
                                        <th style="font-weight:700">\
                                            Dependent Name\
                                        </th>\
                                        <td>\
                                            {{ apptInfo.DEPENDENT_NAME }}\
                                        </td>\
                                    </tr>\
                                </template>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Appointment Subject\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.SUBJECT }}\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Notes\
                                    </th>\
                                    <td>\
                                        {{ apptInfo.DESCRIPTION }}\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        First Appointment\
                                    </th>\
                                    <td>\
                                        <template v-if="apptInfo.FIRST_APPOINTMENT == 1">\
                                            Yes\
                                        </template>\
                                        <template v-else>\
                                            No\
                                        </template>\
                                    </td>\
                                </tr>\
                                <tr>\
                                    <th style="font-weight:700">\
                                        Private\
                                    </th>\
                                    <td>\
                                        <template v-if="apptInfo.ISPRIVATE == 1">\
                                            Yes\
                                        </template>\
                                        <template v-else>\
                                            No\
                                        </template>\
                                    </td>\
                                </tr>\
                            </tbody>\
                        </table>\
                        </p>\
                    </div>\
                    <div class="uk-modal-footer uk-text-right">\
                        <button class="uk-button uk-button-secondary uk-border-pill uk-modal-close" type="button">Close</button>\
                    </div>\
                </div>\
            </div>\
        </div>',
});
new Vue({ el: '#main' });
