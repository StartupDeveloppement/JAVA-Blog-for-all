var React = require('react');

var HowItWorks = React.createClass({
    render: function () {
        return (
            <div className="row container">
                <div className="col-sm-4 col-md-4">
                    <img className="howItWorksImage" src="./images/homepage/import.jpg" alt="242x200" />
                    <h2>1. </h2><span> Create article or import file <b>(.doc or .pdf)</b></span>
                </div>
                <div className="col-sm-4 col-md-4">
                    <img className="howItWorksImage" src="./images/homepage/find.jpg" alt="242x200" />
                    <h2>2. </h2><span> Find and read cool useful content </span>
                </div>
                <div className="col-sm-4 col-md-4">
                    <img className="howItWorksImage" src="./images/homepage/good-job.jpg" alt="242x200" />
                    <h2>3. </h2><span> Get rewarded <b></b> for your good work</span>
                </div>
            </div>
        )
    }
});

module.exports = HowItWorks;