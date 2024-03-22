let randomNumber = Math.floor(Math.random() * 100) ;
console.log(randomNumber) // Generate a random number between 1 and 100
let tries=0

while(true){
    let number=prompt("GUES THE NUMBER TRY "+tries);
    tries++;

if(number==randomNumber)    
{
    alert("you did it");
    alert("nigga dont be too happy its not ur first try");
    alert("nigga you took " +tries+" tries");  
    break;
}
else{ 
    if(randomNumber < number)
    {alert("try again nigga number is high");}
    else
    {alert('try again nigga number is low' );}
    
}
}
