define(['jquery'], function($) {

  $( "p.js-title" ).click(function() {
     if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        return false; // Prevents further propagation of event
     }
     if ($(this).parent().hasClass('disable')) {
        $(this).parent().addClass('active')
        return false; // Prevents further propagation of event
     }
  });

  $('.workspace-menu>section .js-content').click(function(e) {
    e.preventDefault();
    $('.js-content').removeClass('active');
    $(this).addClass('active');
  });

});
