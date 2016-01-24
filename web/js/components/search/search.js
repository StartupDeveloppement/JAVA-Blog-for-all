var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultThumbnailGroup = require('../_common/resultThumbnailGroup.js');

var SearchResultsAction = require('../../actions/searchActions.js');
var SearchResultsStore = require('../../stores/searchStore.js');


var Search = React.createClass({
        mixins: [Reflux.connect(SearchResultsStore, "store")],
        getInitialState: function (){
            return {
                /*res: SearchResultsStore.searchResults*/
            };
        },

        render: function () {
            console.log(this.state.store);

            var articlesMedium = [
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum autem tur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'1',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/a/a1/The_Amazing_Adventures_of_Spider-Man_at_Universal_Studios_Japan_1.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum autem tur, peregrinum invitari conveniet, et si digesto plene autem tur, peregrinum invitari conveniet, et si digesto pleneautem sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'2',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem autem tur, peregrinum invitari conveniet, et si digesto plene commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'3',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/a/a1/The_Amazing_Adventures_of_Spider-Man_at_Universal_Studios_Japan_1.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum  longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'4',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'5',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis vel autem tur, peregrinum invitari conveniet, et si digesto pleneautem tur, peregrinum invitari conveniet, et si digesto pleneautem tur, peregrinum invitari conveniet, et si digesto plenedistributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'6',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Avengers_Age_of_Ultron_SDCC_2014_panel.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'7',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'}
            ];

            var articlesNewbies = [
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum autem autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'1',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Avengers_Age_of_Ultron_SDCC_2014_panel.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum autem autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'2',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum odis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'3',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Avengers_Age_of_Ultron_SDCC_2014_panel.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'4',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum lata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'5',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis vel distributio sollemnium autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'6',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/e/eb/Avengers_Age_of_Ultron_SDCC_2014_panel.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'7',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'}
            ];

            if ( !this.state.store ) {
                // Note that you can return false it you want nothing to be put in the dom
                // This is also your chance to render a spinner or something...
                return (<div>
                    <CommonNavBar />
                    <div className="commonContainerNavBar">
                        <br />
                        <div className="row thumbnailCategory">
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">HIGH ROLLERS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">ON THE WAYS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">NEWBIES</h4>
                            </div>
                        </div>
                        <br />
                        <img src="./images/homepage/loading.gif" alt="loading" />
                    </div>
                    </div>)
            }

            return (
                <div>
                    <CommonNavBar />
                    <div className="commonContainerNavBar">
                        <br />
                        <div className="row thumbnailCategory">
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">HIGH ROLLERS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">ON THE WAYS</h4>
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <h4 className="textThumbnailCategory">NEWBIES</h4>
                            </div>
                        </div>
                        <br />
                        <div className="row marginResultThumbnail">
                            <div className="container col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={this.state.store.searchResults} />
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={articlesMedium} />
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <ResultThumbnailGroup articles={articlesNewbies} />
                            </div>
                            <div className="container col-sm-3 col-md-3">
                                <div className="rightElement commonRadius marginPromotion">
                                    <form>
                                        <div className="form-group">
                                            <h3 className="rightTitle">Invite your friends</h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="type email of your friends" />
                                        </div>
                                        <button type="submit" className="btn btn-default">invite</button>
                                    </form>
                                </div>
                                <div className="rightElement commonRadius marginPromotion">
                                    <form>
                                        <div className="form-group">
                                            <h3 className="rightTitle">Invite your friends</h3>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="type email of your friends" />
                                        </div>
                                        <button type="submit" className="btn btn-default">invite</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
});

module.exports = {
    enter: function() {
        ReactDom.render(<Search />, document.getElementById('app'));
        console.log('search entered');
    },
    exit: function() {
        console.log('search exited');
    }
};