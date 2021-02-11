  
   
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



    let canClick = false;
    let computerOrder = [];
    let playerOrder = [];
    let level = 0;
    let audio = false;
    
    let light =0;
    let interval;
    let matchingArrays= true;
    let game;
    
    

    
    
   let redClick = red.onclick =function(){
        
        red.style.background ="tomato";
        setTimeout(darkcolors,400)
         
        audio1.play();
        
        playerOrder.push(1)
        console.log(playerOrder)
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
    
    function playerOrderArray(){
        redClick();
        yellowClick();
        blueClick();
        greenClick ();
    }

        function lightcolors(){
        red.style.background ="white";
        yellow.style.background = "white";
        blue.style.background = "white";
        green.style.background = "white";
    
    }

        function darkcolors(){
        red.style.background ="#ee6055";
        green.style.background ="#7DD877";
        yellow.style.background = "#ffd97d";
        blue.style.background = "#38a3a5";
    
    }

        function clickOnButton(){
        if (OnButton.checked == true){
            on = true;
            off.innerHTML = "ON";
         } else{
            on = false;
            levelCounter.innerHTML = "Level : 0";
            clearInterval(interval)
            off.innerHTML ="OFF";

        }
        }
        
         OnButton.addEventListener('click',clickOnButton)

        function clickOffButton(){
        if (off.checked == true){
            off = true;
            compturn =false;
            darkcolors();
            level =0;
            light = 0;
            sound = false;
            canClick = false;
            on = true;
           
        }
    }

    off.addEventListener('click',clickOffButton)

        function clickStartButton(){
        if (on){
        startButton.innerHTML="START";

        
        }else{
            sound = false;
            darkcolors();
        }
        }

         clickStartButton();
         
         startButton.onclick = function(){
         startButton.innerHTML ="C'est parti!";
         randomColors();

        }
        
        function randomColors(){
        computerOrder =[];
        playerOrder =[];
        level = 1;
        light = 0;
        computerOrder =[];
        playerOrder = [];
        sound =true;
        interval = 0;
        //good = true;
        levelCounter.innerHTML = "level-"+ 1;
        for(var i = 0;i<5; i++){
        computerOrder.push(Math.floor(Math.random() * 4)+1)
         console.log(computerOrder);
        
                } 
                game = true;
               interval = setInterval(orderColor,800)
              
            }

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
            setTimeout(() => {
            if(computerOrder[light] == 1)
             numberOne();
            if(computerOrder[light] == 2)
             numberTwo();
            
            if(computerOrder[light] == 3) 
            numberThree(); 
            
            if(computerOrder[light] == 4) 
             numberFour();
            light ++;
           }, 200);
    
             console.log(orderColor)
             sound = true;
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
    
           




         
       function goodClick(){
       
           if(playerOrder[0] == computerOrder[0]){
            matchingArrays = true;
           
            game = true;
            playerOrder =[];
            level++
            levelCounter.innerHTML = "level ="+ level;
            light = 0;
            interval = setInterval(orderColor,1000)
            
           
           }
           else{
               matchingArrays =false;
               randomColors();
               clearTimeout(interval)
              // audioWrongClick.play
              // darkcolors()
              // game= true;
               
              level =1;
              // window.alert("wrong click")
              // light == level;
              // clearInterval(interval)
             //  playerOrder =[];

               
           }
           if(playerOrder.length == 5 && matchingArrays == true){
            win();
           }
        }
           
           /*if(playerOrder[playerOrder.length-1] !== computerOrder[playerOrder.length-1])
           matchingArrays =false;
           if(playerOrder.length == 5 && matchingArrays == true){
               win()

               
           }
           if(matchingArrays =false){
            darkcolors();
            randomColors();
            level =1;
            window.alert("wrong click")

           }
           if(playerOrder[playerOrder.length-1] === computerOrder[playerOrder.length-1]){
               matchingArrays = true;
               compturn = true;
            playerOrder =[];
            level++
            levelCounter.innerHTML = "level ="+ level;
            light = 0;
            interval = setInterval(orderColor,1000)

           /*}if(level == 3 && matchingArrays== true){
            compturn = true;
            playerOrder =[];
            level++
            levelCounter.innerHTML = "level ="+ level;
            light = 0;
            interval = setInterval(orderColor,1000)

           }*/
        
        

       function win(){
           window.alert("YOU WIN,CONGRATS");
           compturn =false;
           lightcolors();

       }
        
      
       
    
         

       