  
   
   // var message = window.alert("Jacadi à dit :cliquez sur OFF pour allumer le jeu,puis sur START pour démarrer!!!") 
     
    
    const red = document.querySelector(".red");
    const green = document.querySelector(".green");
    const yellow = document.querySelector(".yellow");
    const blue = document.querySelector(".blue");
    const OnButton = document.querySelector("#on");
    const levelCounter = document.querySelector(".level");
    const startButton = document.querySelector(".start");
    let off = document.querySelector(".off");
    let arrayColors= [red,yellow,blue,green];
    let audio1 = document.getElementById("son1");
    let audio2 = document.getElementById("son2");
    let audio3 = document.getElementById("son3");
    let audio4 = document.getElementById("son4");
    let audioWrongClick = document.querySelector("#ButtonWrongClick");
    let strict = document.querySelector(".strict")



    let canClick = false;
    let computerOrder = [];
    let playerOrder = [];
    let level = 0;
    let audio = false;
    
    let light =0;
    let interval;
    let matchingArrays= true;
    let game;
     
    
    

    /* fonction qui permet au clic de l'utilisateur ,d'ajouter les chiffre 1,2,3,4 correspondant aux couleurs green, blue ,yellow red*/
    
   let redClick = red.onclick =function(){
        
        red.style.background ="tomato";
        setTimeout(darkcolors,400)
         
        audio1.play();
        
        playerOrder.push(1)
        console.log(playerOrder)
        console.log(goodClick("playerOrder length:"+playerOrder.length));
        console.log("blue onclick :"+level.length)
        console.log("blue onclick :"+light.length)
       
       
       
        goodClick();
        
        }


    let greenClick =green.onclick = function(){
        green.style.background = "lightgreen";
        audio4.play();
        setTimeout(darkcolors,400)
        sound =true;
        playerOrder.push(4)
        console.log(playerOrder)
        
        goodClick();
        
        }


     let blueClick =blue.onclick = function(){
        
        audio3.play();
        blue.style.background = "lightskyblue";
        setTimeout(darkcolors,400)
        sound = true;
        playerOrder.push(3)
        console.log(playerOrder);
        goodClick();
        
    
    }


     let yellowClick =yellow.onclick = function(){
        
        yellow.style.background = "yellow";
        setTimeout(darkcolors,300);
        sound  = true;
        playerOrder.push(2)
        audio2.play();
        console.log(playerOrder);
       
        goodClick();
        
        
    }
     /*fonction qui rassemble les fonction clic des couleurs*/
    function playerOrderArray(){
        redClick();
        yellowClick();
        blueClick();
        greenClick ();
    }



/* couleurs qui vont apparaitre au flash des couleurs de l'ordinateur*/

        function lightcolors(){
        red.style.background ="white";
        yellow.style.background = "white";
        blue.style.background = "white";
        green.style.background = "white";
    
    }

/* fonction correspondant aux couleurs qui apparaitrons au clic de l'utilisateur,en répétition au click de l'ordinateur*/

        function darkcolors(){
        red.style.background ="#ee6055";
        green.style.background ="#7DD877";
        yellow.style.background = "#ffd97d";
        blue.style.background = "#38a3a5";
    
    }



    
      /* fonction correspondant au clic du bouton on et off */

        function clickOnButton(){
        if (OnButton.checked == true){
            on = true;
            off.innerHTML = "ON";
            levelCounter.innerHTML = ("salut, clique sur start et à toi de jouer!!")
            
         } else{
            on = false;
        
            clearInterval(interval)
            off.innerHTML ="OFF";
            startButton.innerHTML ="START"
            
             
        
        }
        }
        
         OnButton.addEventListener('click',clickOnButton)

        function clickOffButton(){
        if (off.checked == true){
            off = true;
            game =false;
            darkcolors();
            level =0;
            light = 0;
            sound = false;
            canClick = false;
            on = true;
            levelCounter.innerHTML = "clique sur start pour commencer ";
            startButton.innerHTML ="START"
        

         }

            
            
           
        }
    
    off.addEventListener('click',clickOffButton)
    


    
