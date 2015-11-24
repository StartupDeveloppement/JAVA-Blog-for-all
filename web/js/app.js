var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');

var HomepageLeft = require('./components/homepage/homepageLeft.js');
var HomepageRight = require('./components/homepage/homepageRight.js');

var Main = React.createClass({

    getInitialState: function () {
        return {
            email:'',
            password:''
            //res: StoresApp.res
        }
    },

    handleClick:function(event){
        event.preventDefault();
        //add code
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
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand homeAppName" href="#">Blog project</a>
                        </div>
                    </div>
                </nav>
                <div className="row homeBackground" style={styles.styleBackground}>
                    <div className="homeOverlay"></div>
                    <div className="container col-sm-4 col-sm-offset-7 homeSignupForm  homeRadius">
                        <h3>sign up</h3>
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
                <div className="row homeContainerRight">
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

module.exports = Main;

ReactDom.render(<Main />, document.getElementById('app'));