var authBlock = new Vue ({
    el: '#authArea',
    data: {
        btnTxt: 'Confirm',
        authSuccess: 0,
        email1: null,
        email2: null, 
        ssn4: null,
        pinNum: null
    },
    methods: {
        fireAuth: function() {
            var self = this;
            this.btnTxt = '<div class="uk-flex uk-flex-middle uk-flex-around uk-animation-fast uk-animation-fade"><span class="mr-2">Loading </span> <div style="height:1.5rem;width:1.5rem" class="spinner-border text-light" role="status"><span class="sr-only">Loading...</span></div></div>';
            setTimeout(function() {
                dropArea.validateSuccess = 1;
                self.btnTxt = '<span class="uk-animation-fade uk-animation-fast">Confirmed</span>'
                setTimeout(function() {
                    self.authSuccess = true;
                },2000)
            },2000)
        }
    }
})

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