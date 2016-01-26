var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ContentLeft = require('./subContent/contentLeft.js');
var ContentRight = require('./subContent/contentRight.js');

var ContentActions = require('../../actions/contentActions.js');
var ContentStore = require('../../stores/contentStore.js');


var Content = React.createClass({
    mixins: [Reflux.connect(ContentStore,"store")],
    getInitialState: function () {
        console.log(Router.current().params.id);
        ContentActions.getContent(Router.current().params.id);
    },
    render: function () {
        return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <div className="row">
                        <div className="container col-sm-7 col-sm-offset-1">
                            {
                                this.state.store
                                    ?
                                    <ContentLeft
                                        articleTitle={this.state.store.content.articleTitle}
                                        profilePicture={this.state.store.content.profilePicture}
                                        profileName={this.state.store.content.profileName}
                                        articleText={this.state.store.content.articleText}
                                    />
                                    :
                                    <div>
                                        <br />
                                        <img src="./images/homepage/loading.gif" alt="loading" />
                                    </div>
                            }
                        </div>
                        <div className="container col-sm-3 col-sm-offset-0.5">
                            <ContentRight />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = {
    enter: function() {
        ReactDom.render(<Content />, document.getElementById('app'));
        console.log('Content entered');
    },
    exit: function() {
        console.log('Content exited');
    }
};