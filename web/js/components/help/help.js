var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var Router = require('../../router.js');
var CommonNavBar = require('../_common/commonNavBar.js');

var Help = React.createClass({
   render: function () {
       return (
           <div>
               <CommonNavBar />
               <div className="commonContainerNavBar">
                    <div className="row">
                        <h1>Help page</h1>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                        <p>learn more about our product</p>
                    </div>
               </div>
           </div>
       );
   }
});


//module.exports = Help;


module.exports = {
    enter: function() {
        ReactDom.render(<Help />, document.getElementById('app'));
        console.log('help entered');
    },
    exit: function() {
        console.log('help exited');
    }
};