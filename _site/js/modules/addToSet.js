// add green check icon and fade opacity when adding to sets
define(['jquery'], function($){
	$('.js-sets-grid li').click(function () {
	    var $this = $(this).find('.set-is-selected');
	    $this.toggleClass('hidden');
	    $this.toggleClass('visible');
	    console.log('You clicked .js-add-to-set');
	});
});




