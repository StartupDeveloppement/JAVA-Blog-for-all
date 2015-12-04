var React = require('react');

var ResultImage = React.createClass({
    render: function(){
        return (
            <div className="resultElement commonRadius">
                <h1 className="resultTitle">{this.props.articleTitle}</h1>
                <hr className={this.props.articleDivider}></hr>
                <p className="resultText">
                    {this.props.articleText}
                </p>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-8 img-responsive resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                    <div className="col-sm-2"><b>{this.props.profileName}</b></div>
                </div>
            </div>
        )
    }
});

module.exports = ResultImage;