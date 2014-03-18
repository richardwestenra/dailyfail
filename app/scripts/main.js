"use strict";

$(function(){
	$('.foo').each(function(){
		var url = $(this).attr('href'),
			$this = $(this);
		$.get(url, function(data) {
			console.log("Success! Data received from "+url);
			var comment = $(data).find('.bar').text();
			$this.text(comment);
		});
	});
});