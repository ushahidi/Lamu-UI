define(['jquery'], function($) {

$('body').addClass('js');

var $viewsMenuLink = $('#views-menu-link, #views-menu-link-mobile'),
    $viewsMenu = $('#views-menu'),
    $setsMenuLink = $('#sets-menu-link, #sets-menu-link-mobile'),
    $setsMenu = $('#sets-menu');

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

});
