!function(e,t,i,s,o){"use strict";function a(i,s){this.el=i,this.$el=e(i),this.templates=t.MediumInsert.Templates,this.core=this.$el.data("plugin_"+r),this.options=e.extend(!0,{},d,s),this._defaults=d,this._name=r,this.options.preview&&!t.FileReader&&(this.options.preview=!1),this.core.getEditor()&&(this.core.getEditor()._serializePreImages=this.core.getEditor().serialize,this.core.getEditor().serialize=this.editorSerialize),this.init()}var r="mediumInsert",n="Images",d={label:'<span class="fa fa-camera"></span>',deleteMethod:"POST",deleteScript:"delete.php",preview:!0,captions:!0,captionPlaceholder:"Type caption for image (optional)",autoGrid:3,fileUploadOptions:{url:"upload.php",acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i},styles:{wide:{label:'<span class="fa fa-align-justify"></span>'},left:{label:'<span class="fa fa-align-left"></span>'},right:{label:'<span class="fa fa-align-right"></span>'},grid:{label:'<span class="fa fa-th"></span>'}},actions:{remove:{label:'<span class="fa fa-times"></span>',clicked:function(){var t=e.Event("keydown");t.which=8,e(i).trigger(t)}}},sorting:function(){var t=this;e(".medium-insert-images").sortable({group:"medium-insert-images",containerSelector:".medium-insert-images",itemSelector:"figure",placeholder:'<figure class="placeholder">',handle:"img",nested:!1,vertical:!1,afterMove:function(){t.core.triggerInput()}})},messages:{acceptFileTypesError:"This file is not in a supported format: ",maxFileSizeError:"This file is too big: "}};a.prototype.init=function(){var e=this.$el.find(".medium-insert-images");e.find("figcaption").attr("contenteditable",!0),e.find("figure").attr("contenteditable",!1),this.events(),this.backwardsCompatibility(),this.sorting()},a.prototype.events=function(){e(i).on("click",e.proxy(this,"unselectImage")).on("keydown",e.proxy(this,"removeImage")).on("click",".medium-insert-images-toolbar .medium-editor-action",e.proxy(this,"toolbarAction")).on("click",".medium-insert-images-toolbar2 .medium-editor-action",e.proxy(this,"toolbar2Action")),this.$el.on("click",".medium-insert-images img",e.proxy(this,"selectImage"))},a.prototype.backwardsCompatibility=function(){this.$el.find(".mediumInsert").removeClass("mediumInsert").addClass("medium-insert-images"),this.$el.find(".medium-insert-images.small").removeClass("small").addClass("medium-insert-images-left")},a.prototype.editorSerialize=function(){var t=this._serializePreImages();return e.each(t,function(i){var s=e("<div />").html(t[i].value);s.find(".medium-insert-images").find("figcaption, figure").removeAttr("contenteditable"),t[i].value=s.html()}),t},a.prototype.add=function(){var t=this,i=e(this.templates["src/js/templates/images-fileupload.hbs"]()),s={dataType:"json",add:function(i,s){e.proxy(t,"uploadAdd",i,s)()},done:function(i,s){e.proxy(t,"uploadDone",i,s)()}};(new XMLHttpRequest).upload&&(s.progress=function(i,s){e.proxy(t,"uploadProgress",i,s)()},s.progressall=function(i,s){e.proxy(t,"uploadProgressall",i,s)()}),i.fileupload(e.extend(!0,{},this.options.fileUploadOptions,s)),i.click()},a.prototype.uploadAdd=function(t,i){var s,o=this.$el.find(".medium-insert-active"),a=this,r=[],n=i.files[0],d=this.options.fileUploadOptions.acceptFileTypes,l=this.options.fileUploadOptions.maxFileSize;return d&&!d.test(n.type)?r.push(this.options.messages.acceptFileTypesError+n.name):l&&n.size>l&&r.push(this.options.messages.maxFileSizeError+n.name),r.length>0?void alert(r.join("\n")):(this.core.hideButtons(),o.is("p")&&(o.replaceWith('<div class="medium-insert-active">'+o.html()+"</div>"),o=this.$el.find(".medium-insert-active"),this.core.moveCaret(o)),o.addClass("medium-insert-images"),this.options.preview===!1&&0===o.find("progress").length&&(new XMLHttpRequest).upload&&o.append(this.templates["src/js/templates/images-progressbar.hbs"]()),void((i.autoUpload||i.autoUpload!==!1&&e(t.target).fileupload("option","autoUpload"))&&i.process().done(function(){a.options.preview?(s=new FileReader,s.onload=function(t){e.proxy(a,"showImage",t.target.result,i)()},s.readAsDataURL(i.files[0])):i.submit()})))},a.prototype.uploadProgressall=function(e,t){var i,s;this.options.preview===!1&&(i=parseInt(t.loaded/t.total*100,10),s=this.$el.find(".medium-insert-active").find("progress"),s.attr("value",i).text(i),100===i&&s.remove())},a.prototype.uploadProgress=function(e,t){var i,s;this.options.preview&&(i=100-parseInt(t.loaded/t.total*100,10),s=t.context.find(".medium-insert-images-progress"),s.css("width",i+"%"),0===i&&s.remove())},a.prototype.uploadDone=function(t,i){var s=e.proxy(this,"showImage",i.result.files[0].url,i)();this.core.clean(),this.sorting(),this.options.uploadCompleted&&this.options.uploadCompleted(s,i)},a.prototype.showImage=function(t,i){var s,o,a=this.$el.find(".medium-insert-active");return a.click(),o=this,this.options.preview&&i.context?(s=this.getDOMImage(),s.onload=function(){i.context.find("img").attr("src",s.src),o.core.triggerInput()},s.src=t):(i.context=e(this.templates["src/js/templates/images-image.hbs"]({img:t,progress:this.options.preview})).appendTo(a),a.find("br").remove(),this.options.autoGrid&&a.find("figure").length>=this.options.autoGrid&&(e.each(this.options.styles,function(e,t){var i="medium-insert-images-"+e;a.removeClass(i),t.removed&&t.removed(a)}),a.addClass("medium-insert-images-grid"),this.options.styles.grid.added&&this.options.styles.grid.added(a)),this.options.preview&&i.submit()),this.core.triggerInput(),i.context},a.prototype.getDOMImage=function(){return new t.Image},a.prototype.selectImage=function(t){if(this.core.options.enabled){var i=e(t.target),s=this;this.$el.blur(),i.addClass("medium-insert-image-active"),i.closest(".medium-insert-images").addClass("medium-insert-active"),setTimeout(function(){s.addToolbar(),s.options.captions&&s.core.addCaption(i.closest("figure"),s.options.captionPlaceholder)},50)}},a.prototype.unselectImage=function(t){var i=e(t.target),s=this.$el.find(".medium-insert-image-active");return i.is("img")&&i.hasClass("medium-insert-image-active")?(s.not(i).removeClass("medium-insert-image-active"),e(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),void this.core.removeCaptions(i)):(s.removeClass("medium-insert-image-active"),e(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),void(i.is(".medium-insert-caption-placeholder")?this.core.removeCaptionPlaceholder(s.closest("figure")):i.is("figcaption")===!1&&this.core.removeCaptions()))},a.prototype.removeImage=function(t){var i,s,o;(8===t.which||46===t.which)&&(i=this.$el.find(".medium-insert-image-active"),i.length&&(t.preventDefault(),this.deleteFile(i.attr("src")),s=i.closest(".medium-insert-images"),i.closest("figure").remove(),e(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),0===s.find("figure").length&&(o=s.next(),(o.is("p")===!1||""!==o.text())&&(o=e(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),s.before(o)),s.remove(),this.core.hideAddons(),this.core.moveCaret(o)),this.core.triggerInput()))},a.prototype.deleteFile=function(t){if(this.options.deleteScript){var i=this.options.deleteMethod||"POST";e.ajax({url:this.options.deleteScript,type:i,data:{file:t}})}},a.prototype.addToolbar=function(){var t,i,s,o=this.$el.find(".medium-insert-image-active"),a=o.closest(".medium-insert-images"),r=!1,n=this.core.getEditor(),d=n.options.elementsContainer||"body";e(d).append(this.templates["src/js/templates/images-toolbar.hbs"]({styles:this.options.styles,actions:this.options.actions}).trim()),t=e(".medium-insert-images-toolbar"),i=e(".medium-insert-images-toolbar2"),s=o.offset().top-t.height()-8-2-5,0>s&&(s=0),t.css({top:s,left:o.offset().left+o.width()/2-t.width()/2}).show(),i.css({top:o.offset().top+2,left:o.offset().left+o.width()-i.width()-4}).show(),t.find("button").each(function(){a.hasClass("medium-insert-images-"+e(this).data("action"))&&(e(this).addClass("medium-editor-button-active"),r=!0)}),r===!1&&t.find("button").first().addClass("medium-editor-button-active")},a.prototype.toolbarAction=function(t){var i=e(t.target).is("button")?e(t.target):e(t.target).closest("button"),s=i.closest("li"),o=s.closest("ul"),a=o.find("li"),r=this.$el.find(".medium-insert-active"),n=this;i.addClass("medium-editor-button-active"),s.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"),a.find("button").each(function(){var t="medium-insert-images-"+e(this).data("action");e(this).hasClass("medium-editor-button-active")?(r.addClass(t),n.options.styles[e(this).data("action")].added&&n.options.styles[e(this).data("action")].added(r)):(r.removeClass(t),n.options.styles[e(this).data("action")].removed&&n.options.styles[e(this).data("action")].removed(r))}),this.core.hideButtons(),this.core.triggerInput()},a.prototype.toolbar2Action=function(t){var i=e(t.target).is("button")?e(t.target):e(t.target).closest("button"),s=this.options.actions[i.data("action")].clicked;s&&s(this.$el.find(".medium-insert-image-active")),this.core.hideButtons(),this.core.triggerInput()},a.prototype.sorting=function(){e.proxy(this.options.sorting,this)()},e.fn[r+n]=function(t){return this.each(function(){e.data(this,"plugin_"+r+n)||e.data(this,"plugin_"+r+n,new a(this,t))})}}(jQuery,window,document,MediumEditor.util);