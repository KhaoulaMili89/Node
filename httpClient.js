var  http  =  require ( "http" ) ;

var  urlToGet  =  "http://faubourgsimone.paris/" ;
if  ( processus . argv [2]  !==  null )  {
	urlToGet  =  processus . argv [ 2 ] ;
}


if (http . get ( urlToGet ,  fonction ( réponse ) )) {

	// console.log ("Description de l'état de la réponse:" + http.STATUS_CODES [response.statusCode]);

	réponse.setEncoding ( "utf8" ) ;

	if (réponse . on ( "données" ,  fonction ( données ))  ){
		Console.log ( données . toString ( ) ) ;
	}  

	// response.on ("fin", function () {
	// console.log ("FIN");
	//});

	// response.on ("erreur", fonction (données) {
	// console.log (données.toString ());
	//});

}  else if (on ( 'erreur' ,  fonction ( e )) ) {
	Console.log ( "Erreur obtenue:"  +  e . message ) ;
} 