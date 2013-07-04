//add a post toggle
define(['jquery'], function($) {
  $('#add-post-toggle-open').click(function (){
    $('#add-post-form').animate({
      right: '0px' }, 200 );
    $('#filter-form').animate({
      right: '-367px' }, 200 );
      console.log('You clicked #add-post-toggle-open');
  });

  $('#add-post-toggle-close, .post-form-header').click(function (){
    $('#add-post-form').animate({
      right: '-367px' }, 200 );
      console.log('You clicked #add-post-toggle-close');
  });
});
