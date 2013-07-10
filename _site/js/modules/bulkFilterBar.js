//bulk filter toggle
define(['jquery'], function($) {
  $('.list-view-select-post').click(function (){
      $checked = $('.list-view-select-post input[type="checkbox"]:checked')
      if ($checked.length > 0)
      {
          $('.list-view-bulk-filter-bar').removeClass('hidden');
          $('.list-view-bulk-filter-bar').addClass('visible');
      }
      else
      {
           $('.list-view-bulk-filter-bar').removeClass('visible');
           $('.list-view-bulk-filter-bar').addClass('hidden');
      }
      console.log('You clicked .list-view-bulk-filter-bar');
  });
});
