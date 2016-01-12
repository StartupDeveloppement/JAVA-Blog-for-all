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
                            <div className=".editable">
                                Start writing here...

                                By simply underlining text, you will have access to styling...

                                Going to a next line allow you to import picture or add video link...
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary btn-sm pull-right"> Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = ImportForm;
