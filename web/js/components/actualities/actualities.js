var React = require('react');

var ActualitiesLeft = require('./actualitiesLeft.js');
var ActualitiesRight = require('./actualitiesRight.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var CommonFooter = require('../_common/commonFooter.js');


var Actualities = React.createClass({

    render: function(){
        return (
            <div>
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <div className="row">
                        <h4 className="commonMainTitle">LAST SHARED OF MY CONTACTS</h4>
                        <div>
                            <div className="container col-sm-7 col-sm-offset-1">
                                <ActualitiesLeft></ActualitiesLeft>
                            </div>
                            <div className="container col-sm-3 col-sm-offset-0.5">
                                <ActualitiesRight></ActualitiesRight>
                            </div>
                        </div>
                    </div>
                </div>
                <CommonFooter />
            </div>
        )
    }
});

module.exports = Actualities;

