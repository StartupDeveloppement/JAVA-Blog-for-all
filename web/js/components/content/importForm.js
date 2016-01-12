var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');


var ImportForm = React.createClass({


    render: function () {

        const styles = {
            styleDeactivateAccount: {color: 'blue'}
        };


        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <br />
                    <form onSubmit={this.handleClick}>
                        <div>
                            <h3 className="titleProfile"> Import content </h3>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row form-group">
                                <label className="control-label col-sm-3" for="importFrom">import from</label>
                                <div className="col-sm-6">
                                    <input type="file" className="form-control input-sm" id="importFrom"  />
                                </div>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary btn-sm pull-right"> Save all changes </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = ImportForm;
