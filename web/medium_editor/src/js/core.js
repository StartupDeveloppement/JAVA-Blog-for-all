!function(t,e,i,o){"use strict";function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(i,o){var s;this.el=i,this.$el=t(i),this.templates=e.MediumInsert.Templates,o&&(s=o.editor,o.editor=null),this.options=t.extend(!0,{},d,o),this.options.editor=s,this._defaults=d,this._name=r,this.options&&this.options.editor&&(this.options.editor._serialize=this.options.editor.serialize,this.options.editor._destroy=this.options.editor.destroy,this.options.editor._setup=this.options.editor.setup,this.options.editor._hideInsertButtons=this.hideButtons,this.options.editor.serialize=this.editorSerialize,this.options.editor.destroy=this.editorDestroy,this.options.editor.setup=this.editorSetup,this.options.editor.getExtensionByName("placeholder").updatePlaceholder=this.editorUpdatePlaceholder)}var r="mediumInsert",d={editor:null,enabled:!0,addons:{images:!0,embeds:!0}};n.prototype.init=function(){this.$el.addClass("medium-editor-insert-plugin"),("object"!=typeof this.options.addons||0===Object.keys(this.options.addons).length)&&this.disable(),this.initAddons(),this.clean(),this.events()},n.prototype.events=function(){var i=this;this.$el.on("dragover drop",function(t){t.preventDefault()}).on("keyup click",t.proxy(this,"toggleButtons")).on("selectstart mousedown",".medium-insert, .medium-insert-buttons",t.proxy(this,"disableSelection")).on("click",".medium-insert-buttons-show",t.proxy(this,"toggleAddons")).on("click",".medium-insert-action",t.proxy(this,"addonAction")).on("paste",".medium-insert-caption-placeholder",function(e){t.proxy(i,"removeCaptionPlaceholder")(t(e.target))}),t(e).on("resize",t.proxy(this,"positionButtons",null))},n.prototype.getEditor=function(){return this.options.editor},n.prototype.editorSerialize=function(){var e=this._serialize();return t.each(e,function(i){var o=t("<div />").html(e[i].value);o.find(".medium-insert-buttons").remove(),e[i].value=o.html()}),e},n.prototype.editorDestroy=function(){t.each(this.elements,function(e,i){t(i).data("plugin_"+r).disable()}),this._destroy()},n.prototype.editorSetup=function(){this._setup(),t.each(this.elements,function(e,i){t(i).data("plugin_"+r).enable()})},n.prototype.editorUpdatePlaceholder=function(e){var i,o=t(e).clone();o.find(".medium-insert-buttons").remove(),i=o.html().replace(/^\s+|\s+$/g,"").replace(/^<p( class="medium-insert-active")?><br><\/p>$/,""),e.querySelector("img, blockquote")||""!==i?this.hidePlaceholder(e):(this.showPlaceholder(e),this.base._hideInsertButtons(t(e)))},n.prototype.triggerInput=function(){this.getEditor()&&this.getEditor().trigger("editableInput",null,this.el)},n.prototype.deselect=function(){i.getSelection().removeAllRanges()},n.prototype.disable=function(){this.options.enabled=!1,this.$el.find(".medium-insert-buttons").addClass("hide")},n.prototype.enable=function(){this.options.enabled=!0,this.$el.find(".medium-insert-buttons").removeClass("hide")},n.prototype.disableSelection=function(e){var i=t(e.target);(i.is("img")===!1||i.hasClass("medium-insert-buttons-show"))&&e.preventDefault()},n.prototype.initAddons=function(){var e=this;this.options.addons&&0!==this.options.addons.length&&t.each(this.options.addons,function(t,i){var o=r+s(t);return i===!1?void delete e.options.addons[t]:(e.$el[o](i),void(e.options.addons[t]=e.$el.data("plugin_"+o).options))})},n.prototype.clean=function(){var e,i,o,s=this;this.options.enabled!==!1&&((""===this.$el.html().trim()||"<br>"===this.$el.html().trim())&&this.$el.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),o=this.$el.contents().filter(function(){return"#text"===this.nodeName&&""!==t.trim(t(this).text())}),o.each(function(){t(this).wrap("<p />"),s.moveCaret(t(this).parent(),t(this).text().length)}),this.addButtons(),e=this.$el.find(".medium-insert-buttons"),i=e.prev(),i.attr("class")&&i.attr("class").match(/medium\-insert(?!\-active)/)&&e.before(this.templates["src/js/templates/core-empty-line.hbs"]().trim()))},n.prototype.getButtons=function(){return this.options.enabled!==!1?this.templates["src/js/templates/core-buttons.hbs"]({addons:this.options.addons}).trim():void 0},n.prototype.addButtons=function(){0===this.$el.find(".medium-insert-buttons").length&&this.$el.append(this.getButtons())},n.prototype.toggleButtons=function(i){var o,s,n,r,d=t(i.target),a=e.getSelection(),l=this;this.options.enabled!==!1&&(a&&0!==a.rangeCount?(o=a.getRangeAt(0),s=t(o.commonAncestorContainer)):s=d,s.hasClass("medium-editor-insert-plugin")&&(s=s.find("p:first")),n=s.is("p")?s:s.closest("p"),this.clean(),d.hasClass("medium-editor-placeholder")===!1&&0===d.closest(".medium-insert-buttons").length&&0===s.closest(".medium-insert-buttons").length&&(this.$el.find(".medium-insert-active").removeClass("medium-insert-active"),t.each(this.options.addons,function(t){return d.closest(".medium-insert-"+t).length&&(s=d),s.closest(".medium-insert-"+t).length?(n=s.closest(".medium-insert-"+t),void(r=t)):void 0}),n.length&&(""===n.text().trim()&&!r||"images"===r)?(n.addClass("medium-insert-active"),setTimeout(function(){l.positionButtons(r),l.showButtons(r)},r?100:0)):this.hideButtons()))},n.prototype.showButtons=function(t){var e=this.$el.find(".medium-insert-buttons");e.show(),e.find("li").show(),t&&(e.find("li").hide(),e.find('a[data-addon="'+t+'"]').parent().show())},n.prototype.hideButtons=function(t){t=t||this.$el,t.find(".medium-insert-buttons").hide(),t.find(".medium-insert-buttons-addons").hide(),t.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},n.prototype.positionButtons=function(t){var e,i,o=this.$el.find(".medium-insert-buttons"),s=this.$el.find(".medium-insert-active"),n=s.find("figure:first").length?s.find("figure:first"):s;s.length&&(e=s.position().left-parseInt(o.find(".medium-insert-buttons-addons").css("left"),10)-parseInt(o.find(".medium-insert-buttons-addons a:first").css("margin-left"),10),e=0>e?s.position().left:e,i=s.position().top+parseInt(s.css("margin-top"),10),t&&(s.position().left!==n.position().left&&(e=n.position().left),i+=s.height()+15),o.css({left:e,top:i}))},n.prototype.toggleAddons=function(){this.$el.find(".medium-insert-buttons-addons").fadeToggle(),this.$el.find(".medium-insert-buttons-show").toggleClass("medium-insert-buttons-rotate")},n.prototype.hideAddons=function(){this.$el.find(".medium-insert-buttons-addons").hide(),this.$el.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},n.prototype.addonAction=function(e){var i=t(e.target).is("a")?t(e.target):t(e.target).closest("a"),o=i.data("addon"),n=i.data("action");this.$el.data("plugin_"+r+s(o))[n]()},n.prototype.moveCaret=function(t,o){var s,n,r;if(o=o||0,s=i.createRange(),n=e.getSelection(),r=t.get(0),!r.childNodes.length){var d=i.createTextNode(" ");r.appendChild(d)}s.setStart(r.childNodes[0],o),s.collapse(!0),n.removeAllRanges(),n.addRange(s)},n.prototype.addCaption=function(t,e){var i=t.find("figcaption");0===i.length&&t.append(this.templates["src/js/templates/core-caption.hbs"]({placeholder:e}))},n.prototype.removeCaptions=function(e){var i=this.$el.find("figcaption");e&&(i=i.not(e)),i.each(function(){(t(this).hasClass("medium-insert-caption-placeholder")||""===t(this).text().trim())&&t(this).remove()})},n.prototype.removeCaptionPlaceholder=function(t){var e=t.is("figcaption")?t:t.find("figcaption");e.length&&e.removeClass("medium-insert-caption-placeholder").removeAttr("data-placeholder")},t.fn[r]=function(e){return this.each(function(){var i,o=this;t(o).is("textarea")&&(i=t(o).attr("medium-editor-textarea-id"),o=t(o).siblings('[medium-editor-textarea-id="'+i+'"]').get(0)),t.data(o,"plugin_"+r)?"string"==typeof e&&t.data(o,"plugin_"+r)[e]&&t.data(o,"plugin_"+r)[e]():(t.data(o,"plugin_"+r,new n(o,e)),t.data(o,"plugin_"+r).init())})}}(jQuery,window,document);