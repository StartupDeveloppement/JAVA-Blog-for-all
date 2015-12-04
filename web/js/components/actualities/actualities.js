var React = require('react');
var ReactDom = require('react-dom');
var Router = require('abyssa').Router;
var State = require('abyssa').State;
var ActualitiesLeft = require('./actualitiesLeft.js');
var ActualitiesRight = require('./actualitiesRight.js');

var Actualities = React.createClass({
    render: function(){
        return (
            <div>
                <nav role="navigation" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle" >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        <a href="#" className="navbar-brand">Blog Project</a>
                        </div>

                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Actualities</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                            <form role="search" className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input type="text" placeholder="Search" className="form-control" />
                                </div>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">Claire<b className="caret"></b></a>
                                    <ul role="menu" className="dropdown-menu">
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">Parameters</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
                <div className="row commonContainer">
                    <br />
                    <br />
                    <br />
                    <h3 className="commonMainTitle">LAST SHARED CONTENT of my contact</h3>
                    <div>
                        <div className="container col-sm-7 col-sm-offset-1">
                            <ActualitiesLeft></ActualitiesLeft>
                        </div>
                        <div className="container col-sm-3 col-sm-offset-0.5">
                            <ActualitiesRight></ActualitiesRight>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = {
 enter: function() {
         ReactDom.render(<Actualities />, document.getElementById('app'));
         console.log('index entered');
     },
 exit: function() {
        console.log('index exited');
     }
 };