/* fonction correspondant au clic du bouton start*/
        function clickStartButton(){
        if (on){
        startButton.innerHTML="START";
        startButton.style.background = "#7DD877";
        startButton.style.color = "white";
        levelCounter.innerHTML =("Clique sur -ON -pour allumer le jeu")
        
        
        }else{
            sound = false;
            darkcolors();
            startButton.innerHTML = "START"
        }
        }


         clickStartButton();
         
         startButton.onclick = function(){
         startButton.innerHTML ="C'est parti!";
         randomColors();
         
         
        
        }
        
        

        
            

     /*function qui declenche de façon aleatoire les chiffres 1,2,3,4 , qui corresponde à des couleurs.*/

        function randomColors(){
    
        playerOrder =[];
        level = 1;
        light = 0;
        computerOrder =[];
        playerOrder = [];
        sound =true;
        interval = 0;
        //good = true;
        levelCounter.innerHTML = "Level-"+ 1;
        for(var i = 0;i<10; i++){
        computerOrder.push(Math.floor(Math.random() * 4)+1)
         console.log(computerOrder);
        
                } 
                game = true;
               interval = setInterval(orderColor,800)
               
              
            }
        
        
        /* fonction qui attribut  une autre  fonction à chaque chiffre 1,2,3,4 ces fonctions permettront de définir la couleur et  le son attribué aux chiffres 1,2,3,4*/
        //et qui déclenchera les flash
        function orderColor() {
            on =false;
            if(light==level){
              clearInterval(interval)
              game = false;
               darkcolors()
                on = true;
                
            }
           if( game){
            on = true;
            darkcolors();
           // setTimeout(() => {
            if(computerOrder[light] == 1)
             numberOne();
            if(computerOrder[light] == 2)
             numberTwo();
            
            if(computerOrder[light] == 3) 
            numberThree(); 
            
            if(computerOrder[light] == 4) 
             numberFour();
            light ++;
           //}, 300);
           setTimeout(game,300)
          console.log(orderColor)
         }
        
    }
  
   //  function computerOrderArray(){
      //  if(computerOrder ==numberOne){
         //   computerOrder = [1];
         //   console.log(computerOrder)
        //}
       // if(computerOrder == numberTwo){
         //   computerOrder = [2];
          //  console.log(computerOrder)
       // }
       // if(computerOrder== numberThree){
          //  computerOrder = [3];
          //  console.log(computerOrder);
       // }
       // if (computerOrder == numberFour)
       // computerOrder =[4];
       // console.log(computerOrder)

    // }
    // computerOrderArray();
          /* fonctions correspondant aux chiffres permettant de déterminer la couleeur et le son au flash des couleeurs  de l'ordinateur*/
           function numberOne(){
            audio1.play();
            red.style.background = "white";
                 }
                 
            
        
            function numberTwo(){
           
            audio2.play();
            yellow.style.background = "white";
             }

            
        
            function numberThree(){
            audio3.play();
            blue.style.background = "white";
    
            
               }
            
            function numberFour(){
            audio4.play();
            green.style.background = "white";
        
            }
            

           /* test */
           function generateLight(){
               if(light){
                   if(light>= level){
                       clearInterval(interval)
                   }
               }else{
                   light++;
               }

           }
            


         let computerOrderlength = computerOrder.length
         let playerorderlength = playerOrder.length;
          /* function qui va comparer si l'utilisateur à bien jouer , si il a bien cliqué sur la couleur correspondant au flash de l'ordinateur*/
         function goodClick(){
          
            console.log( playerOrder[0] );
            console.log( computerOrder[playerOrder.length-1] );
            console.log( playerOrder.length )
            console.log( level )

            if(playerOrder[playerOrder.length-1]==computerOrder[playerOrder.length-1] && playerOrder.length == level){
            console.log("gagné")
            game = true;
            playerOrder=[];
            level ++;
            light =0;
            levelCounter.innerHTML ="Level"+ level
            matchingArrays = true
            interval =setInterval(orderColor,800)
            matchingArrays = true;
           }else{
               matchingArrays = false;
           }
           /* fonction si il n'a pas cliqué au bon endroit*/
           if(playerOrder[playerOrder.length-1]!==computerOrder[playerOrder.length-1] && playerOrder.length !== level){
            console.log("perdu")
            matchingArrays =false;
            game = true;
            playerOrder =[];
            level++
            light = 0;
            level =1;
            levelCounter.innerHTML =  "No !!try again ";
             setTimeout(() => {
             levelCounter.innerHTML = "level: 1"
                   }, 800);
                   interval =setInterval(orderColor,800)
                }
            if(matchingArrays==true&& level==10){
                win();
                on = false;
                game = false;
                levelCounter.innerHTML = "YESSS! GOOD JOB";
                level =0;
            }


            /*function si lee joueur à gagné*/
        }
            function win(){
             window.alert("YOU WIN,CONGRATS");
             compturn =false;
             lightcolors();
             off =true;
     
            }
        

















            