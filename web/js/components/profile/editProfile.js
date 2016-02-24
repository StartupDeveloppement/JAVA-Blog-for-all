var React = require('react');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonImageCropper = require('../_common/commonImageCropper.js');

var EditProfile = React.createClass({

    render: function () {

        const defaultPicture= './images/profile/default profile picture.jpg';
        /*const defaultPicture= '';*/

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <br />
                    <form>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div id="editProfile">
                                <h3 className="titleProfile">Edit profile</h3>
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
                                    <label className="col-sm-3">profile banner</label>
                                    <div className="col-sm-9">
                                        <CommonImageCropper defaultImage={defaultPicture}/>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" htmlFor="addSection">Add a section :</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="addSection" placeholder=" add a section" />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> Save </button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        );
    }
});

module.exports = EditProfile;
