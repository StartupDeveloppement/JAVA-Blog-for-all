var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('./router.js');
var State = require('abyssa').State;
var Homepage = require('./components/homepage/homepage.js');
var Actualities = require('./components/actualities/actualities.js');
var Profile = require('./components/profile/profile.js');


Router
    .addState('homepage', State('', Homepage))
    .addState('actualities', State('actualities', Actualities))
    .addState('profile', State('profile', Profile));

document.addEventListener("DOMContentLoaded", function(event) {
    Router.init('homepage')
});
