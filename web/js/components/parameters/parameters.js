var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');


var Parameters = React.createClass({


    render: function () {

        const styles = {
            styleDeactivateAccount: {color: 'blue'}
        };


        return (
            <div className="commonContainer">
                <CommonNavBar />
                <br />
                <br />
                <br />
                <br />
                <div data-spy="scroll" data-target="#myParametersScrollspy" data-offset="20">
                    <div className="">
                        <div className="row">
                            <nav className="col-sm-offset-0 col-sm-2 sidebar commonRadius" id="myParametersScrollspy">
                                <br />
                                <div className="row">
                                    <h2>Parameters</h2>
                                </div>
                                <br />
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#accountParameters">Account</a></li>
                                    <li><a href="#passwordParameters">Password</a></li>
                                    <li><a href="#notificationsParameters">Notifications</a></li>
                                </ul>
                            </nav>

                            <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                                <div id="accountParameters">
                                    <h3 className="titleProfile">Account</h3>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" for="languageParameters">Language :</label>
                                        <div className="col-sm-6">
                                            <select className="form-control input-sm" id="languageParameters">
                                                <option>English</option>
                                                <option>Français</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" for="countryParameters">Language :</label>
                                        <div className="col-sm-6">
                                            <select className="form-control input-sm" id="countryParameters">
                                                <option>United Kingdom</option>
                                                <option>France</option>
                                                <option>Italy</option>
                                                <option>Mali</option>
                                                <option>Senegal</option>
                                                <option>United State</option>
                                                <option>Japan</option>
                                                <option>China</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-sm-6">
                                           <a href="" style={styles.styleDeactivateAccount}>deactivate my accounnt</a>
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row">
                                        <button type="button" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                                <div id="passwordParameters">
                                    <h3 className="titleProfile">Password</h3>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" for="oldPasswordParameters">Old password :</label>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control input-sm" id="oldPasswordParameters" placeholder=" old password" />
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" for="newPasswordParameters">New password :</label>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control input-sm" id="newPasswordParameters" placeholder=" new password" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" for="newPasswordParameters2">New password :</label>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control input-sm" id="newPasswordParameters2" placeholder=" confirm new password" />
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row">
                                        <button type="button" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                                <div id="notificationsParameters">
                                    <h3 className="titleProfile">Notifications</h3>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" >Send me an e-mail</label>
                                        <div className="col-sm-6">
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="emailUserContent" />when someone like one of my content</label>
                                            </div>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="emailUserFollow" />when someone follow me</label>
                                            </div>
                                            <div className="checkbox">
                                                <label><input type="checkbox" value="emailUserMessages" />when someone send me a message</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row">
                                        <button type="button" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
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
        console.log('parameters entered');
    },
    exit: function() {
        console.log('parameters exited');
    }
};