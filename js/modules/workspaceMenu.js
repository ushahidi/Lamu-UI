define(['jquery'], function($) {

  $( "p.js-title" ).click(function(e) {
     $(this).parent().toggleClass('active');
     e.preventDefault();
  });

  $('.workspace-menu>section .js-content').click(function(e) {
    e.preventDefault();
    $('.js-content').removeClass('active');
    $(this).addClass('active');
  });

});
