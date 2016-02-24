var React = require('react');
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


module.exports = Help;
