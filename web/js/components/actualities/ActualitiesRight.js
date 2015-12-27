var React = require('react');

var ActualitiesRight = React.createClass({
    render: function(){
        return (
            <div>
                <div className="form-group rightElement homeRadius">
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
            </div>
        )
    }
});

module.exports = ActualitiesRight;