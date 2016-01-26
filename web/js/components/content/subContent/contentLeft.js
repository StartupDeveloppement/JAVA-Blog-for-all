var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');


var ContentLeft = React.createClass({

    render: function () {
        return (
            <div>
                <h1>{this.props.articleTitle}</h1>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-1 resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                    <div className="col-sm-2"><b>{this.props.profileName}</b></div>
                </div>
                <br />
                <div>
                    {this.props.articleText}
                </div>

            </div>
        )
    }

});

module.exports = ContentLeft;