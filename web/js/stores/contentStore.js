var Reflux = require('reflux');
var Router = require('../router.js');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var ContentActions = require('../actions/contentActions.js');

var content = {};

var ContentStore = Reflux.createStore({
    listenables: ContentActions,
    getInitialState : function () {
        return{
            content : content
        }
    },
    onSearchResults: function (idContent) {
        $.ajax({
            url: 'http://localhost:8080/rest/articles/readarticle',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {idContent:idContent},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("Content OK");
                    content = data;
                    this.trigger({searchResults: searchResults});
                    //Router.transitionTo('content/'+idContent);
                }else{
                    console.log("Content KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = ContentStore;