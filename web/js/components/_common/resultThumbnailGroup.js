var React = require('react');
var ResultThumbnail = require('./subCommon/resultThumbnail.js');

var ResultThumbnailGroup = React.createClass({
        render: function () {
            return (
                <div>
                    {this.props.articles.map(function(article){
                        return (
                        <ResultThumbnail
                            articlePicture={article.articlePicture}
                            articleTitle={article.articleTitle}
                            articleDescription={article.articleDescription}
                            profilePicture={article.profilePicture}
                            profileName={article.profileName}
                            userEmail={article.userEmail}
                            articleKey={article.articleKey}
                            key={article.articleKey} />
                        )
                    })
                    }
                </div>
            )
        }
});

module.exports = ResultThumbnailGroup;