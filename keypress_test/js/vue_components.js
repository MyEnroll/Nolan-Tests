var scanner = new Vue({
    el: '#scannertest',
    data: {
        scannedItems: [],
        scannedRaw: '',
        editPrep: null
    },
    methods: {
        pushtoScanned: function () {
            var self = this;
            if (self.editPrep == null) {
                var self = this;
                self.scannedItems.push(self.scannedRaw);
                self.scannedRaw = '';
                $('#rawInput').focus();
            } else {
                Vue.set(scanner.scannedItems, scanner.editPrep, self.scannedRaw);
                self.scannedRaw = '';
                $('#rawInput').focus();
            }

        },
        percentScan: function (event) {
            var self = this;
            if (event.keyCode == 16 && self.editPrep == null) {
                var scannedClean = self.scannedRaw.substring(0, self.scannedRaw.length - 1);
                self.scannedItems.push(scannedClean);
                self.scannedRaw = '';
                $('#rawInput').focus();
            }

        },
        removeScanned: function (data) {
            var self = this;
            self.scannedItems.splice(data, 1)
        },
        editInline: function (data) {
            var self = this;
            self.editPrep = data;
            console.log(data);
            $('#rawInput').focus();
            self.scannedRaw = '';
        }
    }
})