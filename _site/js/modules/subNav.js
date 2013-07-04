//subNav toggle
define(['jquery'], function($) {
  $('#has-subnav').click(function (){
    $('#subnav').slideToggle(200);
  console.log('You clicked #has-subnav');
  });
});
