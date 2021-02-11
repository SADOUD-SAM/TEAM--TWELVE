// Exo 1 
var CPUChoice= 50; /*Math.floor(Math.random() * Math.floor(100));*/
var valmin = 0;
var valmax = 100;
var y = 50;
var guessNbr = 1; 
var guessNbr2 = 1;
var ResetTXT = "VOUS DECIDEZ DE CHOISIR UN NOUVEAU NOMBRE...Really ?";
let Guess="Votre nombre est il"; 
let Win1="Bravo, Vous avez trouvé le nombre !!!"
const reset = document.querySelector(".reset");
const reset2 = document.querySelector(".reset2");

document.getElementById("submitguess").onclick = function() //A verifier meaning
{
let x = document.getElementById("guessField").value; 
const parsed=parseInt(x)
document.getElementById("reset").style.display="inline-block";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
if(x == parsed){    
    // console.log(x)
    // console.log(parseInt(x))
    console.log(guessNbr)
    if(x == y) 
    {      
    document.getElementById("guessField").style.display="none";
    document.getElementById("submitguess").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("continue").style.display = "inline-block";

    document.getElementById("raiponce").innerHTML = "Bravo vous avez trouver le juste prix en "+ guessNbr + " Essaies ";

    document.getElementById("continue").onclick = function(){
        document.getElementById("box2").style.display = "inline-block";
        document.getElementById("box").style.display = "none";   
    }
    } 
    else if(x > y)
    {     
    guessNbr++; 
    document.getElementById("raiponce").innerHTML ="It's lower!"
    // alert("C'est Plus Bas !"); 
    } 

    else if(x<y)
    { 
    guessNbr++; 
    document.getElementById("raiponce").innerHTML = "It's higher !"
    // alert("C'est Plus Haut !"); 
    } 
    }
    else{
    document.getElementById("raiponce").innerHTML = "Error message for none integer"
    // alert("Error message for none integer")
    }

}

reset.onclick = function(){
 guessNbr = 1;
 var y = Math.floor(Math.random() * 100 + 1);//Reset random doesn't work
 reset.textContent = "Reset";
 document.getElementById("reset").style.display="none";
}

// ===========================Part2========================================//

function UserChoice() {
    document.getElementById("guessField").value; 
    document.getElementById("reset2").style.display="inline-block";


    if(UserChoice){
        document.getElementById("EnterNbr").style.display="none";
        document.getElementById("UserChoice").style.display="none";
        document.getElementById("Higher").style.display="inline-block";
        document.getElementById("Lower").style.display="inline-block";
        document.getElementById("Yes").style.display="inline-block";
        document.getElementById("answer").style.display="inline-block";
        document.getElementById("answer").innerHTML = Guess +" "+ CPUChoice +" ?";
        
        
    }  

}
function PlusHaut(){
    valmin = CPUChoice;
    CPUChoice = ((valmax - valmin)/2) + valmin;
    document.getElementById("answer").innerHTML = Guess +" "+ Math.round(CPUChoice) +" ?"; 
    console.log("CPUChoice",CPUChoice);
    console.log("valmin",valmin);
    console.log("valmax",valmax);
    console.log(guessNbr);
    console.log(guessNbr2);
    guessNbr2++;

}

function PlusBas(){
    valmax = CPUChoice;
    CPUChoice = ((valmax - valmin)/2) + valmin;
    document.getElementById("answer").innerHTML = Guess +" "+ Math.round(CPUChoice) +" ?";
    console.log("CPUChoice",CPUChoice);
    console.log("valmin",valmin);
    console.log("valmax",valmax);
    console.log(guessNbr);
    console.log(guessNbr2); 
    guessNbr2++;            
}
function res(){
    let Win2="Bravo, Votre score de " + guessNbr + " essaies est moins élevé que le score de " + guessNbr2 + " essaies de votre adversaire";
    let lose="Désolé, Votre score de " + guessNbr + " essaies est plus élevé que le score de " + guessNbr2 + " essaies de votre adversaire";
    let Equal="Match nul ! Vous avez tous les deux le score de " + guessNbr + " essaies";
    console.log(guessNbr);
    console.log(guessNbr2);
    document.getElementById("h12").style.display="none";
    document.getElementById("p12").style.display="none";
    document.getElementById("res").style.display="none";

    if(guessNbr<guessNbr2){
        document.getElementById("answer").innerHTML = Win2
    }
    if(guessNbr>guessNbr2){
        document.getElementById("answer").innerHTML = lose
    }
    if(guessNbr==guessNbr2){
        document.getElementById("answer").innerHTML = Equal
    }
}

function OUI(){
    guessNbr2--;
    document.getElementById("answer").innerHTML = Win1;
    document.getElementById("Higher").style.display="none";
    document.getElementById("Lower").style.display="none";
    document.getElementById("Yes").style.display="none";
    document.getElementById("res").style.display="inline-block";
    document.getElementById("reset2").style.display="none";
    console.log(guessNbr);
    console.log(guessNbr2);
}
reset2.onclick = function(){
    guessNbr2 = 0;
    reset2.textContent = "Reset";
    CPUChoice= 50;
    valmin = 0;
    valmax = 100;
    document.getElementById("answer").innerHTML = ResetTXT;
    document.getElementById("Higher").style.display="none";
    document.getElementById("Lower").style.display="none";
    document.getElementById("Yes").style.display="none";
    document.getElementById("UserChoice").style.display="inline-block";
    document.getElementById("reset2").style.display="none";

}


// document.getElementsByClassName("continue").onclick = function(){
//    document.getElementById("box2").style.display = "inline-block";
//    document.getElementById("box").style.display = "none";
// }

/*{ <div> 
     <label id="textprix" for="guessField">Entrer Un Prix: </label> 
     <input type = "number" id = "guessField" class = "guessField" placeholder="Prix"> 
     <input type = "submit" value = "Valider" class = "guessSubmit" id = "submitguess"> 
     <input id="reset"     type="button" class="reset"       value="Reset">
     <input id="continue" type="button" class="continue"      value="Pass Part 2">
</div>  }*/










// ife(guessNbr>99){ END CONDITION
//    alrt("GAME START OVER");
//    var y = Math.floor(Math.random() * 100 + 1);
//    guessNbr=1;
// }
// else{