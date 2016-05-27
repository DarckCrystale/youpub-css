$.sceditor.command.set('strike',{txtExec:["[strike]","[/strike]"]}).set('bulletlist',{txtExec:["[list][*]","[/list]"]}).set('orderedlist',{txtExec:["[list=1][*]","[/list]"]}).set('quote',{txtExec:function(caller){var editor=this;$.sceditor.command.get('quote')._dropDown(editor,caller,function(author){if(author)editor.insertText('[quote="'+author+'"]','[/quote]');else editor.insertText('[quote]','[/quote]')})}}).set('link',{txtExec:function(caller){var editor=this;$.sceditor.command.get('link')._dropDown(editor,caller,function(values){if(values['src']&&values['src']!=="http://")editor.insertText('[url='+values['src']+']'+values['desc']+'[/url]')})}}).set('image',{txtExec:function(caller){var editor=this;$.sceditor.command.get('image')._dropDown(editor,caller,function(values){if(values['src']&&values['src']!=="http://"){var dim='';if(values['width']&&!values['height'])dim='('+values['width']+'px,'+values['width']+'px)';if(!values['width']&&values['height'])dim='('+values['height']+'px,'+values['height']+'px)';if(values['width']&&values['height'])dim='('+values['width']+'px,'+values['height']+'px)';editor.insertText('[img'+dim+']'+values['src']+'[/img]')}})}}).set('color',{txtExec:function(caller){var editor=this;if(palette){$.sceditor.command.get('color')._dropDown(editor,caller,function(color){editor.insertText("[color="+color+"]","[/color]")})}else{$.sceditor.command.get('color')._menu(editor,caller,function(color){editor.insertText("[color="+color+"]","[/color]")})}}}).set('size',{txtExec:function(caller){var editor=this;$.sceditor.command.get('size')._dropDown(editor,caller,function(fontSize){editor.insertText('[size='+fontSize+']','[/size]')})}});$.sceditor.command.set("fahide",{exec:function(caller){this.wysiwygEditorInsertText("[hide]","[/hide]")},txtExec:["[hide]","[/hide]"],tooltip:"Hidden"});$.sceditor.command.set("fascroll",{exec:function(caller){this.wysiwygEditorInsertText("[scroll]","[/scroll]")},txtExec:["[scroll]","[/scroll]"],tooltip:"Horizontal scrolling"});$.sceditor.command.set("faupdown",{exec:function(caller){this.wysiwygEditorInsertText("[updown]","[/updown]")},txtExec:["[updown]","[/updown]"],tooltip:"Vertical scrolling"});$.sceditor.command.set("fawow",{exec:function(caller){this.wysiwygEditorInsertText("[wow]","[/wow]")},txtExec:["[wow]","[/wow]"],tooltip:"WoW"});$.sceditor.command.set("farand",{exec:function(caller){this.wysiwygEditorInsertText("[rand]","[/rand]")},txtExec:["[rand]","[/rand]"],tooltip:"Random"});$.sceditor.command.set("faspoiler",{_dropDown:function(editor,caller,handleIdFunc){var content=$('<div><div><label for="spoilerlabel">'+editor._("Title (optional)")+'</label><input type="text" id="spoilerlabel" value="" /></div><div><input type="button" value="'+editor._("Insert")+'" class="button" /></div></div>');content.find('.button').click(function(e){var val=content.find("#spoilerlabel").val();handleIdFunc(val);editor.closeDropDown(true);e.preventDefault()});editor.createDropDown(caller,"insertspoiler",content)},exec:function(caller){var editor=this;$.sceditor.command.get('faspoiler')._dropDown(editor,caller,function(title){var before='[spoiler]',end='[/spoiler]';if(title!=='')before='[spoiler="'+title+'"]';editor.wysiwygEditorInsertHtml(before,end)})},txtExec:function(caller){var editor=this;$.sceditor.command.get('faspoiler')._dropDown(editor,caller,function(title){if(title)editor.insertText('[spoiler="'+title+'"]','[/spoiler]');else editor.insertText('[spoiler]','[/spoiler]')})},tooltip:"Spoiler"});$.sceditor.command.set("faroll",{_dropDown:function(editor,caller,callback){var content=$("<div />");var clickFunc=function(e){callback($(this).data('roll'));editor.closeDropDown(true);e.preventDefault()};for(var i=0;i<dice.length;i++){content.append($('<a class="sceditor-fontsize-option" data-roll="'+dice[i]+'" href="#">'+dice[i]+'</a>').click(clickFunc))}editor.createDropDown(caller,"faroll-picker",content)},exec:function(caller){var editor=this;$.sceditor.command.get('faroll')._dropDown(editor,caller,function(dice){editor.wysiwygEditorInsertText('[roll="'+dice+'"][/roll]')})},txtExec:function(caller){var editor=this;$.sceditor.command.get('faroll')._dropDown(editor,caller,function(dice){editor.insertText('[roll="'+dice+'"][/roll]')})},tooltip:"Dices roll"});$.sceditor.command.set("dailymotion",{_dropDown:function(editor,caller,handleIdFunc){var matches,content=$('<div><div><label for="dailymotionurl">'+editor._("URL:")+'</label> <input type="text" id="dailymotionurl" class="url" placeholder="http://" value="" /></div><input type="button" value="'+editor._("Insert")+'" class="button" /></div>');content.find('.button').click(function(e){var link=content.find("#dailymotionurl").val(),val='';if(link!=""&&link!=null){matches=link.match(/(http:\/\/)?([a-z]+\.)?(dailymotion\.com\/)([a-zA-Z0-9]+\/)*([a-zA-Z0-9]+)_(.*)/);if(matches){val=matches[5]}else{matches=link.match(/(http:\/\/)?([a-z]+\.)?(dailymotion\.com\/)([a-zA-Z0-9\+]+\/)*(.*=)([a-zA-Z0-9]+)/);if(matches){val=matches[6]}}if(/^[a-zA-Z0-9]+$/.test(val)){handleIdFunc(val)}else{alert('Invalid Dailymotion video')}}editor.closeDropDown(true);e.preventDefault()});editor.createDropDown(caller,"insertlink",content)},exec:function(caller){var editor=this;$.sceditor.command.get('dailymotion')._dropDown(editor,caller,function(id){editor.wysiwygEditorInsertHtml('<iframe width="560" height="315" src="http://www.dailymotion.com/embed/video/'+id+'?wmode=opaque" data-dailymotion-id="'+id+'" frameborder="0" allowfullscreen></iframe>')})},txtExec:function(caller){var editor=this;$.sceditor.command.get('dailymotion')._dropDown(editor,caller,function(link){editor.insertText('[dailymotion]'+link+'[/dailymotion]')})},tooltip:"Insert a Dailymotion Video"});$.sceditor.command.set("youtube",{_dropDown:function(editor,caller,handleIdFunc){var matches,content=$('<div><div><label for="youtubeurl">'+editor._("URL:")+'</label> <input type="text" id="youtubeurl" class="url" placeholder="http://" value="" /></div><div><input type="button" value="'+editor._("Insert")+'" class="button"></div>');content.find('.button').click(function(e){var val=content.find("#youtubeurl").val().replace("http://","");if(val!==""){matches=val.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/);if(matches){val=matches[1]}if(/^[a-zA-Z0-9_\-]{11}$/.test(val)){handleIdFunc(val)}else{alert(editor._('Invalid YouTube video'))}}editor.closeDropDown(true);e.preventDefault()});editor.createDropDown(caller,"insertlink",content)},exec:function(caller){var editor=this;$.sceditor.command.get('youtube')._dropDown(editor,caller,function(id){editor.wysiwygEditorInsertHtml('<iframe width="560" height="315" src="http://www.youtube.com/embed/'+id+'?wmode=opaque" data-youtube-id="'+id+'" frameborder="0" allowfullscreen></iframe>')})},tooltip:"Insert a YouTube video"});$.sceditor.command.set("flash",{_dropDown:function(editor,caller,handleIdFunc){var content=$('<div><label for="flashwidth">'+editor._("Width (optional):")+'</label><input type="text" id="flashwidth" value="" /></div><div><label for="flashheight">'+editor._("Height (optional):")+'</label><input type="text" id="flashheight" value="" /></div><div><label for="flashsource">'+editor._("URL:")+'</label><input type="text" id="flashsource" class="url" placeholder="http://" value="" /></div><div><input type="button" class="button" value="'+editor._("Insert")+'" /></div>');content.find('.button').click(function(e){var values={};values['source']=content.find("#flashsource").val();values['width']=content.find("#flashwidth").val();values['height']=content.find("#flashheight").val();if(values['width']===""){values['width']="500"}if(values['height']===""){values['height']="500"}if(values['source']!==""){handleIdFunc(values)}editor.closeDropDown(true);e.preventDefault()});editor.createDropDown(caller,"flash",content)},exec:function(caller){var editor=this;$.sceditor.command.get('flash')._dropDown(editor,caller,function(values){editor.wysiwygEditorInsertHtml('<embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+values['source']+'" width="'+values['width']+'" height="'+values['height']+'" type="application/x-shockwave-flash" wmode="transparent" quality="high" scale="exactfit"></embed>')})},txtExec:function(caller){var editor=this;$.sceditor.command.get('flash')._dropDown(editor,caller,function(values){editor.insertText("[flash("+values['width']+","+values['height']+")]"+values['source']+"[/flash]")})},tooltip:"Flash"}).set('size',{txtExec:function(caller){var editor=this;$.sceditor.command.get('size')._dropDown(editor,caller,function(fontSize){editor.insertText('[size='+fontSize+']','[/size]')})}});$.sceditor.command.set("headers",{txtExec:function(caller){var editor=this;$.sceditor.command.get('headers')._dropDown(editor,caller,function(lvl){editor.insertText('[h'+lvl+']','[/h'+lvl+']')})}});