var React = require('react');
var Reflux = require('reflux');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultImageGroup = require('../_common/resultImageGroup.js');
import { Link } from 'react-router';
var base64 = require('base-64');
var utf8 = require('utf8');

var UserProfileActions = require('../../actions/userProfileActions.js');
var UserProfileStore = require('../../stores/userProfileStore.js');


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getEmail() {
    var s=getCookie("s");
    if (s!="") {
        var bytes = base64.decode(s);
        var text = utf8.decode(bytes);
        var email = text.split(":")[0];
        return email;
    }
    return "";
}

var UserProfile = React.createClass({
    mixins: [Reflux.connect(UserProfileStore,"store")],
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        console.log("userProfile");
        console.log(this.props.params.id);
        console.log(this.props.params.sectionName);
        //UserProfileActions.getProfile(this.props.params.id);
        UserProfileActions.getSectionContents(this.props.params.id,this.props.params.sectionName);
        return {
            idCurrentProfile: this.props.params.id,
            sectionNameCurrentProfile: this.props.params.sectionName
        }
    },
    componentWillReceiveProps: function(nextProps) {
        UserProfileActions.getSectionContents(nextProps.params.id,nextProps.params.sectionName);
    },
    changePage : function (sectionName) {
        UserProfileActions.getSectionContents(this.state.idCurrentProfile,sectionName);
    },
    handleClick : function () {
        const { router } = this.context;
        router.push('/editprofile');
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
                    <Link className="col-md-offset-5 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <div className="col-md-1"><Link to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link></div>
                </div>
        )
        else if (count ==3)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-5 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
                </div>
            )
        else if (count ==4)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-4 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
                </div>
            )
        else if (count ==5)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-4 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
                </div>
            )
        else if (count ==6)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-3 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
                </div>
            )
        else if (count ==7)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-3 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/football'}>football</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
                </div>
            )
        else if (count ==8)
            return (
                <div className="userProfileSection">
                    <Link className="col-md-offset-2 col-md-1" to={'/userProfile/'+this.props.params.id+'/main'}>main</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/cinema'}>cinema</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/videos games'}>videos games</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/mangas'}>mangas</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/fashion'}>fashion</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/football'}>football</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/comics'}>comics</Link>
                    <Link className="col-md-1" to={'/userProfile/'+this.props.params.id+'/my projects'}>my projects</Link>
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

            var imgBlur;
            var imgBanner;
            var styles;
            var styles2;
            if (p!=null && p!= undefined) {
                imgBlur = p['profilePicture'];
                styles = {
                    styleBackground: {backgroundImage: 'url('+imgBlur+')'}
                };
                imgBanner = "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG?uselang=fr" ; //p['bannerPicture'];
                styles2 = {
                    styleBackground: {backgroundImage: 'url('+imgBanner+')'}
                };
            }

            return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    {
                        p ?
                            <div className="row userProfileBanner" >
                                {
                                    (p['bannerPicture']!=null && p['bannerPicture']!=undefined) ?
                                        <div style={styles2.styleBackground}></div>
                                        :
                                        <div className="commonOverlay userProfileBlur" style={styles.styleBackground}></div>
                                }
                                {
                                    getEmail()==this.props.params.id
                                        ?
                                        <form className="userProfileEdit" onSubmit={this.handleClick}>
                                            <button type="submit" className="btn btn-default btn-sm pull-right">[ edit ]</button>
                                        </form>
                                        :
                                        null
                                }
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


module.exports = UserProfile;
