var React = require('react');
var Reflux = require('reflux');
var Modal = require('react-bootstrap').Modal;
var Router = require('../../router.js');

var ModalAddContent = React.createClass({
    getInitialState() {
        return {
            showModal: false
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
    },

    render() {
        return (
            <div>
                <h5 className="fontTopTitle" onClick={this.open}> add content </h5>

                <Modal show={this.state.showModal} onHide={this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>add content</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-1">
                                <form onSubmit={this.handleClick}>
                                    <img src="./images/content/import.jpg" onclick={Router.transitionTo('importForm')}/>
                                </form>
                            </div>
                            <div className="col-sm-4 col-sm-offset-1">
                                <form onSubmit={this.handleClick}>
                                    <img src="./images/content/create.jpg" onclick={Router.transitionTo('createForm')}/>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <h5 className="footerModal" onClick=""> learn more </h5>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

module.exports = ModalAddContent;