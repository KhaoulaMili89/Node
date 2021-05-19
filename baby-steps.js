var  somme  =  0 ;
var  nbArgs  =  processus . argv . longueur ;
for  ( i = 2 ;  i < nbArgs ;  i ++ )  {
	somme  +=  nombre ( process . argv [ i ] ) ;
}
console . log ( somme ) ;