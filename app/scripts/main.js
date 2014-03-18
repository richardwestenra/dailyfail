"use strict";
$(function(){
	var headlines = [
		'.article .linkro-darkred',
		'editors-choice li',
		'.linkro-wocc li',
		'.link-bogr2 li'
	],
	commentClass = '.comment-text',
	maxLength = 200;
	function truncate(s,n,useWordBoundary){
		var toLong = s.length>n,
			s_ = toLong ? s.substr(0,n-1) : this;
		s_ = useWordBoundary && toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
		return  toLong ? s_ + '…' : s_;
	};
	$(headlines).each(function(key,val){
		$(val).find('a').each(function(){
			var $this = $(this),
				url = $this.attr('href');
			$.get(url, function(data) {
				var comment = $(data).find(commentClass+':first').text();
				if (typeof comment != 'string' || comment.length === 0) {
					comment = 'No comment';
				} else if(comment.length>maxLength) {
					comment = truncate(comment,maxLength,true);
				}
				// console.log("Success! Data received from "+url+". Comment reads: '"+comment+"'.");
				if(val == '.link-bogr2 li'){
					console.log($this, val);
					$this.find('strong').text(comment);
				} else {
					$this.text(comment);
				}
			});	
		});
	});
});
