var React = require('react');
import { Link } from 'react-router';

var ContentLeft = React.createClass({

    render: function () {
        return (
            <div className="contentStyle commonRadius">
                <h1>{this.props.articleTitle}</h1>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-0.5 contentProfilePicture" src={this.props.profilePicture} alt="profile picture"></img>
                    <div className="col-sm-2">
                        <div className="resultOnHoover" >
                            <Link to={'/userProfile/'+this.props.userEmail+'/main'}><b>{this.props.profileName}</b></Link>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="">{this.props.articleText}</div>
            </div>
        )
    }

});

module.exports = ContentLeft;


