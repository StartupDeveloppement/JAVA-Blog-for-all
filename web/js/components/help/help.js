var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');

var Help = React.createClass({
   render: function () {
       return (
           <div className="commonContainer">
               <CommonNavBar />
               <br />
               <br />
               <br />
               <br />
                <div className="row">
                    <h2>Help page</h2>
                </div>
           </div>
       );
   }
});

module.exports = {
    enter: function() {
        ReactDom.render(<Help />, document.getElementById('app'));
        console.log('help entered');
    },
    exit: function() {
        console.log('help exited');
    }
};