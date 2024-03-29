/*
 * dblclk2edit - jQuery inline edit plugin
 *
 * Version: 201212.1
 *
 * Copyright (c) 2012 Dima Tsvetkov
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * More info:
 *   http://www.dima.fi/jquery/dblclk2edit/
 *
 */

(function($) {

	$.fn.dblclk2edit = function(options) {
		
		var settings = $.extend( {
			'postTo'			: 'save.php',
			'postIdVal'			: 'auto',
			'textarea'			: false,
			'nicEdit'	: false,
			'savingTxt'			: 'saving...'
		}, options);

		return this.each( function() {
			var clicked = false, content, area;
			$(this).hover(function(){
					$(this).css('background-color', '#ffc');
				},function(){
					$(this).css('background-color', '');
				}
			).dblclick(function(){
				var id = $(this).attr('id');

				if(clicked) {
					clicked = false;
					
					if(settings.nicEdit) {
						content = $(".nicEdit-selected").html();
						area.removeInstance("dc2eEditor-"+id);
					}
					else {
						if(settings.textarea) content = $(this).children("textarea").attr("value");
						else content = $(this).children("input").val();
					}
					$(this).html(settings.savingTxt);
					if(settings.postIdVal != "auto") id = settings.postIdVal;
					$.post(settings.postTo, { id: id, text: content },
						function(data) {
							if(settings.debug) alert("Reply from postTo file:\n\n"+data);
					});
					$(this).delay(1000).fadeOut("fast", function(){
						$(this).html(content);
						$(this).css('background-color', '#cfc');
					}).fadeIn("slow");
				}
				else {
					clicked = true;
					content = $(this).html();
				
					if(settings.nicEdit || settings.textarea) {
						$(this).html("<textarea id=\"dc2eEditor-"+id+"\" class=\"dc2eEditor\">"+content+"</textarea>");
					}
					else $(this).html("<input class=\"dc2eEditor\" value=\""+content+"\">");
					
					if(settings.nicEdit) {
						area = new nicEditor({fullPanel : true}).panelInstance("dc2eEditor-"+id);
					}
				}
			});	
		}); // this.each	
	};
})( jQuery );

