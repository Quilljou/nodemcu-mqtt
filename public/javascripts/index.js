$(document).ready(function() {
  var $negetive = $('#negetive');
  var $positive = $('#positive');
  var $stop = $('#stop');
  var $speed = $('#speed');
  var $slider = $('.ui-slider');
  var speed = 3;
  $stop.hide()
  $slider.hide()


  $positive.on('tap', function(e) {
    $.ajax({
      url: '/micropython/api/positive',
      method: 'POST',
      data: {speed: speed},
    })
    $stop.show()
    $slider.show()
  })



  $negetive.on('tap', function(e) {
    $.ajax({
      url: '/micropython/api/negetive',
      method: 'POST',
      data: {speed: speed},
    })
    $stop.show()
    $slider.show()
  })

  $stop.on('tap', function(e) {
    $.ajax({
      url: '/micropython/api/stop',
      method: 'POST'
    })
  })

  // see@https://stackoverflow.com/questions/5501536/jquery-mobile-slider-change-event
  $(".ui-slider").on('change', function(event) {
      var valuenow = $(this).find(".ui-slider-handle").attr("aria-valuenow");
      speed = valuenow
      $.ajax({
        url: '/micropython/api/speed',
        method: 'POST',
        data: {speed: valuenow}
      })
  });

});
