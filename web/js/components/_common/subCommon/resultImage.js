var React = require('react');
var Image = require('react-bootstrap').Image;
var Col = require('react-bootstrap').Col;
var Router = require('../../../router.js');

var ResultImage = React.createClass({
    render: function(){

        return (
            <div className="resultElement commonRadius">
                <a href={Router.link('content',{id:5})}>
                    <h2 className="resultTitle" >{this.props.articleTitle}</h2>
                </a>
                <hr className={this.props.articleDivider}></hr>
                <p className="resultText">
                    {this.props.articleText}
                </p>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-8 resultImage" src={this.props.profilePicture}
                         alt="profile picture"></img>
                    <div className="col-sm-2"><b>{this.props.profileName}</b></div>
                </div>
            </div>
            )
    }
});

module.exports = ResultImage;

/*
 <Col xs={6} md={4} >
 <Image className="resultImage" src={this.props.profilePicture} alt="profile picture"  rounded />
 </Col>


 */