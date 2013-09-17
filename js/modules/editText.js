define(['jquery'], function($){

// edit post-title
	$('.post-title').click(
	    function(){
	        var text = $(this).text();
	        $(this).text('');
	        $('<input />').appendTo($(this)).val(text).select().blur(
	            function(){
	                var newText = $(this).val();
	                $(this).parent().text(newText).find('input').remove();
	            });
	    });

// edit post-excerpt
	$('.post-excerpt').click(
	    function(){
	        var text = $(this).text();
	        $(this).text('');
	        $('<textarea />').appendTo($(this)).val(text).blur(
	            function(){
	                var newText = $(this).val();
	                $(this).parent().text(newText).find('textarea');
	            });
	    });

// save text on click and keep styling
	$('#save-text').click (
		function(){
			var text = $('<textarea />').val();
			// console.log('text:' + text);
			var paragraphs = text.split ("\n");
			var newText = '';
			for (var i = 0; i<paragraphs.length; i++) {
				newText = newText + '<p>' + paragraphs[i] + '</p>';
			}
			// console.log(newText);
		});

});



