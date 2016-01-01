var React = require('react');
var Reflux = require('reflux');
var Router = require('../../router.js');
var State = require('abyssa').State;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var SearchActions = require('../../actions/searchActions.js');
var SearchStore = require('../../stores/searchStore.js')


var CommonNavBar = React.createClass({

    mixins: [Reflux.connect(SearchStore)],
    handleSearch:function(event){
        event.preventDefault();
        SearchActions.searchResults();
        //this.setState({email: ''});
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
                        <ul className="nav navbar-nav">
                            <li><a href={Router.link('actualities')}>Actualities</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                        <form role="search" className="navbar-form navbar-right" onSubmit={this.handleSearch}>
                            <div className="form-group">
                                <Input type="text" bsSize="small" buttonAfter={innerButton} placeholder="Search" />
                            </div>
                        </form>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">Claire<b className="caret"></b></a>
                                <ul role="menu" className="dropdown-menu">
                                    <li><a href={Router.link('profile')} >Profile</a></li>
                                    <li><a href={Router.link('parameters')}>Parameters</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
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