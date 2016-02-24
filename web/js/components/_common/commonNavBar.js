var React = require('react');
var Reflux = require('reflux');
var base64 = require('base-64');
var utf8 = require('utf8');
var Input = require('react-bootstrap').Input;

import { Link } from 'react-router';
import { Navigation } from 'react-router';

var SearchActions = require('../../actions/searchActions.js');
var SearchStore = require('../../stores/searchStore.js');
var ModalAddContent = require('../content/modalAddContent.js');


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

function getName() {
    var sp=getCookie("sp");
    if (sp!="") {
        var bytes = base64.decode(sp);
        var text = utf8.decode(bytes);
        var name = text.split(":")[0];
        return name;
    }
    return "";
}

function deleteAllCookies() {
    var c = document.cookie.split("; ");
    var i;
    for (i in c)
        document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

var CommonNavBar = React.createClass({

    mixins: [Reflux.connect(SearchStore),Navigation],

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function (){

        return {
            searchValue: '',
            profileName : getName()
        };
    },

    getProfileName: function (){
        getName()
    },

    logout: function () {
        deleteAllCookies();
        const { router } = this.context;
        router.push('/homepage');
        //Router.transitionTo('homepage');
    },

    openModal:function(){
        this.refs.modalAddContent.open()
    },

    handleSearch:function(event){
        event.preventDefault();
        SearchActions.searchResults(this.state.searchValue);
        /*const { router } = this.context;
        router.push('/search/'+this.state.searchValue);*/
        this.setState({searchValue: ''});
    },

    _onChangeSearchValue:function(e){
      this.setState({searchValue: e.target.value})
    },
    render: function(){
        const innerButton = <button type="submit" className="btn btn-default">submit</button>;

        return (
            <div className="navbar navbar-default navbar-fixed-top commonBoxShadowNavbar">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle" >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={"/homepage"} >Blog Project </Link>
                    </div>

                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        {getEmail()!=""
                            ?
                            <ul className="nav navbar-nav">
                                <li className="navbar-left"><Link to="/actualities">Actualities</Link></li>
                                <li className="navbar-left"><a href="#">Projects</a></li>
                                <li><a className="fontModalAddContent" onClick={this.openModal}> <b>add content</b> </a></li>
                            </ul>
                            :
                            <ul className="nav navbar-nav">
                                <li><a className="fontModalAddContent" onClick={this.openModal}> <b>add content</b> </a></li>
                            </ul>

                        }

                        <ModalAddContent ref="modalAddContent" />
                        <form role="search" className="navbar-form navbar-right" onSubmit={this.handleSearch}>
                            <div className="form-group">
                                <Input type="text" bsSize="small" buttonAfter={innerButton} placeholder="Search" value={this.state.searchValue} onChange={this._onChangeSearchValue} />
                            </div>
                        </form>
                        {getEmail()!=""
                            ?
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">{this.state.profileName}<b className="caret"></b></a>
                                    <ul role="menu" className="dropdown-menu">
                                        <li><Link to='/profile'>Profile</Link></li>
                                        <li><Link to='/parameters'>Parameters</Link></li>
                                        <li className="divider"></li>
                                        <li><a className="commonMousePointer" onClick={this.logout}>Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                            :
                            null
                        }

                    </div>
                </div>

            </div>
        )
    }
});

module.exports = CommonNavBar;


/*
 <div className="row commonUnderlineNavbar">
 </div>
    */