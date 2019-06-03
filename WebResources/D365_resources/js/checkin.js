/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
var D365Plugin;
(function (D365Plugin) {
    var checkin;
    (function (checkin) {
        var CheckInViewModel = /** @class */ (function () {
            function CheckInViewModel() {
                this.isbusy = ko.observable(false);
            }
            CheckInViewModel.prototype.Hello = function () {
                alert('Hello World!');
            };
            return CheckInViewModel;
        }());
    })(checkin = D365Plugin.checkin || (D365Plugin.checkin = {}));
})(D365Plugin || (D365Plugin = {}));
//# sourceMappingURL=checkin.js.map