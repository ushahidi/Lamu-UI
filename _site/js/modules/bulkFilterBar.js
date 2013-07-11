//bulk filter toggle
define(['jquery'], function($) {
  $('.list-view-select-post').click(function (){
      $checked = $('.list-view-select-post input[type="checkbox"]:checked')
      if ($checked.length > 0)
      {
          $('.list-view-bulk-actions-list').removeClass('hidden');
          $('.list-view-bulk-actions-list').addClass('visible');
      }
      else
      {
           $('.list-view-bulk-actions-list').removeClass('visible');
           $('.list-view-bulk-actions-list').addClass('hidden');
      }
      console.log('You clicked .list-view-bulk-actions-list');
  });
});
