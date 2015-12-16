var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');


var Parameters = React.createClass({

    render: function () {
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
                <br />
                <br />
                <br />
                <br />
                <div className="wrapper">
                    <div className="box">
                        <div className="row">
                            <div className="column col-sm-2 sidebar" id="sidebar">
                                <br />
                                <ul className="nav">
                                    <li className="active"><a href="#featured">Languages</a>
                                    </li>
                                    <li><a href="#stories">Theme</a>
                                    </li>
                                    <li><a href="#stories">Security</a>
                                    </li>
                                </ul>
                            </div>


                            <div className="column col-sm-8 col-sm-offset-3" id="main">
                                <div className="padding">
                                    <div className="full col-sm-9">

                                        <div className="col-sm-12">
                                            <div className="page-header text-muted">
                                                Featured
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>This is Some Awesome Featured Content</h3>
                                                <h4><span className="label label-default">techvisually.com</span></h4><h4>
                                                <small className="text-muted">1 hour ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/men/19.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="page-header text-muted divider">
                                                Top Stories
                                            </div>
                                        </div>




                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>Bootstrap Builders Get Their Own Playground</h3>
                                                <h4><span className="label label-default">bootply.com</span></h4><h4>
                                                <small className="text-muted">3 days ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/women/17.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>

                                        <div className="row divider">
                                            <div className="col-sm-12"><hr></hr></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>How to: Another Fantastical Article</h3>
                                                <h4><span className="label label-default">bootply.com</span></h4><h4>
                                                <small className="text-muted">4 days ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/men/86.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>

                                        <div className="row divider">
                                            <div className="col-sm-12"><hr></hr></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>How to: Another Fantastical Article</h3>
                                                <h4><span className="label label-default">bootply.com</span></h4><h4>
                                                <small className="text-muted">4 days ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/men/86.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>

                                        <div className="row divider">
                                            <div className="col-sm-12"><hr></hr></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>How to: Another Fantastical Article</h3>
                                                <h4><span className="label label-default">bootply.com</span></h4><h4>
                                                <small className="text-muted">4 days ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/men/86.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>

                                        <div className="row divider">
                                            <div className="col-sm-12"><hr></hr></div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-10">
                                                <h3>How to: Another Fantastical Article</h3>
                                                <h4><span className="label label-default">bootply.com</span></h4><h4>
                                                <small className="text-muted">4 days ago • <a href="#" className="text-muted">Read More</a></small>
                                            </h4>
                                            </div>
                                            <div className="col-sm-2">
                                                <a href="#" className="pull-right"><img src="http://api.randomuser.me/portraits/thumb/men/86.jpg" className="img-circle" /></a>
                                            </div>
                                        </div>


                                        <hr></hr>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }

});


module.exports = {
    enter: function() {
        ReactDom.render(<Parameters />, document.getElementById('app'));
        console.log('profile entered');
    },
    exit: function() {
        console.log('profile exited');
    }
};