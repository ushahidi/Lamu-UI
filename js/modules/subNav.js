define(['jquery'], function($) {

$('body').addClass('js');

var $viewsMenuLink = $('.js-views-menu-link, .js-views-menu-link-mobile'),
    $viewsMenu = $('.js-views-menu'),
    $setsMenuLink = $('.js-sets-menu-link, .js-sets-menu-link-mobile'),
    $setsMenu = $('.js-sets-menu');

    $viewsMenuLink.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');

      if ($setsMenuLink.hasClass('active')) {
        $setsMenuLink.toggleClass('active');
        $viewsMenu.toggleClass('subnav');
      }
      else {
        $viewsMenu.toggleClass('subnav');
      };
    });


    $setsMenuLink.click(function(e) {
      $(this).toggleClass('active');

      if ($viewsMenu.hasClass('subnav')) {
        $viewsMenuLink.toggleClass('active');
        $viewsMenu.toggleClass('subnav');
        $setsMenuLink.toggleClass('active');
      }
      else {
        $setsMenuLink.toggleClass('active');
      };
  });

    $('nav[role="sub-navigation"] ul li').click(function() {
      // console.log($(this).siblings())
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });

    var activeurl = window.location.pathname;
    $('a[href="'+ activeurl +'"]').parent('li').addClass('active');
    $('nav[role="sub-navigation"] a[href="'+ activeurl +'"]').parent('li').addClass('active');
});





