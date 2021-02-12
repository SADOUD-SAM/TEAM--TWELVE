// Exo 1 
var y = Math.floor(Math.random() * 100 + 1);                   // Variable pour le Nombre choisit par l'ordinateur pour la partie 1
var CPUChoice= Math.floor(Math.random() * Math.floor(100));    // Vairable pour le nombre choisit par l'ordinateur pour la partie 2
var valmin = 0;                                                // Variable pour la valeur minimal possible ( partie 2)
var valmax = 100;                                              // Variable pour la valeur maximal possible ( partie 2)
var guessNbr = 1;                                              // Variable pour le nombre d'essaies du user
var guessNbr2 = 1;                                             // Variable pour nombre d'essaies de l'ordinateur
var Guess="Is your number"
const reset = document.querySelector(".reset");                // Variables pour utilser l'input de notre HTML, pour les boutons reset des 2 parties
const reset2 = document.querySelector(".reset2");              // Variables globales pour nos fonctions

document.getElementById("submitguess").onclick = function()    // Fonction qui se lance si on click sur le bouton "Valider"
{
let x = document.getElementById("guessField").value;           // Variable qui stocke notre input de chiffre
const parsed=parseInt(x)                                       // Variable qui definit l'entier le plus proche de l'input
document.getElementById("reset").style.display="inline-block"; // Montre le bouton reset
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

if(x == parsed){                                               // Si la variable qui contient notre input est egal a la variable qui contient son entier le plus proche

    if(x == y)                                                 // Si notre input est egal au nombre choisit par l'ordinateur 
    {      
    document.getElementById("guessField").style.display="none"; //
    document.getElementById("submitguess").style.display="none"; //
    document.getElementById("reset").style.display="none";       // On cache ces elements
    document.getElementById("continue").style.display = "inline-block"; //
    document.getElementById("raiponce").innerText = "Congrats, you found the correct number in "+ guessNbr + " attempt(s) !"; // On montre ces elements
    document.getElementById("continue").onclick = function(){     // Si on click sur le bouton "Continuer" on appelle cette fonction
        document.getElementById("box2").style.display = "flex";   //
        document.getElementById("box").style.display = "none";    // On cache le partie 1 pour montrer la partie 2 
    }
    } 
    else if(x > y)                                               // Si notre input est superieur au nombre choisit par l'ordinateur
    {     
    guessNbr++;                                                  // Incrementation de la variable pour le nombre d'essaies utilisateur 
    document.getElementById("raiponce").innerText = "It's lower!"// Affichage de la reponse de l'ordinateur
    } 

    else if(x < y )                                                 // Si notre input est inferieur au nombre choisit par l'ordinateur
    { 
    guessNbr++;                                                  //
    document.getElementById("raiponce").innerText = "It's higher !"//
    } 
    }
    else{                                                         // Sinon on cache le bouton pour reset et on affiche un message d'erreur
    document.getElementById("reset").style.display = "none";   
    document.getElementById("raiponce").innerText = "Invalid value. Please enter an integer."
    }

}

reset.onclick = function(){                                       // Fonction pour le bouton reset
 guessNbr = 1;                                                    // Reset nombre essaies user
 y = Math.floor(Math.random() * 100 + 1);                         // Reset du nombre choisit par l'ordinateur
 document.getElementById("reset").style.display="none";           // On cache le bouton
}

// ===========================Part2========================================//

function UserChoice() {   
    document.getElementById("reset2").style.display="none"                                 

    if(UserChoice){
        document.getElementById("reset2").style.display="inline-block"; // 
        document.getElementById("EnterNbr").style.display="none";       //
        document.getElementById("UserChoice").style.display="none";     //
        document.getElementById("Higher").style.display="inline-block"; //
        document.getElementById("Lower").style.display="inline-block";  //
        document.getElementById("Yes").style.display="inline-block";    //
        document.getElementById("answer").style.display="inline-block"; // On montre ou cache ces elements selon si on a cliquer sur le bouton commencer
        document.getElementById("answer").innerText = Guess +" "+ CPUChoice +" ?" // Affichage de la reponse de l'ordinateur
    }  

}
function PlusHaut(){                                                    // Fonction qui determine le comportement du ce bouton "Plus Haut"
    valmin = CPUChoice;                                                 // Si on dit que notre chiffre est plus haut, la valeur minimal est egal au nombre propose par l'ordinateur
    let LASTCPUChoice = parseInt(CPUChoice);
    CPUChoice = ((valmax - valmin)/2) + valmin;                         // On determine le meilleur "guess" possible de l'ordinateur 
    let NEWCPUChoice = parseInt(CPUChoice);
    document.getElementById("answer").innerText = Guess +" "+ Math.round(CPUChoice) +" ?"; // Affichage de la reponse de l'ordinateur
    guessNbr2++;                                                        // Incrementation nombre d'essaies de l'ordinateur
    console.log(CPUChoice)

    if (NEWCPUChoice == LASTCPUChoice ){  // Condition "anti triche"
        alert("Cheater ! :)");
        guessNbr = 9999999
    }

}

