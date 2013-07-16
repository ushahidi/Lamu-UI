//subNav toggle
define(['jquery'], function($) {

  $('#views-subnav').click(function (){
    $('.views-subnav').slideToggle(200);
  console.log('You clicked #views-subnav');
  });

  $('#views-subnav-mobile').click(function (){
    $('.views-subnav').slideToggle(200);
  console.log('You clicked #views-subnav-mobile');
  });

  $('#sets-subnav').click(function (){
    $('.sets-subnav').slideToggle(200);
  console.log('You clicked #sets-subnav');
  });

  $('#sets-subnav-mobile').click(function (){
    $('.sets-subnav').slideToggle(200);
  console.log('You clicked #sets-subnav-mobile');
  });

});
