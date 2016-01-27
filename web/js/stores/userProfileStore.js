var Reflux = require('reflux');
var Router = require('../router.js');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var UserProfileActions = require('../actions/userProfileActions.js');


var content = {};

var UserProfileStore = Reflux.createStore({
    listenables: UserProfileActions,
    getInitialState : function () {
        return{
            userProfile : userProfile
        }
    },
    onGetProfile: function (idProfile) {
        $.ajax({
            url: 'http://localhost:8080/rest/user/finduserprofile',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {idProfile:idProfile},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("userProfile OK");
                    userProfile = data;
                    this.trigger({userProfile: userProfile});
                    //Router.transitionTo('userProfile/'+idProfile);
                }else{
                    console.log("userProfile KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = UserProfileStore;