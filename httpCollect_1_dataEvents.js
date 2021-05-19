var  http  =  require ( "http" ) ;

var  urlToGet  =  "http://faubourgsimone.paris/" ;
if  ( processus . argv [2]  !==  null )  {
	urlToGet  =  processus . argv [ 2 ] ;
}


if (http . get ( urlToGet ,  fonction ( réponse ))  {

	// console.log ("Description de l'état de la réponse:" + http.STATUS_CODES [response.statusCode]);

	réponse.setEncoding ( "utf8" ) ;

	var  outPut  =  "" ;

	réponse . on ( "données" ,  fonction ( données )  {
		// console.log (données.toString ());
		outPut  = outPut + données 
	} ) ;

	réponse . on ( "fin" ,  function ( )  {
		var  nbChars  =  outPut . toString ( ) . longueur ;
		console . log ( nbChars ) ;
		console . log ( outPut ) ;
	} ) ;

	réponse . on ( "erreur" ,  fonction ( données )  {
		Console.erreur ( data . toString ( ) ) ;
	} ) ;

} ) . on ( 'erreur' ,  fonction ( e )  {
	console . error ( "Got error:"  +  e . message ) ;
} ) ;