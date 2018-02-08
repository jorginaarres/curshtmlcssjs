var idd=549;

function getget(){
  $.get( "https://www.pokeapi.co/api/v2/pokemon/" + idd +"/",  function( data ) {
  // data = data received
  // as we used the "json" argument at the end, data is parsed JSON 
    /*
    if we have received {name:"john"}, data.name = john

    if the object is like [{name:"john"}], to retrieve "john" we would 
        need data[0].name

    if the object is like {name:["john","chris"]}, to get "chris" we 
        would need data.name[2]
  */
  $( "#pok" )  
    $( "#idp" ) .html(  data.id ) //  2pm
    
  
  $( "#ssp" ).html( "<img src= " + data.sprites.front_shiny + ">" ) 
  $( "#nsp" ).html( "<img src= " + data.sprites.back_default+ ">" ) 
  $( "#name" ).html(  data.name ) // John
  $( "#type" ).html(  data.types[0].type.name ) 
}, "json" );
};

 

$(window).on("load",function(){
  
    getget();  

       $("#Last").click(function(){
      idd= idd-1;
      getget();

    });


    $("#Next").click(function(){
      idd= idd+1;
      getget();
    });


});

    

