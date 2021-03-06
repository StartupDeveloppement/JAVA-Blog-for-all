var React = require('react');
var CommonNavBar = require('../_common/commonNavBar.js');


var CreateContent = React.createClass({

    componentDidMount:function(){
        var editor = new MediumEditor('.editable', {
            buttonLabels: 'fontawesome'
        });

        $(function () {
            $('.editable').mediumInsert({
                editor: editor,
                addons: {
                    images: {
                        styles: {
                            slideshow: {
                                label: '<span class="fa fa-play"></span>',
                                added: function ($el) {
                                    $el
                                        .data('cycle-center-vert', true)
                                        .cycle({
                                            slides: 'figure'
                                        });
                                },
                                removed: function ($el) {
                                    $el.cycle('destroy');
                                }
                            }
                        },
                        actions: false
                    }
                }
            });
        });

        var cssLink = document.getElementById('medium-editor-theme');
        document.getElementById('sel-themes').addEventListener('change', function () {
            cssLink.href = this.value + '.css';
        });
    },

    handleClickEditable: function(){
        var content = document.getElementById('editableMediumContent')
        console.log(content);
    },

    render: function () {

        const styles = {
            styleDeactivateAccount: {color: 'blue'}
        };

        return (
            <div className="commonContainer">
                <CommonNavBar />
                <div className="commonContainerNavBar">
                    <br />
                    <form onSubmit={this.handleClickEditable}>
                        <div>
                            <div id="editableMediumContent" className="editable commonForm container col-sm-7 col-sm-offset-1 commonRadius">
                                <p>Start writing here...</p>
                                <p>By simply underlining text, you will have access to styling...</p>
                                <p>Going to a next line allow you to import picture or add video link...</p>
                                <p>Click on the video link on the right to watch our tutorial...</p>
                            </div>
                            <div className="row divider">
                                <div className="col-sm-12"><hr></hr></div>
                            </div>
                            <div className="row">
                                <button type="submit" className="btn btn-primary btn-sm pull-right"> Submit </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = CreateContent;
