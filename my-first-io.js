var  fileName  =  processus . argv [ 2 ] ;
var  fs  =  exiger ( 'fs' ) ;
var  buf  =  null ;
var  nbLines  =  null ;
try  {
	buf  =  fs . readFileSync ( fileName ,  'utf8' ) ;
	var  buffStr  =  buf . toString ( ) ;
	var  linesArr  =  buffStr . split ( '\ n' ) ;
	nbLines  =  linesArr . longueur  - 1 ;  // -1 à cause de la ligne à la fin du fichier
	console . log ( nbLines ) ;
}
catch  ( e )  {
	console . log ( e ) ;
}