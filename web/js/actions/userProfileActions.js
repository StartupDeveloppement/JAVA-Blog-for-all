var Reflux = require('reflux');

var UserProfileActions = Reflux.createActions([
    'getProfile',
    'getSectionContents'

]);

module.exports = UserProfileActions;