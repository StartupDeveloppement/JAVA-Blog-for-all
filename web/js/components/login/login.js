var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonFooter = require('../_common/commonFooter.js');

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
                            <a href={Router.link('homepage')} className="navbar-brand">Blog Project</a>
                        </div>
                    </div>
                </div>
                <div className="commonContainerNavBar commonHeight">
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
            </div>
        )
    }
});

module.exports = {
    enter: function() {
        ReactDom.render(<Login />, document.getElementById('app'));
        console.log('login entered');
    },
    exit: function() {
        console.log('login exited');
    }
};