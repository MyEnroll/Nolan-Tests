Vue.component('phone-collection', {
	data: function () {
		return {
			count: 0,
			currentPhone: '',
			newPhone: '',
			confirmPhone: '',
			showPop: 0,
            doNotShow: false,
            doNotShowPass: ''
		};
    },
    methods: {
        neverShow: function() {
            var self = this;
            self.doNotShowPop();
            UIkit.modal('#phoneCollection').hide();
        },
        getEEMobile: function() {
            var self = this;
            $.ajax({
                type: "POST",
                url: "/web_projects/MyEnrollWebService/EmployeeWebMethod.aspx/GetEmpMobile",
                data: JSON.stringify({
                }),
                contentType: "application/json; charset=utf-8"
            }).done(function(e){
                self.currentPhone = JSON.parse(e.d)[0];

            })
        }
    },
    doNotShowPop: function() {
        var self = this;
        $.ajax({
            type: "POST",
            url: "/web_projects/MyEnrollWebService/EmployeeWebMethod.aspx/ShowEmpMobilePopup",
            data: JSON.stringify({
             status: self.doNotShowPass,
            }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {}
        });
    },
    updateEEMobile: function() {
        var self = this;
        $.ajax({
            type: "POST",
            url: "/web_projects/MyEnrollWebService/EmployeeWebMethod.aspx/UpdateEmpMobile",
            data: JSON.stringify({
                mobile: self.confirmPhone,
            }),
            contentType: "application/json; charset=utf-8"
        }).done(function(e){
            UIkit.notification({
                message: 'Mobile number updated!',
                status: 'success',
                pos: 'top-right',
                timeout: 2500
            });
            UIkit.modal('#phoneCollection').hide();
        })
    }
	watch: {
        doNotShow: function() {
            var self = this;
            if (self.doNotShow) {
                self.doNotShowPass = 1
            } else {
                self.doNotShowPass = 0
            }
        },
		showPop: function () {
			var self = this;
			if (self.showPop == 1) {
				UIkit.modal('#phoneCollection').show();
			}
		},
		// newPhone: function () {
		// 	var self = this;
		// 	if (self.newPhone != self.confirmPhone) {
		// 		$('input[name="newPhone"], input[name="confirmPhone').addClass(
		// 			'uk-form-danger',
		// 		);
		// 	} else {
		// 		$('input[name="newPhone"], input[name="confirmPhone').removeClass(
		// 			'uk-form-danger',
		// 		);
		// 	}
		// },
		// confirmPhone: function () {
		// 	var self = this;
		// 	if (self.newPhone != self.confirmPhone) {
		// 		$('input[name="newPhone"], input[name="confirmPhone').addClass(
		// 			'uk-form-danger',
		// 		);
		// 	} else {
		// 		$('input[name="newPhone"], input[name="confirmPhone').removeClass(
		// 			'uk-form-danger',
		// 		);
		// 	}
		// },
	},
	created: function () {
		var self = this;
		self.showPop = 1;
	},
	template:
		'<div id="phoneCollection" uk-modal>\
    <div class="uk-modal-dialog uk-border-rounded uk-overflow-auto">\
        <button class="uk-modal-close-default" type="button" uk-close></button>\
        <div class="uk-modal-header">\
            <h3 class="">Mobile Phone Collection</h3>\
        </div>\
        <div class="uk-modal-body">\
            <div>\
                <p>\
                    Please take a moment to confirm the mobile phone number listed below is correct.\
                </p>\
                <p>\
                    <b>NOTE: </b>If you do not currently have a mobile phone number listed, please take this opportunity to add one.\
                </p>\
            </div>\
            <div>\
                <table class="uk-table uk-table-small uk-table-responsive uk-table-middle">\
                    <tbody>\
                        <tr>\
                            <th style="vertical-align:middle" class="uk-table-shrink uk-text-nowrap">\
                                Current Number\
                            </th>\
                            <td>\
                                {{ currentPhone }}\
                            </td>\
                        </tr>\
                        <tr>\
                            <th style="vertical-align:middle">\
                                New Number\
                            </th>\
                            <td>\
                                <input type="tel" inputmode="numeric" :disabled="doNotShow == 1" name="newPhone" class="uk-input" v-model="newPhone" placeholder="Enter your updated mobile number..." id="">\
                            </td>\
                        </tr>\
                        <tr>\
                            <th style="vertical-align:middle">\
                                Confirm Number\
                            </th>\
                            <td>\
                                <input type="tel" inputmode="numeric" :disabled="doNotShow == 1" name="confirmPhone" class="uk-input" v-model="confirmPhone" placeholder="Re-enter your updated mobile number..." id="">\
                            </td>\
                        </tr>\
                    </tbody>\
                </table>\
            </div>\
        </div>\
        <div class="uk-modal-footer uk-text-right uk-flex-between uk-flex uk-flex-middle">\
            <div>\
                <label><input class="uk-checkbox" v-model="doNotShow" type="checkbox"> Do not show me this again</label>\
            </div>\
            <div>\
              <template v-if="!doNotShow">\
                <button class="uk-border-pill uk-margin-left uk-button uk-button-default uk-modal-close" type="button">\
                Skip\
                </button>\
                <button :disabled="newPhone != confirmPhone || newPhone.length == 0 || confirmPhone.length == 0 || newPhone.length < 10 || confirmPhone.length < 10" class="uk-border-pill uk-button uk-button-primary" type="button" @click="updateEEMobile">\
                    Submit\
                </button>\
              </template>\
              <template v-else>\
                <button class="uk-border-pill uk-margin-left uk-button uk-button-primary uk-modal-close" type="button" @click="neverShow">\
                    Continue\
                </button>\
                </template>\
            </div>\
        </div>\
    </div>\
</div>',
});
new Vue({ el: '#main' });
