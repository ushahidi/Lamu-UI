define(['hammer'], function(hammer) {

  var element = document.getElementById('js-off-canvas');
  var hammertime = Hammer(element);

  hammertime.on('swipeleft dragleft', function(e) {
    ev.gesture.preventDefault()
    $('body').toggleClass('active');
    // alert('hello!');
  });

});




