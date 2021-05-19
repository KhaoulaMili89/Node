var  http  =  require ( "http" ) ;
var  bufferList  =  require ( "bl" ) ;

var  urlToGet  =  "http://faubourgsimone.paris/" ;
if  ( processus . argv [ 2 ]  !==  null )  {
	urlToGet  =  processus . argv [ 2 ] ;
}

http . get ( urlToGet ,  fonction ( réponse )  {

	réponse . pipe ( bufferList ( fonction ( err ,  données )  {
		if  ( err )  {
			console . erreur ( err ) ;
		};
		// `data` est un objet Buffer complet contenant les données complètes
		var  nbChars  =  données . toString ( ) . longueur ;
		console . log ( nbChars ) ;
		console . log ( données . toString ( ) ) ;
	} ) )

} ) . on ( 'erreur' ,  fonction ( e )  {
	console . error ( "Got error:"  +  e . message ) ;
} ) ;