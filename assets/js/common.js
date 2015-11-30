$(document).ready(function(e) {

  // Menu Button
  $('#header .menuBtn').click(function(){
    $(this).toggleClass('open');
    $('#nav').toggleClass('open', 4000);
  });

  //Banner
  // $(window).on('load resize orientation', function() {
  //   $('#banner').height($(this).height());
  // });

});