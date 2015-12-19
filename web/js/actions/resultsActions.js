var Reflux = require('reflux');

var ResultsActions = Reflux.createActions([
    'getLastArticles',
    'getLastArticlesForSpecificUser',
    'getArticlesForSpecificPage'
]);

module.exports = ResultsActions;