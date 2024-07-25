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
            var tone1 = new Audio("./musicg/A.wav");
            tone1.play();
            break;
        
        case "B":
            var tone2 = new Audio("./musicg/B.wav");
            tone2.play();
            break; 

        case "C":
            var tone3 = new Audio("./musicg/C.wav");
            tone3.play();
            break;

        case "D":
            var tone4 = new Audio("./musicg/D.wav");
            tone4.play();
            break; 
        
        case "E":
            var tone5 = new Audio("./musicg/E.wav");
            tone5.play();
            break;
            
        case "F":
            var tone6 = new Audio("./musicg/F.wav");
            tone6.play();
            break; 
            
        case "G":
            var tone7 = new Audio("./musicg/G.wav");
            tone7.play();
            break; 

        case "H":
            var tone8 = new Audio("./musicg/H.wav");
            tone8.play();
            break; 

        case "I":
            var tone9 = new Audio("./musicg/I.wav");
            tone9.play();
            break; 
        
        case "J":
            var tone10 = new Audio("./musicg/J.wav");
            tone10.play();
            break; 

        case "K":
            var tone11 = new Audio("./musicg/K.wav");
            tone11.play();
            break; 

        case "L":
            var tone12 = new Audio("./musicg/L.wav");
            tone12.play();
            break;   

        case "M":
            var tone13 = new Audio("./musicg/M.wav");
            tone13.play();
            break;

        case "N":
            var tone14 = new Audio("./musicg/N.wav");
            tone14.play();
            break;

        case "O":
            var tone15 = new Audio("./musicg/O.wav");
            tone15.play();
            break;

        case "P":
            var tone16 = new Audio("./musicg/P.wav");
            tone16.play();
            break;

        case "Q":
            var tone17 = new Audio("./musicg/Q.wav");
            tone17.play();
            break;

        case "R":
            var tone18 = new Audio("./musicg/R.wav");
            tone18.play();
            break;

        case "S":
            var tone19 = new Audio("./musicg/S.wav");
            tone19.play();
            break;

        case "T":
            var tone20 = new Audio("./musicg/T.wav");
            tone20.play();
            break;
    
        case "U":
            var tone21 = new Audio("./musicg/U.wav");
            tone21.play();
            break;

        case "V":
            var tone22 = new Audio("./musicg/V.wav");
            tone22.play();
            break;

        case "W":
            var tone23 = new Audio("./musicg/W.wav");
            tone23.play();
            break;

        case "X":
            var tone24 = new Audio("./musicg/X.wav");
            tone24.play();
            break;

        case "Y":
            var tone25 = new Audio("./musicg/Y.wav");
            tone25.play();
            break;

        case "Z":
            var tone26 = new Audio("./musicg/Z.wav");
            tone26.play();
            break;

            case "Ä":
                var tone27 = new Audio("./musicg/ae.wav");
                tone27.play();
                break;
    
            case "Ö":
                var tone28 = new Audio("./musicg/oe.wav");
                tone28.play();
                break;
    
            case "Ü":
                var tone29 = new Audio("./musicg/ue.wav");
                tone29.play();
                break;
    
            case "ß":
                var tone30 = new Audio("./musicg/esszett.wav");
                tone30.play();
                break;

        default: console.log("press any key");
    }
}