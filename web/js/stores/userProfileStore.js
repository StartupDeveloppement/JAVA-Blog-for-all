var Reflux = require('reflux');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var UserProfileActions = require('../actions/userProfileActions.js');


var userProfile = {};
var sectionContents = {};

var UserProfileStore = Reflux.createStore({
    listenables: UserProfileActions,
    getInitialState : function () {
        return{
            userProfile : userProfile,
            sectionContents : sectionContents
        }
    },
    onGetProfile: function (id) {
        $.ajax({
            url: 'http://localhost:8080/rest/user/finduserprofile',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {id:id},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("userProfile OK");
                    //userProfile = [];
                    userProfile = data;
                    this.trigger({userProfile: userProfile});
                }else{
                    console.log("userProfile KO");
                    console.log(data);
                }
            }
        });
    },
    onGetSectionContents: function (id,sectionName) {
        $.ajax({
            url: 'http://localhost:8080/rest/articles/findsectionarticles',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {id:id,sectionName:sectionName},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("sectionContents OK");
                    //sectionContents = [];
                    //sectionContents = sectionContents.concat(data);
                    sectionContents = data;
                    this.trigger({sectionContents: sectionContents});
                }else{
                    console.log("sectionContents KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = UserProfileStore;