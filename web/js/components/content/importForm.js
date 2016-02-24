var React = require('react');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonFooter = require('../_common/commonFooter.js');
var CommonImageCropper = require('../_common/commonImageCropper.js');


var ImportForm = React.createClass({

    getInitialState() {

        return {
            title:'',
            section:''
        };
    },

    handleClick:function(event){
        event.preventDefault();
        //AuthenticationActions.authenticate(this.state.email,this.state.password);
    },
    _onChangeTitle:function(e){
        this.setState({title: e.target.value});
    },
    _onChangeSection:function(e){
        this.setState({section: e.target.value});
    },


    render: function () {

        var defaultContentPicture = '';

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar commonHeight">
                    <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile importMargin">
                        <form onSubmit={this.handleClick}>
                            <h3 className="titleProfile"> Import content </h3>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row form-group">
                                <label className="control-label col-sm-3" htmlFor="importTitle">Title : (mandatory)</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control input-sm" id="importTitle" placeholder=" title" value={this.state.title} onChange={this._onChangeTitle} />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row form-group">
                                <label className="col-sm-3">content image: a picture increases visibility ;-)</label>
                                <div className="col-sm-9">
                                    <CommonImageCropper defaultImage={defaultContentPicture}/>
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row form-group">
                                <label className="control-label col-sm-3" htmlFor="sectionImport">Choose a section :</label>
                                <div className="col-sm-6">
                                    <select className="form-control input-sm" id="sectionImport" value={this.state.section} onChange={this._onChangeSection} >
                                        <option>Main</option>
                                        <option>user custom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row form-group">
                                <label className="control-label col-sm-3" htmlFor="importFrom">import from</label>
                                <div className="col-sm-6">
                                    <input type="file" className="form-control input-sm" id="importFrom"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary btn-sm pull-right"> import </button>
                            </div>
                        </form>
                    </div>
                </div>
                <CommonFooter />
            </div>
        )
    }
});

module.exports = ImportForm;
