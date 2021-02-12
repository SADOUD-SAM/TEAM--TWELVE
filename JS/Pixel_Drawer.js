/* const changeColor = document.querySelector('.cercle');*/

// const changeColor = document.querySelectorAll('.cercle');
// console.log(changeColor)
// changecolor


// changeColor.onclick = function(){

//     const color = document.querySelector("#head").value; 
//     this.style.backgroundColor = color;
      
// }; 

// Need clickable divss, getelementbyid, 

/* Si on clic sur un cercle = change la couleur du background; avec la fonction ChangeColorInput
Sinon il ne se passe rien */ 

function changecolor(id){
    const color = document.querySelector("#head").value;
    document.getElementById(id).style.backgroundColor = color;
    
    // document.querySelector("#cercle").style.backgroundColor = color;
}

var reset = document.getElementsByClassName("reset_pixel");

function resetPixel(){
    location.reload()
}


