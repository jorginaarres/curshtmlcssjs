$(function(){$( "#divMouse" ).on({
    mouseenter: function() {
     
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
              console.log( "mouse left a div" );
    },
    click: function() {
       
        console.log( "clicked on a div" );
    }
});});

var rotation = $(function (){
   $("#logoDesarrolloLibre").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
});
rotation();