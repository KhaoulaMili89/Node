var  mymodulelist  =  require ( './mymodule.js' ) ;

var  dirWanted  =  "." ;
if  ( processus . argv [2]  !==  null )  {
	dirWanted  =  processus . argv [ 2 ] ;
}

var  extWanted  =  "*" ;
if  ( processus . argv [ 3 ]  !==  null )  {
	extWanted  =  processus . argv [ 3 ] ;
}

mymodulelist ( dirWanted ,  extWanted ,  function ( err ,  list )  {
	if  ( err )  {
		Console.log ( err ) ;
	}
	liste . forEach ( fonction ( fichier ), 

		Console.log ( fichier ) )})
