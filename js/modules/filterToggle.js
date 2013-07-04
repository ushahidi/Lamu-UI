//filter toggle
define(['jquery'], function($) {
  $('#filter-toggle-open').click(function (){
    $('#filter-form').animate({
      right: '0px' }, 200 );
      console.log('You clicked #filter-toggle-open');
  });

  $('#filter-toggle-close, .filter-form-header').click(function (){
    $('#filter-form').animate({
      right: '-367px' }, 200 );
      console.log('You clicked #filter-toggle-close');
  });

});


