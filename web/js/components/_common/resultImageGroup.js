var React = require('react');
var ResultImage = require('./subCommon/resultImage.js');


var ResultImageGroup = React.createClass({
    render: function(){

        if ( !this.props.articles ) {
            return (
                <div>
                    <img src="./images/homepage/loading.gif" alt="loading" />
                </div>
            )
        }
        return (
            <div>
                {this.props.articles.map(function (article){
                    return (
                        <ResultImage
                            articleTitle={article.articleTitle}
                            articleDivider={article.articleDivider}
                            articleText={article.articleText}
                            profilePicture={article.profilePicture}
                            profileName={article.profileName}
                            key={article.articleKey} />
                    )
                })
                }
            </div>
        )
    }
});

module.exports = ResultImageGroup;