function PlusBas(){                                                     // Fonction qui determine le comportement du ce bouton "Plus Bas"
    valmax = CPUChoice;                                                 // Si on dit que notre chiffre est plus bas, la valeur maximal est egal au nombre propose par l'ordinateur
    let LASTCPUChoice = parseInt(CPUChoice);
    CPUChoice = ((valmax - valmin)/2) + valmin;                         // On determine le meilleur "guess" possible de l'ordinateur 
    let NEWCPUChoice = parseInt(CPUChoice);
    document.getElementById("answer").innerText = Guess +" "+ Math.round(CPUChoice) +" ?"; // Affichage de la reponse de l'ordinateur
    guessNbr2++;                                                        // Incrementation nombre d'essaies de l'ordinateur
    console.log(CPUChoice)
    
    if (NEWCPUChoice == LASTCPUChoice ){ // Condition "anti triche"
        alert("Cheater ! :)");
        guessNbr = 9999999
    }


}
function res(){                                                         // Fonction pour le comportement du bouton "Voir les scores"
    let Win2="Congrats ! Your score of  " + guessNbr + " attempt(s) is lower than your opponent's score of " + guessNbr2 + " attempt(s) !";//
    let lose="Sorry ! Your score of " + guessNbr + " attempt(s) is higher than your opponent's score of " + guessNbr2 + " attempt(s). Better luck next time !";//
    let Equal="It's a draw ! You both have a score of " + guessNbr + " attempt(s). Better luck next time !";//// Affichage du score
    document.getElementById("res").style.display="none"// On cache ses elements quand on affiche le resultat final
    if(guessNbr2== 0){
        guessNbr2=1
    }

    if(guessNbr<guessNbr2){                             // Si notre nombre d'essaies est inferieur a celui de l'ordinateur
        document.getElementById("answer").innerText = Win2;// Affichage de la variable qui contient le message de fin en cas de victoire
    }
    else if(guessNbr>guessNbr2){                             // Si notre nombre d'essaies est superieur a celui de l'ordinateur
        document.getElementById("answer").innerText = lose; // Affichage de la variable qui contient le message de fin en cas de defaite
    }
    else if(guessNbr==guessNbr2){                           // Si notre nombre d'essaies est egal a celui de l'ordinateur
        document.getElementById("answer").innerText = Equal; // Affichage de la variable qui contient le message de fin en cas de match nul
    }
    
}

function OUI(){                                             // Fonction qui determine le comportement du bouton "Oui"
    let Win1=" Yes ! That only took me " + guessNbr2 + " attempt(s) !";   // Variable qui contient le texte a afficher
    guessNbr2--;                                            // Incrementation pour afficher le bon score
    document.getElementById("h12").style.display="none";    //
    document.getElementById("p12").style.display="none";    // 
    document.getElementById("answer").innerText = Win1;     //
    document.getElementById("Higher").style.display="none"; //
    document.getElementById("Lower").style.display="none";  //
    document.getElementById("Yes").style.display="none";    // 
    document.getElementById("res").style.display="inline-block"; // 
    document.getElementById("reset2").style.display="none";      //// On montre ou cache ces elements selon si on a cliquer sur le bouton 'Oui'

}
reset2.onclick = function(){                           // Fonction pour le bouton reset
    guessNbr2 = 0;                                     // Reset nombre d'essaies de l'ordinateur
    CPUChoice=  Math.floor(Math.random() * Math.floor(100)); // Reset du "guess" de l'ordinateur
    valmin = 0;  //                                    
    valmax = 100;// Reset de ces variables a leur valeur initial
    document.getElementById("answer").innerText = "You decide to pick a new number ... Really though ? ..."; // Afficher ce texte si on click sur ce bouton
    document.getElementById("Higher").style.display="none";//
    document.getElementById("Lower").style.display="none";//
    document.getElementById("Yes").style.display="none";//
    document.getElementById("UserChoice").style.display="inline-block";//
    document.getElementById("reset2").style.display="none"; //// On montre ou cache ces elements selon si on a cliquer sur le bouton reset

}