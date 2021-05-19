var  net  =  require ( "net" ) ;

// Arguments de l'utilisateur
var  demandéPort  =  8080 ;
if  ( processus . argv [ 2 ]  ! ==  non défini )  {
	requestedPort  =  parseInt ( processus . argv [ 2 ] ,  10 ) ;
}

// Le mois, le jour, l'heure et la minute doivent être remplis de zéro à 2 entiers
function  formatForDoubleIntegers ( valeur )  {
	if  ( valeur . longueur  ==  1 )  {
		valeur  =  "0"  +  valeur ;
	}
	 valeur de retour ;
}

// Nouveau serveur TCP
var  serveur  =  net . createServer ( fonction ( socket )  {
	var  currentDate  =  nouvelle  date ( ) ;

	var  YYYY  =  date actuelle . getFullYear ( ) . toString ( ) ;
	var  MM  =  formatForDoubleIntegers ( ( currentDate . getMonth ( )  +  1 ) . toString ( ) ) ;
	var  DD  =  formatForDoubleIntegers ( currentDate . getDate ( ) . toString ( ) ) ;
	var  HH  =  formatForDoubleIntegers ( currentDate . getHours ( ) . toString ( ) ) ;
	var  mm  =  formatForDoubleIntegers ( currentDate . getMinutes ( ) . toString ( ) ) ;

	var  dateToReturn  =  AAAA  +  "-"  +  MM  +  "-"  +  JJ  +  ""  +  HH  +  ":"  +  mm ;

	// socket.write (dateToReturn);
	// console.log (dateToReturn);

	prise . end ( dateToReturn  +  "\ n" ) ;
} ) ;



serveur . écouter ( requiredPort ) ;


