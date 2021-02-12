/*var counter = document.getElementsByClassName("click"),
  count = 0;
counter.onclick = function() {
  count += 1;
};*/
const click = document.querySelector(".click");
const numbers = document.querySelector(".numbers");
const reset = document.querySelector(".reset");
count=0;

click.onclick = function(){
    count +=1;
    numbers.innerHTML= "Clic : <br> " + count;
};

reset.onclick = function(){
    count = 0;
    reset.textContent = "Reset";
    numbers.innerHTML =  count;
};


