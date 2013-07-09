//bulk filter toggle
define(['jquery'], function($) {
  $('.list-view-select-post .checkbox').click(function (){
    $('.list-view-bulk-filter-bar').slideToggle(200);
  console.log('You clicked .list-view-bulk-filter-bar');
  });
});
