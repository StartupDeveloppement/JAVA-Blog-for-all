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
        /*UserProfileActions.getProfile(Router.current().params.id);*/
        UserProfileActions.getSectionContents(Router.current().params.id,Router.current().params.sectionName);

    },
    displaySections: function () {
        var count =6;
        if (count ==2)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
        else if (count ==3)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
        else if (count ==4)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'video games'})}>video games</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
        else if (count ==5)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'mangas'})}>mangas</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'video games'})}>video games</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
        else if (count ==6)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'mangas'})}>mangas</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'video games'})}>video games</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'fashion'})}>fashion</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
        else if (count ==7)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'mangas'})}>mangas</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'video games'})}>video games</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'fashion'})}>fashion</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'football'})}>football</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )

        else if (count ==8)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>main</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'cinema'})}>cinema</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'mangas'})}>mangas</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'video games'})}>video games</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'fashion'})}>fashion</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'football'})}>football</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'comics'})}>comics</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:Router.current().params.id,sectionName:'my projects'})}>my projects</a>
                </div>
            )
    },
    render: function () {

        /*if ( !this.state.store['userProfile'] ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something....
            return (
                <div><img src="./images/homepage/loading.gif" alt="loading" /></div>)        }*/

       if ( this.state.store['sectionContents']==[] ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something....
         return (
            <div><img src="./images/homepage/loading.gif" alt="loading" /></div>)
        }

        console.log("userProfileInsideRender");
        /*console.log(this.state.store['userProfile']);
        var p = this.state.store['userProfile'];*/
        console.log(this.state.store['sectionContents']);
        console.log(this.state.store['sectionContents']['userProfileResponseDto']);
        console.log(this.state.store['sectionContents']['articlesResponseDto']);
        var p = this.state.store['sectionContents']['userProfileResponseDto'];
        var a = this.state.store['sectionContents']['articlesResponseDto'];

        var actualities = [
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'1',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'2',
                articlePicture:'./images/test/starwars.jpg'}
        ];


        return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    {
                        p ?
                            <div className="row userProfileBanner">
                                <img className="userProfilePicture img-circle" src={p['profilePicture']}/>
                                <div className="userProfileInfo">
                                    <h3 className="commonColorWhite">{p['profileName']}</h3>
                                    <p className="commonColorWhite">{p['status']}</p>
                                    <p className="commonColorWhite">{p['universityName']}</p>
                                </div>

                                <h1 className="userProfileSectionTitle">{Router.current().params.sectionName}</h1>
                                {this.displaySections()}
                            </div>
                        : null
                    }
                    <div className="row">
                        <br />
                        <div className="container col-sm-7 col-sm-offset-2">
                            <ResultImageGroup articles={a} ></ResultImageGroup>
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