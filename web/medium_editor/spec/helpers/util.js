function placeCaret(e,a){var t,n;t=document.createRange(),n=window.getSelection(),t.setStart(e.childNodes[0],a),t.collapse(!0),n.removeAllRanges(),n.addRange(t)}