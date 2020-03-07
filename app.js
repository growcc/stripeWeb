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

var addCardToCustomer = function () {

    stripe.customers.createSource('cus_Grv02fXQQxjSDN',{source: 'tok_1GKBXKD1co9wUsBrOAGesc6l'}, function (err,card) {
        if(err)
        {
            console.log("err: "+err);
        }if(card)
        {
            console.log("success: "+JSON.stringify(card, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}

// addCardToCustomer();

var chargeCustomerThroughCustomerID = function () {

    var param = {
        amount: '1000',
        currency: 'usd',
        description:'First payment',
        customer:'cus_Grv02fXQQxjSDN'
    }

    stripe.charges.create(param, function (err,charge) {
        if(err)
        {
            console.log("err: "+err);
        }if(charge)
        {
            console.log("success: "+JSON.stringify(charge, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}
//chargeCustomerThroughCustomerID();

var chargeCustomerThroughTokenID = function () {

    var param = {
        amount: '800',
        currency: 'usd',
        description:'First payment',
        source:'tok_1GKBwxD1co9wUsBrKpLPBu0p'
    }

    stripe.charges.create(param, function (err,charge) {
        if(err)
        {
            console.log("err: "+err);
        }if(charge)
        {
            console.log("success: "+JSON.stringify(charge, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}

chargeCustomerThroughTokenID();
