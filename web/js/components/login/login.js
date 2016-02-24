var React = require('react');
var Reflux = require('reflux');
var CommonFooter = require('../_common/commonFooter.js');
import { Link } from 'react-router';

var AuthenticationActions = require('../../actions/authenticationActions.js');
var AuthenticationStore = require('../../stores/authenticationStore.js');

var Login = React.createClass({
    mixins: [Reflux.connect(AuthenticationStore)],
    getInitialState() {
        return {
            email:'',
            password:''
        };
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
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top commonBoxShadowNavbar">
                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle" >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to='/homepage'>Blog Project</Link>
                        </div>
                    </div>
                </div>
                <div className="loginContainerNavBar">
                    <div className="commonOverlay loginBlur" style={styles.styleBackground}></div>
                    <div className="loginForm">
                        <div className="col-sm-4 col-sm-offset-4 container commonRadius commonForm formProfile loginMargin">
                            <h3>login</h3>
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
                </div>
            </div>
        )
    }
});

module.exports = Login;


/*
<div className="commonContainerNavBar commonHeight commonOverlay">
    <div className="loginBlur"></div>
    <div className="">
        <div className="col-sm-6 col-sm-offset-3 container commonRadius commonForm formProfile loginMargin">
            <h3>login</h3>
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
</div>
 <CommonFooter />
*/
