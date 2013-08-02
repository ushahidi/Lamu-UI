define(['hammer'], function(hammer) {

  var element = document.getElementById('js-off-canvas');
  var hammertime = Hammer(element);

  hammertime.on('swipeleft dragleft', function(e) {
    e.preventDefault();
    $('body').toggleClass('active');
    alert('hello!');
  });

});




