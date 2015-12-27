var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var ResultImageGroup = require('../_common/resultImageGroup.js');


var ResultsAction = require('../../actions/resultsActions.js');
var ResultsStore = require('../../stores/resultsStore.js');

var HomepageLeft = React.createClass({
    mixins: [Reflux.connect(ResultsStore, "results")],
    getInitialState: function () {
        return {
            results: ResultsStore.results
        }
    },
    render: function () {

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

        return (

            <div>
                <ResultImageGroup articles={actualities} ></ResultImageGroup>
            </div>


        );
    }
});

module.exports = HomepageLeft;

/*<div>
 <ResultImageGroup articles={this.state.results} ></ResultImageGroup>
 </div>*/