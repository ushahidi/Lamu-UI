define(['hammer'], function(hammer){
  var element = document.getElementsByClassName('js-workspace-panel-button, .js-workspace-panel-small');
  var hammertime = Hammer(element).on("drag", function(event) {
     alert('hello!');
  });
});
