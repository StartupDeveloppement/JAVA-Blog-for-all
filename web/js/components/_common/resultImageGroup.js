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
                            articleDescription={article.articleDescription}
                            profilePicture={article.profilePicture}
                            profileName={article.profileName}
                            articleKey={article.articleKey}
                            userEmail={article.userEmail}
                            key={article.articleKey} />
                    )
                })
                }
            </div>
        )
    }
});

module.exports = ResultImageGroup;