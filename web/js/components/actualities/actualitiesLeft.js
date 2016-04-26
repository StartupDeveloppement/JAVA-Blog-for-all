var React = require('react');
var Reflux = require('reflux');
var ResultImageGroup = require('../_common/resultImageGroup.js');

var ResultsAction = require('../../actions/resultsActions.js');
var ResultsStore = require('../../stores/resultsStore.js');



var ActualitiesLeft = React.createClass({
    mixins: [Reflux.connect(ResultsStore, "store")],
    getInitialState: function () {
        ResultsAction.getLastArticles();
    },
    render: function () {
        if ( !this.state.store ) {

            return <div><img src="./images/homepage/loading.gif" alt="loading" /></div>
        }

        return (
            <div>
                <ResultImageGroup articles={this.state.store} ></ResultImageGroup>
            </div>
        );
    }
});

module.exports = ActualitiesLeft;
