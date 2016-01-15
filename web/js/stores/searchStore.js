var Reflux = require('reflux');
var Router = require('../router.js');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var SearchActions = require('../actions/searchActions.js');

var searchResults = [];

var SearchStore = Reflux.createStore({
    listenables: SearchActions,
    onSearchResults: function (searchRequest) {
        $.ajax({
            url: 'http://localhost:8080/app/rest/articles/searchedarticles',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {search:'les'},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("Result OK");
                    searchResults = searchResults.concat(data);
                    this.trigger(searchResults);
                    Router.transitionTo('search');
                    searchResults = [];
                }else{
                    console.log("Search Result KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = SearchStore;