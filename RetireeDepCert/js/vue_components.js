var authForm = new Vue ({
    el: '#authArea',
    data: {
        userAuthed: false,
        userAuthing: false,
        userCode: '',
        userZip: '',
        selDeps: [],
        dependentList: [{'name':'John Smith','relationship':'Spouse','depID':1},{'name':'Rebecca Smith','relationship':'Child','depID':2},{'name':'Bill Smith','relationship':'Child','depID':3}]
    },
    methods: {
        fireAuthentication: function() {
            var self = this;
            this.userAuthing = true;
            setTimeout(function() {
                UIkit.notification({
                    message: 'Successfully Authenticated!',
                    status: 'success',
                    pos: 'top-right',
                    timeout: 2000
                });
                self.userAuthing = false;
                self.userAuthed = true;
            },2000);
           
        }
    }
})