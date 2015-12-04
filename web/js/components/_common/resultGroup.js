var React = require('react');
var Result = require('./subCommon/result.js');


var ResultGroup = React.createClass({
    render: function(){
        return (
            <div>
                {this.props.articles.map(function (article){
                    return (
                        <Result articleTitle={article.articleTitle} articleDivider={article.articleDivider} articleText={article.articleText} key={article.articleKey} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = ResultGroup;