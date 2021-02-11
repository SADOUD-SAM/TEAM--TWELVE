window.onload = function()

{
    var canvasWidth= 900;
    var canvasHeight= 600;
    var blockSize = 30;
    
    var ctx;
    var delay = 100;
    var snakee;

    init();


    function init()
    {
        
     var canvas = document.createElement('canvas');
    canvas.width=canvasWidth;
    canvas.height=canvasHeight;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);
    ctx= canvas.getContext("2d");
    snakee = new Snake([[6,4],[5,4],[4,4]],"right");
    refreshCanvas();

    
    }

    function refreshCanvas()
    {
    
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    snakee.advance();
   snakee.draw();
    setTimeout(refreshCanvas,delay);

    }

    function drawBlock(ctx,position)

        {
          var x = position[0] * blockSize;
          var y = position[1] * blockSize;
          ctx.fillRect(x ,y ,blockSize,blockSize);
        }
    
    function Snake(body,direction)
    {
        this.body = body;
        this.direction = direction;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle="#ff0000";
            for(var i = 0; i < this.body.length; i++)
            {
                drawBlock(ctx,this.body[i]);
            }
            ctx.restore();

    

        };
        this.advance = function ()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
            {
                case "left":
                nextPosition[0] -= 1;
                     break;
                 case "right":
                 nextPosition[0] += 1;
                     break;
                 case "down":
                     nextPosition [1] += 1;
                     break;
                  case "up":
                      nextPosition[1] -= 1;
                      break;
                      default:
                          throw("invalid direction")
            }    
                      
            this.body.unshift(nextPosition);
            this.body.pop();

        };
        this.setDirection = function (newDirection)
        {
           var allowedDirections;
           switch(this.direction)
           {
               case "left":
               case "right":
               allowedDirections = ["up","down"];
               break;
               case" down":
               case "up" :
                   allowedDirections = ["left","right"];
                   break;
                   default:
                       throw("invalid direction");
           }
           if(allowedDirections.indexOf(newDirection)> -1)
           {
               this.direction = newDirection;
           }

        };
    }
    


document.onKeydown = function handleKeyDown(e)
{
    var key = e.KeyCode;
    var newDirection;
    switch(key)
    {
        case 37:
            newDirection = "left";
            posX  =  - 1 ;
            posY  =  0 ;
            break;
            
         case 38 :
             newDirection = "up";
             posX  =  0 ;
             posY  =  - 1 ;
             break;
             
         case 39:
             newDirection = "right";
             posX  =  1 ;
             posY  =  0 ;
             break;
         case 40:
             newDirection = "down";
             posX  =  0 ;
             posY  =  1 ;
             break ;
             default:
             return;
    }
                 snakee.setDirection(newDirection);

    }
};



































