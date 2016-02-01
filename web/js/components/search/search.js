var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultThumbnailGroup = require('../_common/resultThumbnailGroup.js');

var SearchResultsAction = require('../../actions/searchActions.js');
var SearchResultsStore = require('../../stores/searchStore.js');


var Search = React.createClass({
        mixins: [Reflux.connect(SearchResultsStore, "store")],
        getInitialState: function (){
            return {
                /*res: SearchResultsStore.searchResults*/
            };
        },

        render: function () {

            var strJSON = JSON.stringify(this.state.store.searchResults);
            var t = JSON.parse(strJSON);
            console.log(t[0]['highRollers']);
            console.log(t[0]['onTheWay']);
            console.log(t[0]['newbies']);


            if ( !this.state.store ) {
                // Note that you can return false it you want nothing to be put in the dom
                // This is also your chance to render a spinner or something...
                return (<div>
                    <CommonNavBar />
                    <div className="commonContainerNavBar">
                        <br />
                        <div className="row thumbnailCategory">
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">HIGH ROLLERS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">ON THE WAYS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">NEWBIES</h4>
                            </div>
                        </div>
                        <br />
                        <img src="./images/homepage/loading.gif" alt="loading" />
                    </div>
                    </div>)
            }

            return (
                <div>
                    <CommonNavBar />
                    <div className="commonContainerNavBar">
                        <br />
                        <div className="row thumbnailCategory">
                            <div className="col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">HIGH ROLLERS</h4>
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">ON THE WAYS</h4>
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">NEWBIES</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row marginResultThumbnail">
                            <div className="col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={t[0]['highRollers']} />
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={t[0]['onTheWay']} />
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={t[0]['newbies']} />
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <div className="rightElement commonRadius marginPromotion">
                                    <form>
                                        <div className="form-group">
                                            <h3 className="rightTitle">Invite your friends</h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="type email of your friends" />
                                        </div>
                                        <button type="submit" className="btn btn-default">invite</button>
                                    </form>
                                </div>
                                <div className="rightElement commonRadius marginPromotion">
                                    <form>
                                        <div className="form-group">
                                            <h3 className="rightTitle">Invite your friends</h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="type email of your friends" />
                                        </div>
                                        <button type="submit" className="btn btn-default">invite</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
});

module.exports = {
    enter: function() {
        ReactDom.render(<Search />, document.getElementById('app'));
        console.log('search entered');
    },
    exit: function() {
        console.log('search exited');
    }
};