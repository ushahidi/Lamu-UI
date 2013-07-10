define(['jquery'], function($) {

  $(".top-bar-section li a.admin-panel-button").click(function (){
    $(this).toggleClass('inverse');
  });

  $( "p.title" ).click(function() {
     if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
        return false; // Prevents further propagation of event
     }
  });

  $('.admin-menu>section .content').click(function(e) {
    e.preventDefault();
    $('.content').removeClass('active');
    $(this).addClass('active');
  });

});
