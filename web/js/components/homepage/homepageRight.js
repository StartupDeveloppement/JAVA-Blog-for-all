var React = require('react');

var HomepageRight = React.createClass({

    render: function () {

        return (
            <div>
                <div className="form-group rightElement commonRadius">
                    <form>
                        <div className="form-group">
                            <h3 className="rightTitle">Discover what's new</h3>
                        </div>
                        <br />
                        <div className="form-group">
                            <button type="submit" className="btn btn-default center-block">check news</button>
                        </div>
                    </form>
                </div>
                <div className="form-group rightElement commonRadius">
                    <form>
                        <div className="form-group rightMarginBottom">
                            <h3 className="rightTitle">Find us on</h3>
                        </div>
                        <div className="form-group">
                            <a href="https://www.facebook.com/ElizabethHurley/">
                                <img className="img-responsive center-block rightLogo" src="./images/homepage/facebook.jpg" alt="facebook" />
                            </a>
                        </div>
                        <div className="form-group">
                            <a href="https://twitter.com/elizabethhurley">
                                <img className="img-responsive center-block rightLogo" src="./images/homepage/twitter.jpg" alt="twitter" />
                            </a>
                        </div>
                    </form>
                </div>
                <div className="form-group rightElement commonRadius">
                    <form>
                        <div className="form-group">
                            <h3 className="rightTitle">Invite your friends</h3>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="type email of your friends" />
                        </div>
                        <button type="submit" className="btn btn-default">invite</button>
                    </form>
                </div>
            </div>
            );
    }
});

module.exports = HomepageRight;