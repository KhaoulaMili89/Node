var  fs  =  exiger ( 'fs' ) ;
var  fileName  =  processus . argv [ 2 ] ;


fs . readFile ( fileName ,  'utf8' )
  function f ( err ,  données )  {
	if  ( err )  {
		  err ;
	}
	else  {
		var  nbLines  =  données . toString ( ) . split ( '\ n' ) . longueur  - 1  ;
		console . log ( nbLines ) ;
	}
} 