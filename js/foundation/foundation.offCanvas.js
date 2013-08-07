;(function (window, document, $) {
  // Set the negative margin on the top menu for slide-menu pages
  events = 'click.fndtn';

  // Watch for clicks to show the sidebar
  var $selector2 = $('.js-workspace-panel-button, .js-workspace-panel-button-small');
  if ($selector2.length > 0) {
    $('.js-workspace-panel-button, .js-workspace-panel-button-small').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active-workspace');
      console.log('workspace toggle');
    });
  }
}(this, document, jQuery));
