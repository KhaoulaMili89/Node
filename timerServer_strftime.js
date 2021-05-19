var  net  =  require ( "net" ) ;
var  strftime  =  require ( "strftime" ) ;

// Arguments de l'utilisateur
var  demandéPort  =  8080 ;
if  ( processus . argv [ 2 ]  !==  null )  {
	requestedPort  =  parseInt ( processus . argv [ 2 ] ,  10 ) ;
}

// Nouveau serveur TCP
var  serveur  =  net . createServer ( fonction ( socket )  {
	prise . end ( strftime ( '% F% R' ,  nouvelle  date ( ) )  +  "\ n" ) ;  // https://github.com/samsonjs/strftime
} ) ;



serveur . écouter ( requiredPort ) ;