/*
var name = "samira";
var length = name.length;
console.log  (length)

var xstring ='36.6';
var xnumber = parseFloat(xstring);
console.log(xnumber);

var name ='samira, sirine ,djibril ,loqman, nerimen';
var position = name.indexOf("nerimen");
console.log (position);


var name ="samira sadoud";
var position = name.replace ("sadoud","kheddaoui");
console.log (position);

var name  = "sirine sadoud";
var surname=  name.replace ("sadoud","mahboula");
console.log (surname);

var learn = "html, css , javascript ,  wordpress, jquery"
var language = learn.replace ("jquery","react");
console.log(language);

var family = 'sirine , nerimen , djibril, loqman';
var place = family.indexOf("nerimen");
console.log (place);

var x = 1984;
var y =  x.toString();
console.log (x);


var kids = 'nerimen , loqman, nemane'
var baby = kids.length;
console.log (baby);

var work  =  'formation , alternance , travaille';
var task = work.length ;
console.log (task);

var salam = 'salam aleykum';
var answer = 'inchALLAH youm jamil';
var natija  = salam + " " + answer ;
console.log (salam);

var i = 'hello';
var z = 'ca va ';
var a  = i+ " " + z ;
console.log (a);

var n = 24;
var j = 2 ;
var r = n%j;
console.log (r);

var b = 20;
var c = 19;
c++
console.log (c);

var d = 15;
var e = 9;
 d--;
console.log(d);


// boolean

var w = 12;
var myBoolean = (w>=12);
console.log ( myBoolean);

var u = 30 ;
var m = (u>50);
console.log (m);

var g = 15;
var h= (g===15);
console.log(h);


var k = "16";
var l = (k=== 16);
console.log (l);

var o = 40;
var p = (o=="40");
console.log(p)

var q = 30;
var s = (q!==25);
console.log (s);

var t = 15;
var v = 14;
var result =(t===15 && v===14);
console.log(result);


var w = 8;
var zz = 12;
var result2 = (w>10 && zz>9);
console.log (result2);

var aa = 5;
var bb = 6;
var result3 = (aa> 19||bb===6 );
console.log (result3);

// conditions

var note = 16;
if(note>15)
{
    console.log ("tu as une exellente moyenne, continue tes efforts");

}
else if (note> 10)
{
    console.log ("tu dois progresser , mais tu as la moyenne ! ");

}

else 
{
    console.log (" trop insuffisant");

}

var money = 4000;

if(money> 6500)
{
    console.log ("tu as la sommes nécessaire");
}
else if ( money >3000)
{
    console.log ("tu devras trouver le reste de la somme manquante");

}
else 
{
console.log ("tu ne pourras pas suivre ta formation");
}


var speed = 70;
if(speed<110)
{
    if(speed >80)
    {
        console.log ("tu roules à la bonne vitesse");
    }
    else 
    {
        console.log ("accélére un peu ");
    }
}

else if (speed<50)
{
    console.log ("danger , tu ne peux pas aller sur l'autoroute");
}
else 
{
console.log (" tu risques un accident , tu roules trop vite");
}

//switch pour faire la même chose mais avec des cas on utilise des case avec switch
/*
switch ( variable)
{
    case 1:
        break;
    case 2:
        break;
}*/
/*
var food ='hot chocolate';

switch (food)
{

case "potatoes":
    console.log ("so delicious");
    break;

case "hot chocolate":
    console.log ("hot chocolate is my favorite drinks");
    break;

case "meat":
    console;log ("disgusted");
    break;

    
}

var travel = 'blida';
switch(travel)
{
    case "maldives":
        console.log (" maldives i dream one day i will go their ");
        break;

    case "dubai":
        console.log ("  dubai is absolutely wonderfull ,my favorite country");
        break;
    case "blida":
    case "algeria":
        console.log (" algeria my family country , i love algeria so much")
}

var candy = 4;

while (candy <10)
{
    console.log(candy);
    candy++
}


var shoes = 8;
while (shoes<=12)
{
    console.log(shoes);
    shoes++
    
    
}

var apple = 5;
do {
    console.log(apple);
    apple++
}
while (apple <=14)

    
var color = 7;
do {
    console.log(color)
    color++
}
while (color>7 && color<= 11);

console.log("------------------------------");

// for 
for(var number  = 0; number < 5; number++)
{
    console.log(number)
}
console.log("--------------------------------");
//function

function add (number1,number2, number3)
{
    return number1*number2*number3;
}
var a = 10;
var b = 5;
var result = add (a,b,a);
console.log(result);


function multiply(number1, number2, number3)
{
    return number1+number2+number3;
}
var c = 10 ;
var d = 5 ;
var e = 4 ;
var result = multiply(c,d,e);
console.log(result);


console.log("_________________________________________");
//les arrays (tableaux) exemple avec une boucle

var student = [ "sarah","sam","nadia","nerimen"];
for( var i = 0; i < student.length; i++)
{
    console.log ( student[i]);
}

//exemple de array avec pop pour enlever le dernier élement 
//exemple avec push pour rajouter un  éléments

var lipstikColor= ["pink","purple", "brown" ,"gold"]
console.log (lipstikColor);
lipstikColor.pop()
console.log(lipstikColor)
lipstikColor.push("glossy")
console.log (lipstikColor);

//exemple de array avec slice qui coupe a l'interieur du tableau la partie choisi 

var mark = ["lvmh","gucci","channel","valentino","dior","ysl"]
var best = mark.slice(1,3);
console.log (best);
var better = mark.slice(2);// un seul chiffre veut dire il commence a partir dun 2 jusqu'à la fin
console.log(better);

// exemple de arrays avec differents type des booleens des nombres et strings

var cars = [ "audi", 207, true];
console.log (cars);
// exemple de arrays avec des arrays dans le arrays

var date = [ [23,9],[9,12],[5,7]];
console.log(date [0][0]);

console.log("----------------------------------------------");

// OBJET: qui possede des propriétés (age, color, nom ect)et des functions cad methode


var movie = {
    number: 4,
    name :"le roi lion",
    producer :"by walt disney",
    time : 20

};

for (var property in movie)
{
    console.log(movie[property]);
}
// 2 eme facon de creer des objets :

var song = new Object ();
song.name = "ariana grande";
song.title = "la luna";
song.baby = "baby shark";

for ( var property in song )
{
console.log (song[property]);
}
// méthode dans les OBJETS

var sports = new Object();
sports.healthy="running";
sports.name = "sport";
sports.popular = "zumba";
sports.way = function (){
    console.log ("run , diet, sleep")

};
sports.way();//c'est ca qui permet l'affichage et pas ce qui est declarer dans la function*/

/*
var holliday = new Object();

holliday.chrismas = "december";
holliday.school = "june  to september";
holliday.work = "april to may";
holliday.travel = function (number)
{
    for (var number = 0; number<=5; number++)
    {
        console.log( number + "happy holliday");
        
            
    }

};
holliday.travel(5);
/* pour le while on aurai mis à la place de for 
while (number>0)
{
    console.log(number.toString()+ "happy holliday");
    number-- // number-- pour eviter la boucle infinie
}
holliday.travel(5);*/

console.log("-------------------------------------");

// fonction constructeur
/*
function chocolate (color, price, size, origin)
{
    this.color = color;
    this.price = price;
    this.size = size ;
    this.origin = origin ;
}

var WhiteChocolate =  new chocolate ("white",4,"big","france");

console.log(WhiteChocolate);

var MilkChocolate = new chocolate ("milk",2,"small","africa");
console.log(MilkChocolate);

var BlackChocolate = new chocolate ("black",3,"medium","belgium");

//function constructeur avec une methode 

function Home ( country, price, size,pool)
{
    this.country = country;
    this.price = price;
    this.size = size;
    this.pool = pool = function()
    {
        console.log(this.country +" "+ this.price+" " +"with a wonderful pool");
    }

}
var BigHome = new Home ("dubai","one million","big",2);
var VillaHome = new Home ("spain","2millions", "too big", 3);




BigHome.pool();
VillaHome.pool();
*/

