var React = require('react');
var Reflux = require('reflux');
var Router = require('../../router.js');

var ResultImageGroup = require('../_common/resultImageGroup.js');

/*var UserProfileActions = require('../../actions/userProfileActions.js');
var UserProfileStore = require('../../stores/userProfileStore.js');*/


var UserProfileLeft = React.createClass({
    render: function(){
        console.log("userProfileContent");
        //console.log(this.props.params.sectionName);
        //console.log(this.props.params.id);
        console.log(Router.current().params.sectionName);
        console.log(Router.current().params.id);
        var actualities = [
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'1',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'2',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'3',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'4',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'5',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'6',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'7',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'8',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'9',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'10',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'11',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'12',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'13',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'14',
                articlePicture:'./images/test/starwars.jpg'},
            {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'15',
                articlePicture:'./images/test/starwars.jpg'}
        ];

        return(
            <div>
                <ResultImageGroup articles={actualities} ></ResultImageGroup>
            </div>
        )
    }
});

module.exports = UserProfileLeft;