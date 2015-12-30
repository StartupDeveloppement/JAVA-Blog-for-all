var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var Router = require('../../router.js');

var AuthenticationActions = require('../../actions/authenticationActions.js');
var AuthenticationStore = require('../../stores/authenticationStore.js');

var HomepageLeft = require('./homepageLeft.js');
var HomepageRight = require('./homepageRight.js');

var Main = React.createClass({
    mixins: [Reflux.connect(AuthenticationStore)],
    getInitialState: function () {
        return {
            email:'',
            password:''
            //res: StoresApp.res
        }
    },

    handleClick:function(event){
        event.preventDefault();
        AuthenticationActions.authenticate(this.state.email,this.state.password);
        this.setState({email: ''});
        this.setState({password: ''});
    },

    _onChangeEmail:function(e){
        this.setState({email: e.target.value});
    },

    _onChangePassword:function(e){
        this.setState({password: e.target.value});
    },

    render: function () {

        const styles = {
            styleBackground: {backgroundImage: 'url("./images/homepage/homepage-background1.jpg")'}
        };

        const innerButton = <Button> Submit </Button>;

        return (
            <div>

                <div className="row homeBackground" style={styles.styleBackground}>
                    <div className="row homeContainerBackground">
                        <div className="commonOverlay homeOverlayImage"></div>

                        <div className="row homeTopRow">
                            <div className="col-sm-3 homeTopTitle"><h4 className="fontTopTitle">Blog Project</h4></div>
                            <div className="col-sm-1 col-sm-offset-7 homeTopTitle">
                                <h5 className="fontTopTitle">
                                    <a href={Router.link('help')}>help</a>
                                </h5>
                            </div>
                            <div className="col-sm-1 homeTopTitle">
                                <h5 className="fontTopTitle">
                                    <a href={Router.link('search')}>login</a>
                                </h5>
                            </div>
                        </div>
                        <div className="container col-sm-4 col-sm-offset-7 homeSignupForm  commonRadius">
                            <h3 className="fontSignup">sign up</h3>
                            <div className="divider"></div>
                            <form onSubmit={this.handleClick}>
                                <div className="form-group">
                                    <input id="signupEmail" className="form-control" type="email" placeholder="e-mail" value={this.state.email} onChange={this._onChangeEmail}  />
                                </div>
                                <div className="form-group">
                                    <input id="signupPassword" className="form-control" type="password" placeholder="password" value={this.state.password} onChange={this._onChangePassword} />
                                </div>
                                <button type="submit" className="btn btn-default">submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="row homeContainerSearchBar">
                        <div className="commonOverlay homeOverlaySearchBar"></div>
                        <form className="" >
                                <Input type="text" buttonAfter={innerButton} />
                        </form>

                    </div>
                </div>
                <div className="row commonContainer">
                    <h3 className="homeMainTitle">LAST SHARED CONTENT</h3>
                    <div>
                        <div className="container col-sm-7 col-sm-offset-1">
                            <HomepageLeft></HomepageLeft>
                        </div>
                        <div className="container col-sm-3 col-sm-offset-0.5">
                            <HomepageRight></HomepageRight>
                        </div>
                    </div>
                </div>
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
 <input type="text" className="form-control" placeholder="look for content" name="q" />
 <div className="input-group-btn">
 <button className="btn btn-default" type="submit"><span>Search</span></button>
 </div>
 */

