var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');

var UserProfileActions = require('../../actions/userProfileActions.js');
var UserProfileStore = require('../../stores/userProfileStore.js');


var UserProfile = React.createClass({
    mixins: [Reflux.connect(UserProfileStore,"store")],
    getInitialState: function () {
        console.log(Router.current().params.id);
        UserProfileActions.getUserProfile(Router.current().params.id);
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

                        </div>
                        <div className="container col-sm-3 col-sm-offset-0.5">

                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = {
    enter: function() {
        ReactDom.render(<UserProfile />, document.getElementById('app'));
        console.log('UserProfile entered');
    },
    exit: function() {
        console.log('UserProfile exited');
    }
};