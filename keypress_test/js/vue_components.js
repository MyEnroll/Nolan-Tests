var scanner = new Vue({
    el: '#scannertest',
    data: {
        scannedItems: [],
        scannedRaw: ''
    },
    methods: {
        pushtoScanned: function () {
            var self = this;
            self.scannedItems.push(self.scannedRaw);
            self.scannedRaw = '';
            $('#rawInput').focus();
        },
        percentScan: function (event) {
            var self = this;
            if (event.keyCode == 16) {
                var scannedClean = self.scannedRaw.substring(0,self.scannedRaw.length -1);
                self.scannedItems.push(scannedClean);
                self.scannedRaw = '';
                $('#rawInput').focus();
            }

        },
        removeScanned: function (data) {
            var self = this;
            self.scannedItems.splice(data, 1)
        }
    }
})