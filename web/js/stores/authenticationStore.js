var Reflux = require('reflux');
var Router = require('../app.js');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
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
                    var strJSON = JSON.stringify(data);
                    var t = JSON.parse(strJSON);
                    //localStorage.setItem("token", data);
                    try{
                        var bytes = base64.decode(t['token']);
                        var text = utf8.decode(bytes);
                        console.log(text);
                    } catch(err){
                        console.log(err.message);
                    }
                    document.cookie = t['token'];
                    Router.transitionTo('actualities');
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
