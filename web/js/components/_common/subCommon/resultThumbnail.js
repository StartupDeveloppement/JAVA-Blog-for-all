var React = require('react');
var Thumbnail = require('react-bootstrap').Thumbnail;
var Router = require('../../../router.js');
import { Link } from 'react-router';


var resultThumbnail = React.createClass({
    render: function () {
        return (

                <Thumbnail className="resultThumbnail" src={this.props.articlePicture} alt="cool article">
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

/*
<Thumbnail className="resultThumbnail" src={this.props.articlePicture} alt="cool article">
    <a className="resultOnHoover">
        <Link to={'/content/'+this.props.articleKey} >
            <h3 className="resultTitle">{this.props.articleTitle}</h3>
        </Link>
    </a>
    <p>{this.props.articleDescription}</p>
    <div className="row divider">
        <div className="col-sm-12"><hr></hr></div>
    </div>
    <div className="row">
        <img className="col-sm-1 img-circle resultImage" src={this.props.profilePicture} alt="profile picture"></img>
        <a className="resultOnHoover"> href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>
            <Link to={'/userProfile/'+ this.props.userEmail +'/main'} >
                <div className="col-sm-2 resultProfileName">{this.props.profileName}</div>
            </Link>
        </a>
    </div>
</Thumbnail>
*/