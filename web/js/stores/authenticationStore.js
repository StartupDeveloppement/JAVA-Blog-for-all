var Reflux = require('reflux');
var React = require('react');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');
var AuthenticationActions = require('../actions/authenticationActions.js');
import { Link } from 'react-router';
//import { Navigation } from 'react-router';

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getEmail() {
    var s=getCookie("s");
    if (s!="") {
        var bytes = base64.decode(s);
        var text = utf8.decode(bytes);
        var email = text.split(":")[0];
        return email;
    }
    return "";
}

var AuthenticationStore = Reflux.createStore({
    listenables: AuthenticationActions,
    //mixins: [ Navigation ],
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    onCheckAuthentication: function(){
        if (getEmail()!="")
            appHistory.push('/actualities');

            /*$.ajax({
                url: 'http://localhost:8080/rest/user/checkauthentication',
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded',
                data: {email: getEmail()},
                dataType: "json",
                context: this,
                success: function (data) {
                    var strJSON = JSON.stringify(data);
                    var t = JSON.parse(strJSON);
                    if (t['authenticate']==true)
                        //alert(getEmail()+ " is authenticated YESSS");
                        appHistory.push('/actualities');
                }
            })*/
    },
    onAuthenticate: function (email,password) {
        $.ajax({
            url: 'http://localhost:8080/rest/user/authenticate',
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
                    //   localStorage.setItem("token", data);
                    try{
                        var bytes = base64.decode(t['s']);
                        var text = utf8.decode(bytes);
                        console.log(text);
                    } catch(err){
                        console.log(err.message);
                    }
                    document.cookie = t['s'];
                    document.cookie = t['sp'];
                    appHistory.push('/actualities');
                }else{
                    console.log("User Authentication KO");
                    console.log(data);
                }
            }
        });
    }
});

module.exports = AuthenticationStore;
