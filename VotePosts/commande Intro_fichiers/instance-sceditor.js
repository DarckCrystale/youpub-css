$(document).ready(function(){try{FA.SCEditor={sourceMode:bSourceMode};$("#text_editor_textarea").sceditor({locale:locale,width:($.sceditor.ie<=9)?'':'100%',height:height,plugins:plugin,toolbar:toolbar,style:cssFile,rtl:(isRtl==true),emoticonsEnabled:emoticonsEnabled,emoticonsCompat:true,emoticonsRoot:"",emoticons:{dropdown:smileys},emoticonsURL:iframeSrc});var editor=$("#text_editor_textarea").sceditor("instance");editor.toggleSourceMode();editor.sourceMode(FA.SCEditor.sourceMode);if(FA.SCEditor.sourceMode)$("a.sceditor-button-source").addClass("hover");if(plugin==='bbcode'){FA_SCEditor.functions.showHideToolbarElements();if(!bSourceMode&&editor.getSourceEditorValue().length)editor.setWysiwygEditorValue(editor.getSourceEditorValue()+'<br />')}}catch(e){if(typeof(console)!='undefined'){console.error(e)}}try{if(typeof(addSmileyPane)!='undefined'){addSmileyPane()}}catch(e){if(typeof(console)!='undefined'){console.error(e)}}});function insertIntoEditor(text){try{var editor=$("#text_editor_textarea").sceditor("instance");var editorContent=editor.val();if((text==null)||(typeof(text)=='undefined')){text=""}if(editor&&(text.length>0)){if(editor.inSourceMode()){if(editorContent.slice(-1)===' '||editorContent.length==0)editor.insert(text+' ');else if(editorContent.length>0)editor.insert(' '+text+' ')}else{if(editorContent.slice(-1)===' '||editorContent.length==0){editor.insert(text);editor.wysiwygEditorInsertHtml(' ')}else if(editorContent.length>0){editor.wysiwygEditorInsertHtml(' ');editor.insert(text);editor.wysiwygEditorInsertHtml(' ')}}}}catch(e){if(console){console.error(e)}}}