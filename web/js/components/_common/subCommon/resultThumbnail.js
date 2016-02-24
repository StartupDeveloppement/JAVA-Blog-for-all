var React = require('react');
var Thumbnail = require('react-bootstrap').Thumbnail;
import { Link } from 'react-router';

var resultThumbnail = React.createClass({
    render: function () {
        return (
            <Thumbnail className="resultThumbnail" src={this.props.articlePicture} alt="cool article">
                <Link className="resultOnHoover" to={'/content/'+this.props.articleKey} >
                    <h3 className="resultTitle">{this.props.articleTitle}</h3>
                </Link>
                <p>{this.props.articleDescription}</p>
                <div className="row divider">
                    <div className="col-sm-12"><hr></hr></div>
                </div>
                <div className="row">
                    <img className="col-sm-1 img-circle resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                    <Link className="resultOnHoover" to={'/userProfile/'+ this.props.userEmail +'/main'} >
                        <div className="col-sm-2 resultProfileName">{this.props.profileName}</div>
                    </Link>
                </div>
            </Thumbnail>

        )
    }
});

module.exports = resultThumbnail;

