(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ncc-1701', new DataStore());
    var FormHandler = App.FormHandler;
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
})(window);