var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonImageCropper = require('../_common/commonImageCropper.js');


var Profile = React.createClass({

    render: function () {

        /*const defaultPicture= './images/profile/default profile picture.jpg';*/
        const defaultPicture= '';

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar">
                <br />
                <div data-spy="scroll" data-target="#myProfileScrollspy" data-offset="20">
                    <div className="row">
                        <nav className="col-sm-offset-0 col-sm-2 sidebar commonRadius" id="myProfileScrollspy">
                            <br />
                            <div className="row">
                                <a className="logo" href="#"><img src="http://api.randomuser.me/portraits/thumb/men/19.jpg" className="img-circle" /></a>
                            </div>
                            <br />
                            <ul className="nav nav-pills nav-stacked">
                                <li><a className="commonColorWhite" href="#personalProfile">Personal</a></li>
                                <li><a className="commonColorWhite" href="#statusProfile">Status</a></li>
                                <li><a className="commonColorWhite" href="#universityProfile">University / Work</a></li>
                                <li><a className="commonColorWhite" href="#paypalProfile">Paypal info</a></li>
                            </ul>
                        </nav>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="personalProfile">
                                <h3 className="titleProfile">Profile</h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-2" htmlFor="namesProfile">Name :</label>
                                    <div className="form-group form-inline col-sm-9" id="namesProfile">
                                        <input className="col-sm-5 col-sm-offset-1 form-control input-sm" type="text" placeholder=" firstname"  />
                                        <input className="col-sm-5 form-control input-sm" type="text" placeholder=" lastname"  />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="usernameProfile">Username :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="usernameProfile" placeholder=" username" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" >Gender :</label>
                                    <div className="col-sm-6">
                                        <label className="radio-inline"><input type="radio" name="genderProfile" />female</label>
                                        <label className="radio-inline"><input type="radio" name="genderProfile" />male</label>
                                        <label className="radio-inline"><input type="radio" name="genderProfile" />other</label>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="col-sm-3">profile picture</label>
                                    <div className="col-sm-9">
                                        <CommonImageCropper defaultImage={defaultPicture}/>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="aboutYouProfile">About you :</label>
                                    <div className="col-sm-6">
                                        <textarea className="form-control" rows="5" id="aboutYouProfile" placeholder="tell us more about you"/>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="statusProfile">
                                <h3 className="titleProfile">Status</h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="statusProfile">Status :</label>
                                    <div className="col-sm-6">
                                        <select className="form-control input-sm" id="statusProfile">
                                            <option>Open to projects</option>
                                            <option>Studying peacefully</option>
                                            <option>Working on my own</option>
                                            <option>Got cool project ideas</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-3">
                                        <img className="col-sm-4 img-responsive center-block socialNetworkLogo" src="../images/profile/facebook-logo.jpg" alt="facebook" />
                                        <label className="control-label col-sm-offset-1 col-sm-7" htmlFor="facebookProfile">Facebook page :</label>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="facebookProfile" placeholder=" facebook page" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-3">
                                        <img className="col-sm-4 img-responsive center-block socialNetworkLogo" src="../../images/profile/twitter-logo.jpg" alt="twitter" />
                                        <label className="control-label col-sm-offset-1 col-sm-7" htmlFor="twitterProfile">Twitter page :</label>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="twitterProfile" placeholder=" twitter page" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-sm-3">
                                        <img className="col-sm-4 img-responsive center-block socialNetworkLogo" src="../../../images/profile/pinterest-logo.jpg" alt="pinterest" />
                                        <label className="control-label col-sm-offset-1 col-sm-7" htmlFor="pinterestProfile">Pinterest page :</label>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="pinterestProfile" placeholder=" pinterest page" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="univesityProfile">
                                <h3 className="titleProfile">University / Work</h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="universityProfile">University :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="universityProfile" placeholder=" last university attended or one you are proud of" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="universityCityProfile">University's city :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="universityCityProfile" placeholder=" city of your university" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="workProfile">Work :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="workProfile" placeholder=" last job or one you are proud of" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="workCityProfile">Work's city :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="workCityProfile" placeholder=" city of your work" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <form>
                                <div id="paypalProfile">
                                    <h3 className="titleProfile">Paypal info</h3>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="control-label col-sm-3" htmlFor="paypalProfile">Paypal account :</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control input-sm" id="paypalProfile" placeholder=" paypal account" />
                                        </div>
                                    </div>
                                    <div className="col-sm-offset-3">
                                        <p>copy and paste here the generated code to implement your profile</p>
                                        <p> we hide your paypal generated code for confidential reason</p>
                                    </div>
                                    <div className="row divider">
                                        <div className="col-sm-12"><hr></hr></div>
                                    </div>
                                    <div className="row">
                                        <button type="submit" className="btn btn-primary btn-sm pull-right"> Save paypal info </button>
                                    </div>
                                </div>
                            </form>
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