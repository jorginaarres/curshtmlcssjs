$.get( "https://www.pokeapi.co/api/v2/pokemon/549/",  function( data ) {
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
    $( "#idp" ) .append(  data.id ) //  2pm
    
  
  $( "#nsp" ).append( "<img src= " + data.sprites.front_shiny + ">" ) 
  $( "#ssp" ).append( "<img src= " + data.sprites.back_default+ ">" ) 
  $( "#name" ).append(  data.name ) // John
  $( "#type" ).append(  data.types[0].type.name ) 
}, "json" );