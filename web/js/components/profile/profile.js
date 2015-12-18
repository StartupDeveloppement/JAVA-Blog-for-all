var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');


var Profile = React.createClass({

    render: function () {
        return (
            <div className="commonContainer">
                <nav role="navigation" className="navbar navbar-default navbar-fixed-top">
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
                            <form role="search" className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input type="text" placeholder="Search" className="form-control" />
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
                    <div className="row commonUnderlineNavbar">
                    </div>
                </nav>
                <br />
                <br />
                <br />
                <br />
                    <div className="row container">
                        <div className="col-sm-2 sidebar" >
                            <br />
                            <div className="row">
                                <a class="logo" href="#"><img src="http://api.randomuser.me/portraits/thumb/men/19.jpg" className="img-circle" /></a>
                            </div>
                            <br />
                            <div className="row">
                                <ul className="nav">
                                    <li className="active"><a href="#">
                                        <span className="commonSidebarLink">Personal</span></a>
                                    </li>
                                    <li><a href="#">
                                        <span className="commonSidebarLink">Status</span></a>
                                    </li>
                                    <li><a href="#">
                                        <span className="commonSidebarLink">University</span></a>
                                    </li>
                                    <li><a href="#">
                                        <span className="commonSidebarLink">Work</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm">
                            <h3>Profile</h3>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group form-inline">
                                    <label className="col-sm-2" >name</label>
                                    <input className="col-sm-3 col-sm-offset-1 form-control" type="text" placeholder="firstname"  />
                                    <input className="col-sm-3 form-control" type="text" placeholder="lastname"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group form-inline">
                                    <label className="col-sm-2">user name</label>
                                    <input className="col-sm-6 col-sm-offset-1 form-control" type="text" placeholder="firstname"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-11"><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="e-mail"  />
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
        ReactDom.render(<Profile />, document.getElementById('app'));
        console.log('profile entered');
    },
    exit: function() {
        console.log('profile exited');
    }
};