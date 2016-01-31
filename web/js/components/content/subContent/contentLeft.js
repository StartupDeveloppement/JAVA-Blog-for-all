var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');


var ContentLeft = React.createClass({

    render: function () {
        return (
            <div className="contentStyle commonRadius">
                <h1>{this.props.articleTitle}</h1>
                <div className="row">
                    <img className="col-sm-1 col-sm-offset-0.5 contentProfilePicture" src={this.props.profilePicture} alt="profile picture"></img>
                    <div className="col-sm-2">
                        <a className="resultOnHoover" href={Router.link('userProfile',{id:this.props.userEmail,sectionName:'main'})}>
                            <b>{this.props.profileName}</b>
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <div className="">
                    {this.props.articleText}
                </div>

            </div>
        )
    }

});

module.exports = ContentLeft;