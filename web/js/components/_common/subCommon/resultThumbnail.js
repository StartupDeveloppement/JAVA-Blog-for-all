var React = require('react');
var Thumbnail = require('react-bootstrap').Thumbnail;
var Router = require('../../../router.js');


var resultThumbnail = React.createClass({
    render: function () {
        return (

                <Thumbnail src={this.props.articlePicture} alt="cool article">
                    <a className="resultOnHoover" href={Router.link('content',{id:this.props.articleKey})}>
                        <h3 className="resultTitle">{this.props.articleTitle}</h3>
                    </a>
                    <p>{this.props.articleDescription}</p>
                    <div className="row divider">
                        <div className="col-sm-12"><hr></hr></div>
                    </div>
                    <div className="row">
                        <img className="col-sm-1 img-circle resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                        <a className="resultOnHoover" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>
                            <div className="col-sm-2 resultProfileName">{this.props.profileName}</div>
                        </a>
                    </div>
                </Thumbnail>
        )
    }
});

module.exports = resultThumbnail;