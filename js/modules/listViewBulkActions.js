//bulk filter toggle
define(['jquery'], function($) {
  $('.list-view-select-post').click(function (){
      $checked = $('.list-view-select-post input[type="checkbox"]:checked')
      if ($checked.length > 0)
      {
          $('.list-view-bulk-actions').removeClass('hidden');
          $('.list-view-bulk-actions').addClass('visible');
      }
      else
      {
           $('.list-view-bulk-actions').removeClass('visible');
           $('.list-view-bulk-actions').addClass('hidden');
      }
      console.log('You clicked .list-view-bulk-actions');
  });
});
