var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonImageCropper = require('../_common/commonImageCropper.js');


var CreateForm = React.createClass({

    getInitialState() {
        return {
            title:'',
            section:''
        };
    },

    handleClick:function(event){
        event.preventDefault();
        //AuthenticationActions.authenticate(this.state.email,this.state.password);
        Router.transitionTo('createContent');
    },
    _onChangeTitle:function(e){
        this.setState({title: e.target.value});
    },
    _onChangeSection:function(e){
        this.setState({section: e.target.value});
    },

    render: function () {

        /*const defaultContentPicture= './images/profile/default profile picture.jpg';*/
        const defaultContentPicture= '';

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <form onSubmit={this.handleClick}>
                        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile">
                            <div>
                                <h3 className="titleProfile"> Create new content </h3>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" for="contentTitle">Title : (mandatory)</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control input-sm" id="contentTitle" placeholder=" title" value={this.state.title} onChange={this._onChangeTitle} />
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="col-sm-3">content image (a picture increases visibility ;-)</label>
                                    <div className="col-sm-9">
                                        <CommonImageCropper defaultImage={defaultContentPicture}/>
                                    </div>
                                </div>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row form-group">
                                    <label className="control-label col-sm-3" for="sectionContent">Choose a section :</label>
                                    <div className="col-sm-6">
                                        <select className="form-control input-sm" id="sectionContent" value={this.state.section} onChange={this._onChangeSection} >
                                            <option>Main</option>
                                            <option>user custom</option>
                                        </select>
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
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = CreateForm;