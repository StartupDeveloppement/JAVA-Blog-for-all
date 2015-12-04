var React = require('react');

var Result = React.createClass({
    render: function(){
        return (
                <div className="resultElement commonRadius">
                    <h1 className="resultTitle">{this.props.articleTitle}</h1>
                    <hr className={this.props.articleDivider}></hr>
                    <p className="resultText">
                        {this.props.articleText}
                    </p>
                </div>
        )
    }
});

module.exports = Result;