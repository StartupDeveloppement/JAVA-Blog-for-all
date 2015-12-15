var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('abyssa').Router;
var State = require('abyssa').State;
var Homepage = require('./components/homepage/homepage.js');
var Actualities = require('./components/actualities/actualities.js');

var Router = Router()
    .addState('homepage', State('homepage', Homepage))
    .addState('actualities', State('actualities', Actualities))
    .configure({
        enableLogs: true,
        notFound: 'homepage'
    }).init('homepage');

module.exports = Router;