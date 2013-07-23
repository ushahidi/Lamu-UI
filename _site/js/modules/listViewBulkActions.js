//list view bulk actions toggle
define(['jquery'], function($) {
  $('.js-list-view-select-post').click(function (){
      $checked = $('.js-list-view-select-post input[type="checkbox"]:checked')
      if ($checked.length > 0)
      {
          $('.js-list-view-bulk-actions').removeClass('hidden');
          $('.js-list-view-bulk-actions').addClass('visible');
      }
      else
      {
           $('.js-list-view-bulk-actions').removeClass('visible');
           $('.js-list-view-bulk-actions').addClass('hidden');
      }
      console.log('You clicked .js-list-view-bulk-actions-list');
  });
});
