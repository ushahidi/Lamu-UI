;(function (window, document, $) {
  // Set the negative margin on the top menu for slide-menu pages
  events = 'click.fndtn';

  // Watch for clicks to show the sidebar
  var $selector2 = $('#admin-panel-button, #admin-panel-button-small');
  if ($selector2.length > 0) {
    $('#admin-panel-button, #admin-panel-button-small').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active');
      console.log('sidebar toggle');
    });
  }
}(this, document, jQuery));
