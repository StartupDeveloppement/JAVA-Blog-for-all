var Reflux = require('reflux');
var React = require('react');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var SearchActions = require('../actions/searchActions.js');

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//import { Navigation } from 'react-router';
import { Link } from 'react-router';

var searchResults = [];

var SearchStore = Reflux.createStore({
    listenables: SearchActions,

    getInitialState : function () {
            return{
                searchResults : searchResults
            }
    },
    onSearchResults: function (searchRequest) {
        $.ajax({
            url: 'http://localhost:8080/rest/articles/searchedarticles',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {search:searchRequest},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    searchResults = [];
                    console.log("Result OK");
                    searchResults = searchResults.concat(data);
                    this.trigger({searchResults: searchResults});
                    appHistory.push('/search/'+searchRequest);

                }else{
                    console.log("Search Result KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = SearchStore;