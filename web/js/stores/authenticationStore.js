var Reflux = require('reflux');
var $ = require('jquery');
var AuthenticationActions = require('../actions/authenticationActions.js');

var AuthenticationStore = Reflux.createStore({
    listenables: AuthenticationActions,
    onAuthenticate: function (email,password) {
        $.ajax({
            url: 'http://localhost:8080/app/rest/user/authenticate',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {email:email,password:password},
            dataType: "json",
            context:this,
            success: function(data) {
                if (data) {
                    console.log("User Authentication OK");
                    console.log(data);
                    localStorage.setItem("token", data);
                }
                else{
                    console.log("User Authentication KO");
                    console.log(data);
                }
                /*this.res["key1"] = data;
                this.trigger(this.res);*/
            }
        });
    }
});

module.exports = AuthenticationStore;
