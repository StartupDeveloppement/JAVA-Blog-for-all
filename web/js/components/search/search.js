var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');
var ResultThumbnailGroup = require('../_common/resultThumbnailGroup.js');

var Search = React.createClass({
        render: function () {
            var articlesHighRoller = [
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'1',
                articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum autem sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'2',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'3',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'4',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerRed',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'http://www.lawyersweekly.com.au/images/LW_Media_Library/594partner-profile-pic-An.jpg', profileName:'Claire', articleKey:'5',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'6',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'},
                {articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerGreen',
                    articleDescription:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                    profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'7',
                    articlePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg'}
            ];

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

            return (
                <div className="commonContainer">
                    <CommonNavBar />
                    <br />
                    <br />
                    <br />
                    <div className="row container affix thumbnailCategory" data-offset-top="125">
                        <div className="container col-sm-3">
                            <h4>HighRollers</h4>
                        </div>
                        <div className="container col-sm-3">
                            <h4>OnTheWays</h4>
                        </div>
                        <div className="container col-sm-3">
                            <h4>Newbies</h4>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row marginResultThumbnail">
                        <div className="container col-sm-3">
                            <ResultThumbnailGroup articles={articlesHighRoller} />
                        </div>
                        <div className="container col-sm-3">
                            <ResultThumbnailGroup articles={articlesMedium} />
                        </div>
                        <div className="container col-sm-3">
                            <ResultThumbnailGroup articles={articlesNewbies} />
                        </div>
                        <div className="container col-sm-3">
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