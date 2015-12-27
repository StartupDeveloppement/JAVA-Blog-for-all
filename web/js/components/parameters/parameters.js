var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');


var Parameters = React.createClass({

    render: function () {
        return (
            <div className="commonContainer">
                <CommonNavBar />
                <br />
                <br />
                <br />
                <br />
                <div className="row container">
                    <div className="col-sm-2 sidebar" >
                        <br />
                        <h3>Parameters</h3>
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
        ReactDom.render(<Parameters />, document.getElementById('app'));
        console.log('profile entered');
    },
    exit: function() {
        console.log('profile exited');
    }
};