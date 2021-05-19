var  http  =  require ( "http" ) ;
var  map  =  require ( "through2-map" ) ;

// Arguments de l'utilisateur ou valeurs par défaut
var  demandéPort  =  8080 ;
if  ( processus . argv [ 2 ]  !==  null )  {
	requestedPort  =  parseInt ( processus . argv [ 2 ] ,  10 ) ;
}

// Créer un serveur http
 serveur  var =  http . createServer ( fonction ( req ,  res )  {

	// Vérifie si la méthode POST
	if  ( req . method  !=  "POST" )  {
		res . end ( "Méthode POST demandée!" ) ;
		retour ;
	}

	// Créer une carte pour transformer les personnages
	var  upperCaseMap  =  map ( fonction ( bloc )  {
		 morceau de retour . toString ( ) . toUpperCase ( ) ;
	} ) ;

	// Utiliser la carte
	var  valueToReturn  =  req . pipe ( upperCaseMap ) ;

	// Transmet le résultat à l'objet de réponse
	valueToReturn . tuyau ( res ) ;

} ) ;

serveur . écouter ( requiredPort ) ;