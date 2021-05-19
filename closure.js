var  http  =  require ( "http" ) ;
var  bufferList  =  require ( "bl" ) ;

var  urlsToGet  =  [ ] ;
var  dataOrdered  =  [ ] ;
var  indexLoaded  =  0 ;
var  i ;


// paramètres
if  ( process . argv [ 2 ]  ===  undefined )  {
	// urls par défaut si pas de paramètres
	urlsToGet  =  [ "http://faubourgsimone.paris/" ,  "http://proustib.at" ,  "http://usine.io" ] ;
}
else  {
	// récupération des 3 urls passées en arguments
	for  ( i  =  0 ;  i  <  process . argv . length  -  2 ;  i ++ )  {
		if  ( process . argv [ i  +  2 ]  ! ==  indéfini )  {
			urlsToGet [ i ]  =  processus . argv [ i  +  2 ] ;
		}
	}
}

// Boucle de chargement des urls
for  ( i  =  0 ;  i  <  urlsToGet . length ;  i ++ )  {
	( fonction ( index ) {
		// traitement
		http . get ( urlsToGet [ index ] ,  fonction ( réponse )  {
			réponse . pipe ( bufferList ( fonction ( err ,  données )  {
				if  ( err )  {
					retour de la  console . erreur ( err ) ;
				}
				dataOrdered [ index ]  =  données . toString ( ) ;
				indexLoaded ++ ;

				if  ( indexLoaded  ===  3 )  {
					pour  ( var  i  =  0 ;  i  <  3 ;  i ++ )  {
						console . log ( dataOrdered [ i ] ) ;
					}
				}
			} ) ) ;

		} ) . on ( 'erreur' ,  fonction ( e )  {
			console . error ( "Got error:"  +  e . message ) ;
		} ) ;
	} ) ( i ) ;
}