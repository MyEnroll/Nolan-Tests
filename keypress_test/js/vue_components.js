var scanner = new Vue({
    el: '#scannertest',
    data: {
        scannedItems: [],
        scannedRaw: '',
        editPrep: null,
        totalScanned: 0,
        totalExpected: null
    },
    methods: {
        pushtoScanned: function () {
            var self = this;
            if (self.editPrep == null) {
                var self = this;
                if (self.scannedItems.includes(self.scannedRaw)) {

                } else {
                    self.scannedItems.push(self.scannedRaw);
                }
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
        },
        saveEditItem: function (index) {
            var self = this;
            var tempVal = $('[data-index="' + index + '"]').children('input').val();
            Vue.set(scanner.scannedItems, index, tempVal);
            self.editPrep = null;
            self.scannedRaw = '';
            $('#rawInput').focus();
        },
        cancelEditItem: function () {
            var self = this;
            self.editPrep = null;
            self.scannedRaw = '';
            $('#rawInput').focus();
        }
    },
    watch: {
        scannedItems: function () {
            var self = this;
            self.totalScanned = self.scannedItems.length;
        }
    }
})