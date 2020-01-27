var headerSection = new Vue ({
    el: '#headerSection',
    data: {
        showSection: true,
    }
})
var authBlock = new Vue({
    el: '#authArea',
    data: {
        btnTxt: 'Confirm',
        authSuccess: 0,
        email1: null,
        email2: null,
        ssn4: null,
        pinNum: null,
        showSSN: false,
        showPIN: false,
        authAreaShow: true
    },
    methods: {
        fireAuth: function () {
            var self = this;
            $('#formAuthInput input').attr('disabled', 'disabled');
            this.btnTxt = '<div class="uk-flex uk-flex-middle uk-flex-around uk-animation-fast uk-animation-fade"><span class="mr-2">Loading </span> <div style="height:1.5rem;width:1.5rem" class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div></div>';
            setTimeout(function () {
                dropArea.validateSuccess = 1;
                self.btnTxt = '<span class="uk-animation-fade uk-animation-fast">Confirmed</span>'
                self.authSuccess = true;
                UIkit.notification({
                    message: 'Succesfully Identified!',
                    status: 'primary',
                    pos: 'top-right',
                    timeout: 2000
                });
                headerSection.showSection = false;
                self.authAreaShow = false;
            }, 2000)
        }
    },
    watch: {
        ssn4: function () {
            if (this.ssn4.length > 4) {
                this.ssn4 = this.ssn4.substring(0, this.ssn4.length - 1);
            }
        },
        showSSN: function () {
            if (this.showSSN == true) {
                $('#ssnInput').attr('type', 'number');
            } else {
                $('#ssnInput').attr('type', 'password');
            }
        },
        showPIN: function () {
            if (this.showPIN == true) {
                $('#pinInput').attr('type', 'number');
            } else {
                $('#pinInput').attr('type', 'password');
            }
        },
    }
});

var dropArea = new Vue({
    el: '#fsaSubArea',
    name: 'fsaDrop',
    components: {
        vuedropzone: vue2Dropzone
    },

    data: function () {
        return {
            filesCount: 1,
            validateSuccess: '',
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                thumbnailHeigh: 150,
                addRemoveLinks: true,
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click or drag files here to upload"
            },

        }
    },
    methods: {
        fileCount: function () {
            this.filesCount++;
            fsaSubmission.filesCount = this.filesCount;
        }
    }
})