Vue.component('claimdenial', {
	data: function () {
		return {
			searchString: '',
			reasonCodes: [],
		};
	},
	methods: {
		getReasonCodes: function () {
			var self = this;
			$.getJSON('data/reason_codes.json', function (e) {
				self.reasonCodes = e;
			});
		},
	},
	watch: {
		searchString: function () {
			var self = this;
		},
	},
	computed: {
		filteredReasons() {
			var self = this;
			return self.reasonCodes.filter(function (item) {
				return (
				item.REASON_CODE.toString().includes(self.searchString) ||
					item.REASON_DESCRIPTION.toLowerCase().includes(self.searchString)
				);
			});
		},
	},
	created: function () {
		var self = this;
		self.getReasonCodes();
	},
	template:
		'<div class="uk-container">\
            <div class="uk-child-width-1-1" uk-grid>\
                <div>\
                    <h3>\
                        Claim Denial Lookup\
                    </h3>\
                    <div class="uk-text-meta">\
                        Use this tool to identify why your claim was denied by entering the Claim Denial Code you received below.\
                    </div>\
                </div>\
                <div>\
                    <div class="uk-card uk-card-default uk-border-rounded">\
                        <div class="uk-card-body">\
                            <div class="uk-width-expand uk-search uk-search-default uk-background-default uk-border-rounded" uk-sticky="cls-active: uk-box-shadow-medium">\
                                <span uk-search-icon></span>\
                                <input v-model="searchString" class="uk-border-rounded uk-search-input" type="search" placeholder="Search...">\
                            </div>\
                            <template v-if="searchString.length > 0">\
                                <hr>\
                            </template>\
                            <template v-if="searchString.length == 0">\
                               <div class="uk-text-center uk-padding-large uk-width-expand">\
                                    <div>\
                                        <i class="fad fa-question-circle fa-4x uk-text-primary"></i>\
                                    </div>\
                                    <div class="uk-text-large uk-margin-top">\
                                        Get started by searching above\
                                    </div>\
                                    <div class="uk-margin-top">\
                                        You can search by either Claim Denial Code or Claim Denial Description\
                                    </div>\
                                </div>\
                            </template>\
                            <template v-else>\
                                <div class="uk-margin-top">\
                                    <table class="border uk-table uk-table-responsive uk-table-divider">\
                                        <thead>\
                                            <tr class="">\
                                                <th class="uk-table-expand">Claim Denial Code</th>\
                                                <th>Claim Denial Description</th>\
                                            </tr>\
                                        </thead>\
                                       <tbody>\
                                            <tr v-for="item in filteredReasons">\
                                                <td>\
                                                    <div class="uk-hidden@m uk-text-bold">\
                                                    Code\
                                                    </div>\
                                                    <div>\
                                                    {{ item.REASON_CODE }}\
                                                    </div>\
                                                </td>\
                                                <td>\
                                                <div class="uk-hidden@m uk-text-bold">\
                                                Description\
                                                </div>\
                                                <div v-html="item.REASON_DESCRIPTION">\
                                                </div>\
                                                </td>\
                                            </tr>\
                                        </tbody>\
                                    </table>\
                                </div>\
                            </template>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>',
});
new Vue({
	el: '#main',
});
