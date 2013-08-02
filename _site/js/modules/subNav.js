define(['jquery'], function($) {

$('body').addClass('js');

var $viewsMenuLink = $('.js-views-menu-link, .js-views-menu-link-mobile'),
    $viewsMenu = $('.js-views-menu'),
    $setsMenuLink = $('.js-sets-menu-link, .js-sets-menu-link-mobile'),
    $setsMenu = $('.js-sets-menu');

    $viewsMenuLink.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');

      if ($setsMenu .hasClass('subnav')) {
        $setsMenuLink.toggleClass('active');
        $setsMenu.toggleClass('subnav');
        $viewsMenu.toggleClass('subnav');
      }
      else {
        $viewsMenu.toggleClass('subnav');
      };
    });


    $setsMenuLink.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');

      if ($viewsMenu.hasClass('subnav')) {
        $viewsMenuLink.toggleClass('active');
        $viewsMenu.toggleClass('subnav');
        $setsMenu.toggleClass('subnav');
      }
      else {
        $setsMenu.toggleClass('subnav');
      };
  });

    $('nav[role="sub-navigation"] ul li').click(function() {
      console.log($(this).siblings())
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

    var activeurl = window.location.pathname;
    $('nav[role="sub-navigation"] a[href="'+ activeurl +'"]').parent('li').addClass('active');

});






