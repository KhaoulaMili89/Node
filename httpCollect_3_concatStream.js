var  http  =  require ( "http" ) ;
var  concatStream  =  require ( 'concat-stream' )

var  urlToGet  =  "http://faubourgsimone.paris/" ;
if  ( processus . argv [ 2 ]  !==  null )  {
	urlToGet  =  processus . argv [ 2 ] ;
}

http . get ( urlToGet ,  fonction ( réponse )  {

	réponse . pipe ( concatStream ( fonction ( données )  {
		var  nbChars  =  données . toString ( ) . longueur ;
		console . log ( nbChars ) ;
		console . log ( données . toString ( ) ) ;
	} ) )


} ) . on ( 'erreur' ,  fonction ( e )  {
	console . error ( "Got error:"  +  e . message ) ;
} ) ;