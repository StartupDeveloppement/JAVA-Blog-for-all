var React = require('react');
var Image = require('react-bootstrap').Image;
var Col = require('react-bootstrap').Col;
var Router = require('../../../router.js');

var ResultImage = React.createClass({
    render: function(){

        return (
            <div className="resultElement commonRadius">
                <h2 className="resultTitle" >
                    <a className="resultTitle" href={Router.link('content',{id:this.props.articleKey})}>
                        {this.props.articleTitle}
                    </a>
                </h2>
                <hr className={this.props.articleDivider}></hr>
                <p className="resultText">
                    {this.props.articleDescription}
                </p>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-8 resultImage" src={this.props.profilePicture}
                         alt="profile picture"></img>
                    <div className="col-sm-2">
                        <a href={Router.link('userProfile',{id:this.props.userEmail})}><b>{this.props.profileName}</b></a>
                    </div>
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