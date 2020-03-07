var express = require('express');
const stripe = require('stripe')('sk_test_kobNb7Epfg3AWPSMYXsLSmfJ00PykOrnB4');
var app = express();


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//create new customer

var createCustomer = function () {
    var param ={};
    param.email ="mike@gmail.com";
    param.name="Mike";
    param.description ="from node";

    stripe.customers.create(param, function (err,customer) {
        if(err)
        {
            console.log("err: "+err);
        }if(customer)
        {
            console.log("success: "+customer)
        }else{
            console.log("Something wrong")
        }
    })

}

var retreiveCustomer = function () {
    stripe.customers.retrieve(id = "cus_Grv02fXQQxjSDN", function (err,customer) {
        if(err)
        {
            console.log("err: "+err);
        }if(customer)
        {
            // console.log("success: "+ JSON.stringfy(customer, replacer: null, space: 2))
        }else{
            console.log("Something wrong")
        }
    })

}

// retreiveCustomer();

var createToken = function () {

    var param = {};
    param.card ={
        number: '4242424242424242',
        exp_month: 2,
        exp_year:2024,
        cvc:'212'
    }

    stripe.tokens.create(param, function (err,token) {
        if(err)
        {
            console.log("err: "+err);
        }if(token)
        {
            console.log("success: "+JSON.stringify(token, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}
createToken();
