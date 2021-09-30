(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-payment="form"]';
    var App = window.App;
    var Payment = App.Payment;
    var DataStore = App.DataStore;
    var myPayment = new Payment('ncc-1701', new DataStore());
    var FormHandler = App.FormHandler;
    window.myPayment = myPayment;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myPayment.createPayment(data);
        myPayment.printPayment(data);
        myPayment.processedPayment(data.username);
    });
    console.log(formHandler);
})(window);