var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;

var Router = require('../../router.js');

var HomepageLeft = require('./homepageLeft.js');
var HomepageRight = require('./homepageRight.js');
var HowItWorks = require('./howItWorks.js');
var ModalSignUp = require('../signup/modalSignUp.js');
var ModalAddContent = require('../content/modalAddContent.js');
var CommonFooter = require('../_common/commonFooter.js');

var SearchActions = require('../../actions/searchActions.js');
//var SearchStore = require('../../stores/searchStore.js');
var AuthenticationActions = require('../../actions/authenticationActions.js');


var Main = React.createClass({
    //mixins: [Reflux.connect(AuthenticationStore)],
    getInitialState: function () {
        AuthenticationActions.checkAuthentication();
        return {
            openHowItWorks:false,
            searchValue: ''
        }
    },

    openModalAddContent:function(){
        this.refs.modalAddContent.open()
    },

    openModalSignUp:function(){
        this.refs.modalSignUp.open()
    },

    handleClickHowItWorks:function (event) {
        event.preventDefault();
        this.setState({openHowItWorks:true});
    },

    closeHowItWorks:function (event) {
        event.preventDefault();
        this.setState({openHowItWorks:false});
    },

    handleSearch:function(event){
        event.preventDefault();
        SearchActions.searchResults(this.state.searchValue);
        this.setState({searchValue: ''});
    },

    _onChangeSearchValue:function(e){
        this.setState({searchValue: e.target.value})
    },

   render: function () {

        const styles = {
            styleBackground: {backgroundImage: 'url("./images/homepage/homepage-background1.jpg")'}
        };

        var innerButton = <button type="submit" className="btn buttonSearchBar"><b>search</b></button>;

        return (
            <div>
                {
                    this.state.openHowItWorks
                        ?
                        <div className="row container">
                            <br />
                            <br />
                            <div className="row container marginHowItWorks">
                                <HowItWorks />
                            </div>
                            <div className="row container marginHowItWorks">
                                <form onSubmit={this.closeHowItWorks}>
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> close </button>
                                </form>
                            </div>
                        </div>
                        : null
                }
                <div className="row homeBackground" style={styles.styleBackground}>
                    <div className="row homeContainerBackground">
                        <div className="commonOverlay homeOverlayImage"></div>

                        <div className="row homeTopRow">
                            <div className="col-sm-3 homeTopTitle"><h4 className="fontTopTitle">Blog Project</h4></div>
                            <div className="col-sm-1 col-sm-offset-5 homeTopTitle onHoverHomeTitle">
                                <a className="" onClick={this.openModalAddContent}><b>add content</b></a>
                                <ModalAddContent ref="modalAddContent" />
                            </div>
                            <div className="col-sm-1 col-sm-offset-1 homeTopTitle onHoverHomeTitle">
                                <a className="fontTopTitle" onClick={this.openModalSignUp}> sign up </a>
                                <ModalSignUp ref="modalSignUp" />
                            </div>
                            <div className="col-sm-1 homeTopTitle">
                                <h5 className="fontTopTitle">
                                    <a className="linkTitle" href={Router.link('login')}><b>login</b></a>
                                </h5>
                            </div>
                        </div>
                        <div className="container homeMainTitle">
                            <h1 className="fontMainTitle"><b>WELCOME TO THIS COOL WEBSITE</b></h1>
                            <h4 className="fontMainTitle">Share and find useful content that will help you</h4>
                            <br />
                            <div className="buttonMainTitle">
                                <form onSubmit={this.handleClickHowItWorks}>
                                    <button type="submit" className="btn btn-default">how it works</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row homeContainerSearchBar">
                        <div className="commonOverlay homeOverlaySearchBar"></div>
                        <form onSubmit={this.handleSearch} >
                            <Input type="text" placeholder="what are you looking for ?" buttonAfter={innerButton} value={this.state.searchValue} onChange={this._onChangeSearchValue} />
                        </form>
                    </div>
                </div>
                <div className="row commonContainer">
                    <br />
                    <br />
                    <div>
                        <div className="container col-sm-7 col-sm-offset-1">
                            <HomepageLeft></HomepageLeft>
                        </div>
                        <div className="container col-sm-3 col-sm-offset-0.5">
                            <HomepageRight></HomepageRight>
                        </div>
                    </div>
                </div>
                <CommonFooter />
            </div>
        );
    }
});

module.exports = {
    enter: function() {
        ReactDom.render(<Main />, document.getElementById('app'));
        console.log('homepage entered');
    },
    exit: function() {
        console.log('homepage exited');
    }
};


/*
 <h3 className="container homeResultsTitle">LAST SHARED CONTENT</h3>
 <Input type="text" placeholder="what are you looking for ?" buttonAfter={innerButton} value={this.state.searchValue} onChange={this._onChangeSearchValue} />



 */