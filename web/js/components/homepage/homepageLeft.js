var React = require('react');
var Reflux = require('reflux');
var ResultImageGroup = require('../_common/resultImageGroup.js');

var ResultsAction = require('../../actions/resultsActions.js');
var ResultsStore = require('../../stores/resultsStore.js');


var HomepageLeft = React.createClass({
    mixins: [Reflux.connect(ResultsStore, "store")],
    getInitialState: function () {
        ResultsAction.getLastArticles();
    },
    render: function () {
        if ( !this.state.store ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div><img src="./images/homepage/loading.gif" alt="loading" /></div>
        }

        return (
            <div>
                <ResultImageGroup articles={this.state.store} ></ResultImageGroup>
            </div>
        );
    }
});

module.exports = HomepageLeft;
