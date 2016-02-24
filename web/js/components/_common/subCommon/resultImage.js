var React = require('react');
import { Link } from 'react-router';


var ResultImage = React.createClass({
    render: function(){

        return (
            <div className="resultElement commonRadius">
                <div className="row">
                    <div className="col-md-8">
                        <div className="resultTitle resultOnHoover">
                            <Link to={'/content/'+this.props.articleKey} >
                                <h3 className="resultTitle" >{this.props.articleTitle}</h3>
                            </Link>
                        </div>
                        <p className="resultText">
                            {this.props.articleDescription}
                        </p>
                        <div className="row">
                            <img className="col-sm-1 resultImage" src={this.props.profilePicture}
                                 alt="profile picture"></img>
                            <div className="col-sm-2">
                                <div className="resultOnHoover" >
                                    <Link to={'/userProfile/'+ this.props.userEmail +'/main'} >
                                        <span className="resultProfileName">{this.props.profileName}</span>
                                    </Link>
                                </div>
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

