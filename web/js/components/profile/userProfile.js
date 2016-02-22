var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultImageGroup = require('../_common/resultImageGroup.js');
var UserProfileContent = require('./userProfileContent.js');
import { Link } from 'react-router';

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
        return {
            idCurrentProfile: Router.current().params.id,
            sectionNameCurrentProfile: Router.current().params.sectionName
        }
    },

    changePage : function (sectionName) {
        UserProfileActions.getSectionContents(this.state.idCurrentProfile,sectionName);
    },
    displaySections: function () {
        var sectionName = ['main','fashion','mangas','video games','cinema','my projects'];
        var count = sectionName.length;
        console.log(count);
        console.log("current ID");
        console.log(Router.current().params.id);
        console.log(this.state.idCurrentProfile);
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
                    <a className="col-md-offset-2 col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'main'})}>{sectionName[0]}</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'cinema'})}>{sectionName[1]}</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'mangas'})}>{sectionName[2]}</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'video games'})}>{sectionName[3]}</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'fashion'})}>{sectionName[4]}</a>
                    <a className="col-md-1" href={Router.link('userProfile',{id:this.state.idCurrentProfile,sectionName:'my projects'})}>{sectionName[5]}</a>
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

       if ( this.state.store['sectionContents']==[] ) {
         // Note that you can return false it you want nothing to be put in the dom
         // This is also your chance to render a spinner or something....
         return (
            <div><img src="./images/homepage/loading.gif" alt="loading" /></div>)
        }

        console.log("userProfileInsideRender");
        console.log(this.state.store['sectionContents']);
        console.log(this.state.store['sectionContents']['userProfileResponseDto']);
        console.log(this.state.store['sectionContents']['articlesResponseDto']);
        var p = this.state.store['sectionContents']['userProfileResponseDto'];
        var a = this.state.store['sectionContents']['articlesResponseDto'];


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


//module.exports = UserProfile;

module.exports = {
    enter: function() {
        ReactDom.render(<UserProfile />, document.getElementById('app'));
        console.log('UserProfile entered');
    },
    exit: function() {
        console.log('UserProfile exited');
    }
};


/*
var UserProfile = React.createClass({
    mixins: [Reflux.connect(UserProfileStore,"store")],

    getInitialState: function () {
        console.log("userProfile");
        console.log(this.props.params.id);
        console.log(this.props.params.sectionName);
        //UserProfileActions.getProfile(Router.current().params.id);
        UserProfileActions.getSectionContents(this.props.params.id,this.props.params.sectionName);
        return {
            idCurrentProfile: this.props.params.id,
            sectionNameCurrentProfile: this.props.params.sectionName
        }
    },

    changePage : function (sectionName) {
        UserProfileActions.getSectionContents(this.state.idCurrentProfile,sectionName);
    },
    displaySections: function () {
        var sectionName = ['main','fashion','mangas','video games','cinema','my projects'];
        var count = sectionName.length;
        console.log(count);
        console.log("current ID");
        console.log(this.props.params.id);
        console.log(this.state.idCurrentProfile);
        if (count ==2)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                    <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )
        else if (count ==3)
            return (
                <div className="userProfileSection">
                    <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                    <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                    <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                 </div>
            )
        else if (count ==4)
            return (
                <div className="userProfileSection">
                     <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )
        else if (count ==5)
            return (
                <div className="userProfileSection">
                     <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )
        else if (count ==6)
            return (
                <div className="userProfileSection">
                     <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )
        else if (count ==7)
            return (
                <div className="userProfileSection">
                     <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/football'}>football</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )

        else if (count ==8)
            return (
                <div className="userProfileSection">
                     <a className="col-md-offset-2 col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/main'}>main</Link></a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/football'}>football</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/comics'}>comics</a>
                     <a className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</a>
                </div>
            )
    },
    render: function () {

        if ( this.state.store['sectionContents']==[] ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something....
            return (
                <div><img src="./images/homepage/loading.gif" alt="loading" /></div>)
        }

        console.log("userProfileInsideRender");
        console.log(this.state.store['sectionContents']);
        console.log(this.state.store['sectionContents']['userProfileResponseDto']);
        console.log(this.state.store['sectionContents']['articlesResponseDto']);
        var p = this.state.store['sectionContents']['userProfileResponseDto'];
        var a = this.state.store['sectionContents']['articlesResponseDto'];


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

                                <h1 className="userProfileSectionTitle">{this.props.params.sectionName}</h1>
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

*/