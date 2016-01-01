var React = require('react');
var Reflux = require('reflux');
var Modal = require('react-bootstrap').Modal;
var Router = require('../../router.js');

var AuthenticationActions = require('../../actions/authenticationActions.js');
var AuthenticationStore = require('../../stores/authenticationStore.js');

var ModalSignUp = React.createClass({
    mixins: [Reflux.connect(AuthenticationStore)],
    getInitialState() {
        return {
            showModal: false,
            email:'',
            password:''
        };
    },

    close() {
        this.setState({ showModal: false });
    },
    open() {
        this.setState({ showModal: true });
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

    render() {
        return (
            <div>
                <h5 className="fontTopTitle" onClick={this.open}> sign up </h5>

                <Modal show={this.state.showModal} onHide={this.close} bsSize="small">
                    <Modal.Header closeButton>
                        <Modal.Title>sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="">
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
                    </Modal.Body>
                    <Modal.Footer>
                        <h5 className="footerModal" onClick=""> already have an account ?  <b> just login</b></h5>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

module.exports = ModalSignUp;


