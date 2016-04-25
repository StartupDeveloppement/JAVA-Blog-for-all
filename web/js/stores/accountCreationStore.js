var Reflux = require('reflux');
var React = require('react');
var $ = require('jquery');
var base64 = require('base-64');
var utf8 = require('utf8');

import { Link } from 'react-router';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

/**/

var AccountCreationAction = require('../actions/accountCreationActions.js');



var AccountCreationStore = Reflux.createStore({
    listenables: AccountCreationAction,

    onCreateAccount: function (email, password){
        $.ajax({
            url: 'http://localhost:8080/rest/user/create',
            type:'POST',
            contentType:'application/x-www-form-urlencoded',
            dataType:'json',
            data: {email:email,password:password},
            context:this,
            success: function (data){
                if (data) {
                    console.log("User Creation OK");
                    var strJSON = JSON.stringify(data);
                    var t = JSON.parse(strJSON);
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
                    console.log("User Creation KO");
                    console.log(data);
                }
            },
            error : function (){
                console.log("User Creation ERROR");
            }

        })
    }

});

module.exports = AccountCreationStore;