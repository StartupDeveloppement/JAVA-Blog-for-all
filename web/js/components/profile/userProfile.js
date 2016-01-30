var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var UserProfileLeft = require('./userProfileContent.js');

var UserProfileActions = require('../../actions/userProfileActions.js');
var UserProfileStore = require('../../stores/userProfileStore.js');


var UserProfile = React.createClass({
    mixins: [Reflux.connect(UserProfileStore,"store")],
    getInitialState: function () {
        console.log(Router.current().params.id);
        UserProfileActions.getProfile(Router.current().params.id);
    },
    render: function () {
        if ( !this.state.store['userProfile'] ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div><img src="./images/homepage/loading.gif" alt="loading" /></div>
        }
        console.log(this.state.store['userProfile']);
        var p = this.state.store['userProfile'];
        return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <div className="row userProfileBanner">
                        <img className="userProfilePicture img-circle" src={p['profilePicture']} />
                        <div className="userProfileInfo">
                            <h3 className="commonColorWhite">{p['profileName']}</h3>
                            <p className="commonColorWhite">{p['status']}</p>
                            <p className="commonColorWhite">{p['universityName']}</p>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="container col-sm-7 col-sm-offset-2">
                            <UserProfileLeft />
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