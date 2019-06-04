/// <reference path="../../node_modules/@types/knockout/index.d.ts" />

namespace D365Plugin.checkin
{
    class CheckInViewModel {
        isbusy: KnockoutObservable<boolean>;

        constructor() {
            this.isbusy = ko.observable(false);
        }

        public Hello() {
            alert('Hello World!');
        }
    }
}