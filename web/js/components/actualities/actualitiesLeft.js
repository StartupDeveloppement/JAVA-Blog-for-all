var React = require('react');
var ResultImageGroup = require('../_common/resultImageGroup.js');

var ActualitiesLeft = React.createClass({
    render: function(){

        var actualities = [
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
             articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
             profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'1'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'2'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'3'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'4'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'5'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'6'}
        ];

        return(
            <div>
                <ResultImageGroup articles={actualities} ></ResultImageGroup>
            </div>
        )
    }
});

module.exports = ActualitiesLeft;