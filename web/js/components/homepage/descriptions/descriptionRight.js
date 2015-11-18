var React = require('react');

var DescriptionRight = React.createClass({
    render: function () {
        const styles = {
            styleContainerRight: {backgroundColor: '#DFE6E8', paddingBottom:'20%'}
        };

        return (
            <div className="row" style={styles.styleContainerRight}>
                <h3 className="container">Create and share your knowledge</h3>
            </div>
            );
    }
});

module.exports = DescriptionRight;