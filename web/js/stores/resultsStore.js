var Reflux = require('reflux');
var Router = require('../router.js');
var $ = require('jquery');
var ResultsActions = require('../actions/authenticationActions.js');

var ResultsStore = Reflux.createStore({
    listenables: ResultsActions,
    init: function () {
        this.results = [];
    },
    onAuthenticate: function () {
        $.ajax({
            url: 'http://localhost:8080/app/rest/results/lastarticles',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            //data: {email:email,password:password},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("Result OK");
                    this.results.concat(data);
                    Router.transitionTo('actualities');
                }else{
                    console.log("User Authentication KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = ResultsStore;