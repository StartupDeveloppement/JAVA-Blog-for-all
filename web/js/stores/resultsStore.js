var Reflux = require('reflux');
var $ = require('jquery');
var ResultsActions = require('../actions/resultsActions.js');

var results = [];

var ResultsStore = Reflux.createStore({
    listenables: ResultsActions,
    /*getInitialState: function () {
        return {
            results: []
        };
    },*/

    onGetLastArticles: function () {
        $.ajax({
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Accept","application/json");
            },
            url: 'http://localhost:8080/rest/articles/lastarticles',
            type: 'GET',
            /*//contentType: 'application/x-www-form-urlencoded',
            //data: {email:email,password:password},*/
            /*contentType: "application/json",
            dataType: "json",*/
            context:this,
            success: function(data) {
                if (data) {
                    console.log("Result OKK");
                    results = results.concat(data);
                    this.trigger(results);
                    /*console.log(data);
                    console.log(results);*/
                }else{
                    console.log("Search Result KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = ResultsStore;