var  http  =  require ( "http" ) ;
var  urlMod  =  require ( "url" ) ;


// Arguments de l'utilisateur ou valeurs par défaut
var  demandéPort  =  8080 ;
if  ( processus . argv [ 2 ]  !==  null )  {
	requestedPort  =  parseInt ( processus . argv [ 2 ] ,  10 ) ;
}

// Créer un serveur http
 serveur  var =  http . createServer ( fonction ( req ,  res )  {

	// Contrôle pour favicon
	if  ( req . url  ===  '/favicon.ico' )  {
		res . writeHead ( 200 ,  {
			'Content-Type' : 'image / x-icon'
		} ) ;
		res . fin ( ) ;
		retour ;
	}


	// Récupère le chemin (routes)
	var  urlStr  =  req . url ;
	var  urlObj  =  urlMod . parse ( req . url ,  true ) ;
	var  chemin d'accès  =  urlObj . chemin . toLowerCase ( ) ;


	// Récupère la requête (variables dans l'url)
	var  query  =  urlObj . requête ;
	var  iso  =  requête . iso ;

	// Définir le type de contenu pour la réponse JSON
	res . writeHead ( 200 ,  {
		'Content-Type' : 'application / json'
	} ) ;

	// Créer un objet Date
	var  date  =  nouvelle  date ( iso ) ;

	// L'objet dépend de l'itinéraire
	var  dataObj  =  null ;
	if  ( chemin d'accès  ===  "/ api / parsetime" )  {
		dataObj  =  {
			"heure" : date . getHours ( ) ,
			"minute" : date . getMinutes ( ) ,
			"second" : date . getSeconds ( )
		} ;
	}
	else  if  ( chemin d'accès  ===  "/ api / unixtime" )  {
		dataObj  =  {
			"unixtime" : date . getTime ( )
		} ;
	}
	else  {
		res . write ( "Pas de données ici!" ) ;
	}

	// JSON
	if  ( dataObj  ! ==  null )  {
		var  dataToSend  =  JSON . stringify ( dataObj ) ;
		res . écrire ( dataToSend ) ;
	}

	// Fermer
	res . fin ( ) ;

} ) ;

serveur . écouter ( requiredPort ) ;