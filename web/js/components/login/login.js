var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');

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

    componentDidMount:function(){
        var editor = new MediumEditor('.editable', {
            buttonLabels: 'fontawesome'
        });

        $(function () {
            $('.editable').mediumInsert({
                editor: editor,
                addons: {
                    images: {
                        styles: {
                            slideshow: {
                                label: '<span class="fa fa-play"></span>',
                                added: function ($el) {
                                    $el
                                        .data('cycle-center-vert', true)
                                        .cycle({
                                            slides: 'figure'
                                        });
                                },
                                removed: function ($el) {
                                    $el.cycle('destroy');
                                }
                            }
                        },
                        actions: false
                    }
                }
            });
        });

        var cssLink = document.getElementById('medium-editor-theme');
        document.getElementById('sel-themes').addEventListener('change', function () {
            cssLink.href = this.value + '.css';
        });
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
                <div className="navbar navbar-default navbar-fixed-top">
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
                <div className="commonContainerNavBar">
                    <div className="container">
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
                    <div className="editable">
                        be the best from the l'est
                    </div>
                </div>
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