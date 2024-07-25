var drumno = document.querySelectorAll(".drum").length;
for(var i = 0; i<drumno; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerhtml = this.innerHTML;
        makesoundc(buttonInnerhtml);
        buttonanimation(buttonInnerhtml);
    });
}

document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimation(event.key);
});

function buttonanimation(currentkey){
       var activebutton = document.querySelector("." + currentkey);
       activebutton.classList.add("pressed");
       setTimeout(function(){
          activebutton.classList.remove("pressed");
       },100);
}


function makesoundc(key){

    switch(key){

        case "A":
            var tone1 = new Audio("./music/A.wav");
            tone1.play();
            break;
        
        case "B":
            var tone2 = new Audio("./music/B.wav");
            tone2.play();
            break; 

        case "C":
            var tone3 = new Audio("./music/C.wav");
            tone3.play();
            break;

        case "D":
            var tone4 = new Audio("./music/D.wav");
            tone4.play();
            break; 
        
        case "E":
            var tone5 = new Audio("./music/E.wav");
            tone5.play();
            break;
            
        case "F":
            var tone6 = new Audio("./music/F.wav");
            tone6.play();
            break; 
            
        case "G":
            var tone7 = new Audio("./music/G.wav");
            tone7.play();
            break; 

        case "H":
            var tone8 = new Audio("./music/H.wav");
            tone8.play();
            break; 

        case "I":
            var tone9 = new Audio("./music/I.wav");
            tone9.play();
            break; 
        
        case "J":
            var tone10 = new Audio("./music/J.wav");
            tone10.play();
            break; 

        case "K":
            var tone11 = new Audio("./music/K.wav");
            tone11.play();
            break; 

        case "L":
            var tone12 = new Audio("./music/L.wav");
            tone12.play();
            break;   

        case "M":
            var tone13 = new Audio("./music/M.wav");
            tone13.play();
            break;

        case "N":
            var tone14 = new Audio("./music/N.wav");
            tone14.play();
            break;

        case "O":
            var tone15 = new Audio("./music/O.wav");
            tone15.play();
            break;

        case "P":
            var tone16 = new Audio("./music/P.wav");
            tone16.play();
            break;

        case "Q":
            var tone17 = new Audio("./music/Q.wav");
            tone17.play();
            break;

        case "R":
            var tone18 = new Audio("./music/R.wav");
            tone18.play();
            break;

        case "S":
            var tone19 = new Audio("./music/S.wav");
            tone19.play();
            break;

        case "T":
            var tone20 = new Audio("./music/T.wav");
            tone20.play();
            break;
    
        case "U":
            var tone21 = new Audio("./music/U.wav");
            tone21.play();
            break;

        case "V":
            var tone22 = new Audio("./music/V.wav");
            tone22.play();
            break;

        case "W":
            var tone23 = new Audio("./music/W.wav");
            tone23.play();
            break;

        case "X":
            var tone24 = new Audio("./music/X.wav");
            tone24.play();
            break;

        case "Y":
            var tone25 = new Audio("./music/Y.wav");
            tone25.play();
            break;

        case "Z":
            var tone26 = new Audio("./music/Z.wav");
            tone26.play();
            break;

        default: console.log("press any key");
    }
}

function makesound(key){

    switch(key){

        case "a":
            var tone1 = new Audio("./music/A.wav");
            tone1.play();
            break;
        
        case "b":
            var tone2 = new Audio("./music/B.wav");
            tone2.play();
            break; 

        case "c":
            var tone3 = new Audio("./music/C.wav");
            tone3.play();
            break;

        case "d":
            var tone4 = new Audio("./music/D.wav");
            tone4.play();
            break; 
        
        case "e":
            var tone5 = new Audio("./music/E.wav");
            tone5.play();
            break;
            
        case "f":
            var tone6 = new Audio("./music/F.wav");
            tone6.play();
            break; 
            
        case "g":
            var tone7 = new Audio("./music/G.wav");
            tone7.play();
            break; 

        case "h":
            var tone8 = new Audio("./music/H.wav");
            tone8.play();
            break; 

        case "i":
            var tone9 = new Audio("./music/I.wav");
            tone9.play();
            break; 
        
        case "j":
            var tone10 = new Audio("./music/J.wav");
            tone10.play();
            break; 

        case "k":
            var tone11 = new Audio("./music/K.wav");
            tone11.play();
            break; 

        case "l":
            var tone12 = new Audio("./music/L.wav");
            tone12.play();
            break;   

        case "m":
            var tone13 = new Audio("./music/M.wav");
            tone13.play();
            break;

        case "n":
            var tone14 = new Audio("./music/N.wav");
            tone14.play();
            break;

        case "o":
            var tone15 = new Audio("./music/O.wav");
            tone15.play();
            break;

        case "p":
            var tone16 = new Audio("./music/P.wav");
            tone16.play();
            break;

        case "q":
            var tone17 = new Audio("./music/Q.wav");
            tone17.play();
            break;

        case "r":
            var tone18 = new Audio("./music/R.wav");
            tone18.play();
            break;

        case "s":
            var tone19 = new Audio("./music/S.wav");
            tone19.play();
            break;

        case "t":
            var tone20 = new Audio("./music/T.wav");
            tone20.play();
            break;
    
        case "u":
            var tone21 = new Audio("./music/U.wav");
            tone21.play();
            break;

        case "v":
            var tone22 = new Audio("./music/V.wav");
            tone22.play();
            break;

        case "w":
            var tone23 = new Audio("./music/W.wav");
            tone23.play();
            break;

        case "x":
            var tone24 = new Audio("./music/X.wav");
            tone24.play();
            break;

        case "y":
            var tone25 = new Audio("./music/Y.wav");
            tone25.play();
            break;

        case "z":
            var tone26 = new Audio("./music/Z.wav");
            tone26.play();
            break;

        default: console.log("press any key");
    }
}