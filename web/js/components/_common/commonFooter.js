var React = require('react');


var CommonFooter = React.createClass({
    render:function () {
        return (
            <div className="commonFooterStyle">
                <div className="row container">
                    <div className="col-sm-2">
                        <a className="commonColorWhite resultOnHoover" href="">About us</a>
                    </div>
                    <div className="col-sm-2">
                        <a className="commonColorWhite resultOnHoover" href="">Legal mentions</a>
                    </div>
                    <div className="col-sm-2">
                        <a className="commonColorWhite resultOnHoover" href="https://www.facebook.com/ElizabethHurley/">Facebook</a>
                    </div>
                    <div className="col-sm-2">
                        <a className="commonColorWhite resultOnHoover" href="https://twitter.com/elizabethhurley">Twitter</a>
                    </div>
                </div>
                <br />
                <br />
                <div className="row container">
                    <div>
                        <p>We design this website thanks to a great team of passionate people, willing to bring to the world a very helpful and cool tool.</p>
                        <p>All rights reserved to BlogProject © 2016</p>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = CommonFooter;