"use strict";
$(function(){
	var headlines = [
		'.article .linkro-darkred a',
		'.link-bogr2 li a'
	],
	commentClass = '.comment-text',
	maxLength = 140;
	$( headlines.join(', ') ).each(function(){
		var url = $(this).attr('href'),
			$this = $(this);
		$.get(url, function(data) {
			var comment = $(data).find(commentClass+':first').text();
			if (typeof comment === "string" && comment.length>maxLength) {
				comment = comment.substr(0,maxLength) + "…";
			}
			console.log("Success! Data received from "+url+". Comment reads: '"+comment+"'.");
			$this.text(comment);
		});	
	});
});