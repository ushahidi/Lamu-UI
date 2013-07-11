define(['jquery'], function($) {

  $( "p.title" ).click(function() {
     if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        return false; // Prevents further propagation of event
     }
     if ($(this).parent().hasClass('disable')) {
        $(this).parent().addClass('active')
        return false; // Prevents further propagation of event
     }
  });

  $('.admin-menu>section .content').click(function(e) {
    e.preventDefault();
    $('.content').removeClass('active');
    $(this).addClass('active');
  });

});
