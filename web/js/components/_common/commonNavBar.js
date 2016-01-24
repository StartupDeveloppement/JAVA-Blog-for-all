var React = require('react');
var Reflux = require('reflux');
var Router = require('../../router.js');
var base64 = require('base-64');
var utf8 = require('utf8');
var State = require('abyssa').State;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

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

var CommonNavBar = React.createClass({

    mixins: [Reflux.connect(SearchStore)],
    getInitialState: function (){
        return {
            searchValue: '',
            profileName : "Megan"
        };
    },
    handleSearch:function(event){
        event.preventDefault();
        SearchActions.searchResults(this.state.searchValue);
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
                        <a href={Router.link('homepage')} className="navbar-brand">Blog Project</a>
                    </div>

                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        {getEmail()!=""
                            ?
                            <ul className="nav navbar-nav">
                                <li className="navbar-left"><a href={Router.link('actualities')}>Actualities</a></li>
                                <li className="navbar-left"><a href="#">Projects</a></li>
                            </ul>
                            :
                            null

                            }
                        <div className="nav navbar-nav">
                            <ModalAddContent />
                        </div>
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
                                        <li><a href={Router.link('profile')} >Profile</a></li>
                                        <li><a href={Router.link('parameters')}>Parameters</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Logout</a></li>
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