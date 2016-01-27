var Router = require('abyssa').Router;
/*
var State = require('abyssa').State;

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
*/

module.exports = Router().configure({
        enableLogs: true,
        urlSync:'hash',
        notFound:'homepage'
    });

/*
 {
 homepage: State('', Homepage),
 actualities: State('actualities', Actualities),
 profile: State('profile', Profile),
 parameters: State('parameters', Parameters),
 help: State('help', Help),
 search: State('search', Search),
 login: State('login', Login),
 importForm: State('importForm', ImportForm),
 createForm: State('createForm', CreateForm),
 createContent: State('createContent', CreateContent),
 content:State('content/:id', Content)
 }
 */