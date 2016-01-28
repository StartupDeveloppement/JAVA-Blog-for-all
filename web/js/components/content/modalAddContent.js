var React = require('react');
var Reflux = require('reflux');
var Modal = require('react-bootstrap').Modal;
var Router = require('../../router.js');
var base64 = require('base-64');
var utf8 = require('utf8');


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getEmail() {
    var s=getCookie("s");
    if (s!="") {
        var bytes = base64.decode(s);
        var text = utf8.decode(bytes);
        var email = text.split(":")[0];
        return email;
    }
    return "";
}


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

    goToImportFormPage:function(event){
        event.preventDefault();
        if (getEmail()!="")
            Router.transitionTo('importForm');
        else
            Router.transitionTo('login');
    },

    goToCreateFormPage:function(event){
        event.preventDefault();
        if (getEmail()!="")
            Router.transitionTo('createForm');
        else
            Router.transitionTo('login');
    },

    render() {
        return (

                <Modal show={this.state.showModal} onHide={this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>add content</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-1">
                                <form onSubmit={this.goToImportFormPage}>
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> import content </button>
                                </form>
                            </div>
                            <div className="col-sm-4 col-sm-offset-1">
                                <form onSubmit={this.goToCreateFormPage}>
                                    <button type="submit" className="btn btn-primary btn-sm pull-right"> create content </button>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <h5 className="footerModal" onClick=""> learn more </h5>
                    </Modal.Footer>
                </Modal>

        );
    }
});

module.exports = ModalAddContent;

/*<a className="fontModalAddContent" onClick={this.open}> <b>add content</b> </a>*/


/*<Modal.Body>
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
 </Modal.Body>*/