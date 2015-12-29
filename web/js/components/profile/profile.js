var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonImageCropper = require('../_common/commonImageCropper.js')


var Profile = React.createClass({

    render: function () {

        /*const defaultPicture= './images/profile/default profile picture.jpg';*/
        const defaultPicture= '';

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <br />
                <br />
                <br />
                <br />
                <div data-spy="scroll" data-target="#myProfileScrollspy" data-offset="20">
                <div className="">
                    <div className="row">
                        <nav className="col-sm-offset-0 col-sm-2 sidebar commonRadius" id="myProfileScrollspy">
                            <br />
                            <div className="row">
                                <a className="logo" href="#"><img src="http://api.randomuser.me/portraits/thumb/men/19.jpg" className="img-circle" /></a>
                            </div>
                            <br />
                            <ul className="nav nav-pills nav-stacked">
                                <li><a href="#personalProfile">Personal</a></li>
                                <li><a href="#statusProfile">Status</a></li>
                                <li><a href="#universityProfile">University / Work</a></li>
                                <li><a href="#paypalProfile">Paypal info</a></li>
                            </ul>
                        </nav>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="personalProfile">
                                <h3>Profile</h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" for="namesProfile">Name :</label>
                                    <div className="form-group form-inline col-sm-6" id="namesProfile">
                                        <input className="col-sm-5 col-sm-offset-1 form-control" type="text" placeholder=" firstname"  />
                                        <input className="col-sm-5 form-control" type="text" placeholder=" lastname"  />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" for="usernameProfile">Username :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="usernameProfile" placeholder=" username" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <label className="col-sm-2">profile picture</label>
                                        <CommonImageCropper defaultImage={defaultPicture}/>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" for="emailProfile">E-mail :</label>
                                    <div className="col-sm-6">
                                        <input type="email" className="form-control" id="emailProfile" placeholder=" e-mail" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <p>Try to scroll this page and look at the navigation list while scrolling!</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="statusProfile">
                                <h3>Status</h3>
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
                                <p>Try to scroll this page and look at the navigation list while scrolling!</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="univesityProfile">
                                <h3>University / Work</h3>
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
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="paypalProfile">
                                <h3>Paypal info</h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <div className="form-group form-inline">
                                        <label className="col-sm-2">paypal account</label>
                                        <input className="col-sm-6 col-sm-offset-1 form-control" type="text" placeholder="paypal account"  />
                                    </div>
                                </div>
                                <div>
                                    <p> we will use paypal</p>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="e-mail"  />
                                    </div>
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
        ReactDom.render(<Profile />, document.getElementById('app'));
        console.log('profile entered');
    },
    exit: function() {
        console.log('profile exited');
    }
};