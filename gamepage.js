// generation of random value
var y = Math.floor(Math.random * 10+1) ;
// count of attempts
var x = document.getElementsById("guessField").value ;
// until hit
 if( x == y )
 {
    alert("CONGRATULATIONS!!!!!!!!!!!!!!!!!!!"+player_name+"YOU GUESSED RIGHT IN "+guess+"GUESS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;
    guess=1;
 }
 else if(x>y)
 {
    guess++ ;
    alert(" OOPS SORRY !!!!!!!!!!!TRY A smaller NUMBER") ;

 }
 else 
 {
    guess++ ;
    alert(" OOPS SORRY !!!!!!!!!!!TRY A GREATER NUMBER") ;
 }
// function for the number sent by the user
function playAgain()
{
    y = Math.floor(Math.random () *10+1) ;
}
