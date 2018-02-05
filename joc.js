function cuadrado(numero) {
	console.log(9);
   return numero*numero;
}

function par(numero) {
	if(numero%2===0) return true;
	return false;
}

window.onload=function(){
	document.getElementById('potato').innerHTML ="hola";
	document.getElementById("botoguay").onclick = function(){alert(1);};
}

//Calcular si los lados dados pertenecen a un rectángulo o a un cuadrado.
function rectangulo(n1,n2) {
	if(n1!==n2) return "rectangulo";
	return "cuadrado";
}

//Calcular el factorial de un número dado.
function factorial (n) {
    var total = 1; 
    for (i=1; i<=n; i++) {
    	total = total * i; 
    }
    return total; 
}
//Crear una función que calcule la velocidad de una bala (en metros).

// Crear una función que evalúe cuál de 4 números es el mayor.
function mayorde4(n1,n2,n3,n4) {
   	var total=n1; 
    for (i=0; i<3; i++) {
    	if(n2>total)total=n2;
    	if(n3>total)total=n3;
    	if(n4>total)total=n4;
    }
   	return total; 
}

// Calcular el MCM y MCD de un número.
var mcd = function (a,b) {
  return (b===0) ? a:mcd(b, a%b);};

//Calcular mcm por el Algoritmo de Euricles: mcm = a*b/mcd(a,b);
var mcm = function (a, b){ 
  return a*b/mcd(a,b);};

function smallestCommons(arr) {
  arr = arr.sort(); 
  var arr2 = Array.from(new Array(arr[1] - arr[0] + 1), function (_, i)  {return i + arr[0]});
//reducimos el array calculando cada numero por el mcm anterior.
return arr2.reduce(function(a,b){
  document.write("a " + a + " b " + b + " = " + mcm(a,b)+"<br>");
  return mcm(a,b)});
}

document.write(smallestCommons([1,5]));


// Crear una función que ejecute otra función.

function execfuncio(){
	return cuadrado(4);
}