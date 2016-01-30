var React = require('react');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Thumbnail = require('react-bootstrap').Thumbnail;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;
var Router = require('../../../router.js');


var resultThumbnail = React.createClass({
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail className="resultThumbnail" src={this.props.articlePicture} alt="cool article">
                            <a className="resultOnHoover" href={Router.link('content',{id:this.props.articleKey})}>
                                <h3>{this.props.articleTitle}</h3>
                            </a>
                            <p>{this.props.articleDescription}</p>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <img className="col-sm-1 img-circle resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                                <a className="resultOnHoover" href={Router.link('userProfile',{id:this.props.userEmail})}>
                                    <div className="col-sm-2">{this.props.profileName}</div>
                                </a>
                            </div>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = resultThumbnail;