var React = require('react');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Thumbnail = require('react-bootstrap').Thumbnail;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;


var resultThumbnail = React.createClass({
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <a href="https://www.youtube.com/watch?v=tLHVEmCro2A">
                            <Thumbnail className="resultThumbnail" src={this.props.articlePicture} alt="cool article">
                                <h3>{this.props.articleTitle}</h3>
                                <p>{this.props.articleDescription}</p>
                                <div className="row divider">
                                    <div className="col-sm-12"><hr></hr></div>
                                </div>
                                <div className="row">
                                    <img className="col-sm-1 img-circle resultImage" src={this.props.profilePicture} alt="profile picture"></img>
                                    <div className="col-sm-2"><b>{this.props.profileName}</b></div>
                                </div>
                            </Thumbnail>
                        </a>
                    </Col>
                </Row>
            </Grid>
        )
    }
});

module.exports = resultThumbnail;