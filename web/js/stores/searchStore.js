var Reflux = require('reflux');
var Router = require('../router.js');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var SearchActions = require('../actions/searchActions.js');

var SearchStore = Reflux.createStore({
    listenables: SearchActions,
    onSearchResults: function () {
        Router.transitionTo('search');
    }
});

module.exports = SearchStore;