var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var ResultImageGroup = require('../_common/resultImageGroup.js');

var ResultsAction = require('../../actions/resultsActions.js');
var ResultsStore = require('../../stores/resultsStore.js');


var HomepageLeft = React.createClass({
    mixins: [Reflux.connect(ResultsStore, "store")],
    getInitialState: function () {
        ResultsAction.getLastArticles();
    },
    render: function () {
        if ( !this.state.store ) {
            // Note that you can return false it you want nothing to be put in the dom
            // This is also your chance to render a spinner or something...
            return <div><img src="./images/homepage/loading.gif" alt="loading" /></div>
        }

        return (
            <div>
                <ResultImageGroup articles={this.state.store} ></ResultImageGroup>
            </div>
        );
    }
});

module.exports = HomepageLeft;



/*
<div>
 <ResultImageGroup articles={this.state.results} ></ResultImageGroup>
 </div>
 */

/*
console.log("actualities " + this.state.contents);
 console.log("ResultStore state " + this.state.store);
 console.log(this.state.store);
 console.log(this.state.contents);

 //var contents = this.state.store;
 var actualities = [
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'1'},
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'2'},
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'3'},
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'4'},
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'5'},
 {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
 articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
 profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'6'}
 ];
 */