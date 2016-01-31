var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultImageGroup = require('../_common/resultImageGroup.js');
var UserProfileContent = require('./userProfileContent.js');

var UserProfileActions = require('../../actions/userProfileActions.js');
var UserProfileStore = require('../../stores/userProfileStore.js');


var UserProfile = React.createClass({
    mixins: [Reflux.connect(UserProfileStore,"store")],

    getInitialState: function () {
        console.log("userProfile");
        console.log(Router.current().params.id);
        console.log(Router.current().params.sectionName);
        UserProfileActions.getProfile(Router.current().params.id);
        /*UserProfileActions.getSectionContents(Router.current().params.id,Router.current().params.sectionName);*/
    },
    displaySections: function () {
        var count =8;

        if (count ==2)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-5 col-md-1">main</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==3)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-5 col-md-1">main</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==4)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-4 col-md-1">main</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==5)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-4 col-md-1">main</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">mangas</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==6)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-3 col-md-1">main</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">mangas</span>
                    <span className="col-md-1">video games</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==7)
            return (
                <div className="userProfileSection">
                    <span className="col-md-offset-3 col-md-1">main</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">video games</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">mangas</span>
                    <span className="col-md-1">cinema</span>
                    <span className="col-md-1">my projects</span>
                </div>
            )
        else if (count ==8)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href="">main</a>
                    <a className="col-md-1" href="">cinema</a>
                    <a className="col-md-1" href="">mangas</a>
                    <a className="col-md-1" href="">video games</a>
                    <a className="col-md-1" href="">fashion</a>
                    <a className="col-md-1" href="">football</a>
                    <a className="col-md-1" href="">comics</a>
                    <a className="col-md-1" href="">my projects</a>
                </div>
            )
    },
    render: function () {

        if ( !this.state.store['userProfile'] ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something....
            return (
                <div><img src="./images/homepage/loading.gif" alt="loading" /></div>)        }

        console.log("userProfileInsideRender");
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
                        <h1 className="userProfileSectionTitle">{Router.current().params.sectionName}</h1>
                        {this.displaySections()}
                    </div>
                    <div className="row">
                        <br />
                        <div className="container col-sm-7 col-sm-offset-2">
                            <UserProfileContent />
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