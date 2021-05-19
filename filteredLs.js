var  fs  =  require ( "fs" ) ;
var  chemin  =  require ( "chemin" ) ;
var  dirWanted  =  "." ;
if  (  processus .argv[2]  !==  null )  {
	dirWanted  =  processus . argv [ 2 ] ;
}
var  extWanted  =  "*" ;
if  ( processus.argv[3]  !==  null )  {
	extWanted  =  processus . argv [ 3 ] ;
}
fs . readdir ( dirWanted ,  fonction ( err ,  liste )  ;
	if  ( err )  {
		console . log ( err ) 
	}
	else  {
		liste . forEach ( fonction ( élément ,  index )  ;
			if  ( extWanted ===  "*" )  {
				console . log ( élément . toString ( ) ) ;
			}
			else  if  ( chemin . nomext ( élément )  ===  "."  +  extWanted )  {
				console . journal ( élément ) ;
			}
		 
	}
 