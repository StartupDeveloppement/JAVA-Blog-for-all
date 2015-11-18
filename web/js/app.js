var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');

var DescriptionRight = require('./components/homepage/descriptions/descriptionRight.js');

var Main = React.createClass({

    getInitialState: function () {
        return {
            username:'',
            password:''
            //res: StoresApp.res
        }
    },

    handleClick:function(event){
        event.preventDefault();
        //add code
    },

    _onChangeUsername:function(e){
        this.setState({username: e.target.value});
    },

    _onChangePassword:function(e){
        this.setState({password: e.target.value});
    },

    render: function () {

        const styles = {
            styleContainer: {backgroundColor: 'white', maxWidth:'500px', marginTop:'15%', marginBottom:'10%', paddingBottom:'2%'},
            styleBackground: {backgroundImage: 'url("./images/backgrounds/home-bg1.jpg")', paddingBottom:'6%'}//, backgroundSize:'100%'}
        };
        return (
            <div>
            <div className="row" style={styles.styleBackground}>
                <div className="container">
                    <div className="row">
                        <div className="container col-sm-4 col-sm-offset-7" style={styles.styleContainer}>
                            <h3>sign up</h3>
                            <div className="divider"></div>
                            <form onSubmit={this.handleClick}>
                                <div className="form-group">
                                    <input id="signupUsername" className="form-control" type="text" placeholder="username" value={this.state.username} onChange={this._onChangeUsername}  />
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
            <DescriptionRight></DescriptionRight>
            </div>
            );
    }
});

module.exports = Main;

ReactDom.render(<Main />, document.getElementById('app'));