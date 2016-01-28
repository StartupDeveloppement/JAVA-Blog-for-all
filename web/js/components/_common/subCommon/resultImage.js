var React = require('react');
var Image = require('react-bootstrap').Image;
var Col = require('react-bootstrap').Col;
var Router = require('../../../router.js');

var ResultImage = React.createClass({
    render: function(){

        return (
            <div className="resultElement commonRadius">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="resultTitle" >
                            <a className="resultTitle resultOnHoover" href={Router.link('content',{id:this.props.articleKey})}>
                                {this.props.articleTitle}
                            </a>
                        </h3>
                        <p className="resultText">
                            {this.props.articleDescription}
                        </p>
                        <div className="row">
                            <img className="col-sm-1 resultImage" src={this.props.profilePicture}
                                 alt="profile picture"></img>
                            <div className="col-sm-2">
                                <a className="resultOnHoover" href={Router.link('userProfile',{id:this.props.userEmail})}>{this.props.profileName}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-offset-0.5 col-md-3">
                        <img className="resultArticlePicture" src={this.props.articlePicture} alt="article picture"></img>
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

