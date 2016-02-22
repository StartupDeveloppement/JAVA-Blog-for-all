var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('./router.js');
var State = require('abyssa').State;
var base64 = require('base-64');
var utf8 = require('utf8');

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var Homepage = require('./components/homepage/homepage.js');
var Actualities = require('./components/actualities/actualities.js');
var Profile = require('./components/profile/profile.js');
var Parameters = require('./components/parameters/parameters.js');
var Help = require('./components/help/help.js');
var Search = require('./components/search/search.js');
var Login = require('./components/login/login.js');
var ImportForm = require('./components/content/importForm.js');
var CreateForm = require('./components/content/createForm.js');
var CreateContent = require('./components/content/createContent.js');
var Content = require('./components/content/content.js');
var UserProfile = require('./components/profile/userProfile.js');


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

Router
    .addState('homepage', State('', Homepage))
    .addState('actualities', State('actualities', Actualities))
    .addState('profile', State('profile', Profile))
    .addState('parameters', State('parameters', Parameters))
    .addState('help', State('help', Help))
    .addState('search', State('search', Search))
    .addState('login', State('login', Login))
    .addState('importForm', State('importForm', ImportForm))
    .addState('createForm', State('createForm', CreateForm))
    .addState('createContent', State('createContent', CreateContent))
    .addState('content',State('content/:id', Content))
    .addState('userProfile',State('userProfile/:id/:sectionName', UserProfile));

document.addEventListener("DOMContentLoaded", function(event) {
    if (getEmail()!="") {
        Router.init('actualities');
        /*ReactDom.render((
            <Router history={appHistory}>
                <Route path="/" component={Actualities} />
                <Route path="/profile" component={Profile}/>
                <Route path="/parameters" component={Parameters}/>
                <Route path="/help" component={Help}/>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <Route path="/importForm" component={ImportForm}/>
                <Route path="/createForm" component={CreateForm}/>
                <Route path="/createContent" component={CreateContent}/>
                <Route path="/content/:id" component={Content}/>
                <Route path="/userProfile/:id/:sectionName" component={UserProfile}/>
            </Router>
        ), document.getElementById('app'));*/

    }else {
        Router.init('homepage');
        /*ReactDom.render((
            <Router history={appHistory}>
                <Route path="/" component={Homepage} />
                <Route path="/profile" component={Profile}/>
                <Route path="/parameters" component={Parameters}/>
                <Route path="/help" component={Help}/>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <Route path="/importForm" component={ImportForm}/>
                <Route path="/createForm" component={CreateForm}/>
                <Route path="/createContent" component={CreateContent}/>
                <Route path="/content/:id" component={Content}/>
                <Route path="/userProfile/:id/:sectionName" component={UserProfile}/>
            </Router>
        ), document.getElementById('app'));*/
    }
});
