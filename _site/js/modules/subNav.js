//subNav toggle
define(['jquery'], function($) {

  $('#views-subnav').click(function (){
    if ($('.sets-subnav').hasClass('visible'))
    {
      $('.sets-subnav').addClass('hidden');
      $('.views-subnav').addClass('visible');
    }
    else
    {
      $('.views-subnav').toggleClass('hidden');
    }
  console.log('You clicked #views-subnav');
  });

  $('#views-subnav-mobile').click(function (){
    if ($('.sets-subnav').css('display', 'none'))
    {
      $('.sets-subnav').hide();
      $('.views-subnav').show();
    }
    else
    {
      $('.views-subnav').slideToggle(200);
    }
  console.log('You clicked #views-subnav-mobile');
  });

  $('#sets-subnav').click(function (){
    if ($('.views-subnav').css('display', 'none'))
    {
      $('.views-subnav').hide();
      $('.sets-subnav').show();
    }
    else
    {
      $('.sets-subnav').slideToggle(200);
    }
  console.log('You clicked #sets-subnav');
  });

  $('#sets-subnav-mobile').click(function (){
    if ($('.views-subnav').css('display', 'none'))
    {
      $('.views-subnav').hide();
      $('.sets-subnav').show();
    }
    else
    {
      $('.sets-subnav').slideToggle(200);
    }
  console.log('You clicked #sets-subnav-mobile');
  });

});
