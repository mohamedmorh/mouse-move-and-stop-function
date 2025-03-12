$(document).ready(function(){

// window events...
  $(window).on({
    mousemove : function(e){
      let x = e.pageX ,
          y = e.pageY ;
      $('#box').css({ display : "block", left : (x-15), top : (y-15) });
      $('#page').css({ display : "block", left : (x+25), top : (y+25)});
      $("#page").text("x : "+ x + " - " + "y : "+y);
      $('#page').fadeIn();
      $('.text:eq( 2 )').text("mouse is moving");

// mouse Stop

      function mouseStopped(){
        $('#page').text('stoped');
        $('#page').fadeOut();
        $('.text:eq(2)').text('mouse has stoped');
      }
        clearTimeout(window.timer);
        window.timer = setTimeout(mouseStopped,1000);
    }, // end mousemove

    click : function(e){
      let x = e.pageX ,
          y = e.pageY ;
      $(".text:eq( 1 )").text("you clicked here .. " + "x : "+ x + " // " + "y : "+y);
      // animation start here
              $("#box").animate({
                transform :'scale(3)',
                opacity:0.8},
                100/* Delay */ ,function(){ // callBack
                                $("#box").animate({
                                  transform :'scale(1)',
                                  opacity:0.5 },80/* Delay */ )});
    }
  }) // end click
}); // end on
