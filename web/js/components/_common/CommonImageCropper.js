import React from "react";
import ReactDom from "react-dom";
var AvatarCropper = require("react-avatar-cropper");

var CommonImageCropper = React.createClass({
    getInitialState: function() {
        return {
            cropperOpen: false,
            img: null,
            croppedImg: ""
        };
    },
    handleFileChange: function(dataURI) {
        this.setState({
            img: dataURI,
            croppedImg: this.state.croppedImg,
            cropperOpen: true
        });
    },
    handleCrop: function(dataURI) {
        this.setState({
            cropperOpen: false,
            img: null,
            croppedImg: dataURI
        });
    },
    handleRequestHide: function() {
        this.setState({
            cropperOpen: false
        });
    },
    render () {
        var style = {
            'width': '100px',
            'height': '100px',

        };
        return (
            <div>
                <div className="avatar-photo">
                    <FileUpload handleFileChange={this.handleFileChange} />
                    <br />
                    {this.state.croppedImg == "" ? <img src={this.props.defaultImage} style={style} /> : <img src={this.state.croppedImg} style={style} />}
                </div>
                {this.state.cropperOpen &&
                <AvatarCropper
                    onRequestHide={this.handleRequestHide}
                    cropperOpen={this.state.cropperOpen}
                    onCrop={this.handleCrop}
                    image={this.state.img}
                    width={300}
                    height={300}
                />
                }
            </div>
        );
    }
});

var FileUpload = React.createClass({

    handleFile: function(e) {
        var reader = new FileReader();
        var file = e.target.files[0];

        if (!file) return;

        reader.onload = function(img) {
            ReactDom.findDOMNode(this.refs.uploadImageToCrop).value = '';
            this.props.handleFileChange(img.target.result);
        }.bind(this);
        reader.readAsDataURL(file);
    },

    render: function() {
        return (
            <input ref="uploadImageToCrop" type="file" accept="image/*" onChange={this.handleFile} />
        );
    }
});


module.exports = CommonImageCropper;