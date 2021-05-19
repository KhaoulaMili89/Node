var  http  =  require ( "http" ) ;
var  fs  =  require ( "fs" ) ;


// Arguments de l'utilisateur ou valeurs par défaut
var  demandéPort  =  8080 ;
if  ( processus . argv [ 2 ]  !==  null )  {
	requestedPort  =  parseInt ( processus . argv [ 2 ] ,  10 ) ;
}
var  fileLocation  =  "allo.txt" ;
if  ( processus . argv [ 3 ]  !==  null )  {
	fileLocation  =  processus . argv [ 3 ] ;
}

// Créer un serveur http
 serveur  var =  http . createServer ( fonction ( req ,  res )  {

	// Ouvre le fichier en tant que flux lisible
	var  readStream  =  fs . createReadStream ( fileLocation ) ;

	// Le flux est valide pour la tuyauterie
	readStream . on ( "open" ,  function ( )  {

		// res.writeHead (200, {'content-type': 'text / plain'})

		// Pipes le flux de lecture vers l'objet de réponse (qui va au client)
		readStream . tuyau ( res ) ;
	} ) ;

	// Attrape toutes les erreurs lors de la création du flux
	readStream . on ( "erreur" ,  fonction ( err )  {
		res . end ( err . toString ( ) ) ;
	} ) ;
} ) ;

// Commence à écouter
serveur . écouter ( requiredPort ) ;