var React = require('react');
var Reflux = require('reflux');
var CommonNavBar = require('../_common/commonNavBar.js');
var ContentLeft = require('./subContent/contentLeft.js');
var ContentRight = require('./subContent/contentRight.js');

var ContentActions = require('../../actions/contentActions.js');
var ContentStore = require('../../stores/contentStore.js');


var Content = React.createClass({
    mixins: [Reflux.connect(ContentStore,"store")],
    getInitialState: function () {

         console.log(this.props.params.id);
         ContentActions.getContent(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps) {
        ContentActions.getContent(nextProps.params.id);
    },
    render: function () {
        if ( !this.state.store ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div><img src="./images/homepage/loading.gif" alt="loading" /></div>
        }
        return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <br />
                    <br />
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
                                        userEmail={this.state.store.content.userEmail}
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


module.exports = Content;
