var Reflux = require('reflux');

var AuthenticationActions = Reflux.createActions([
    'authenticate',
    'checkAuthentication'
]);

module.exports = AuthenticationActions;