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

        case "あ":
            var tone1 = new Audio("./musicj/A.mp3");
            tone1.play();
            break;
        
        case "い":
            var tone2 = new Audio("./musicj/B.mp3");
            tone2.play();
            break; 

        case "う":
            var tone3 = new Audio("./musicj/C.mp3");
            tone3.play();
            break;

        case "え":
            var tone4 = new Audio("./musicj/D.mp3");
            tone4.play();
            break; 
        
        case "お":
            var tone5 = new Audio("./musicj/E.mp3");
            tone5.play();
            break;
            
        case "か":
            var tone6 = new Audio("./musicj/F.mp3");
            tone6.play();
            break; 
            
        case "き":
            var tone7 = new Audio("./musicj/G.mp3");
            tone7.play();
            break; 

        case "く":
            var tone8 = new Audio("./musicj/H.mp3");
            tone8.play();
            break; 

        case "け":
            var tone9 = new Audio("./musicj/I.mp3");
            tone9.play();
            break; 
        
        case "こ":
            var tone10 = new Audio("./musicj/J.mp3");
            tone10.play();
            break; 

        case "が":
            var tone11 = new Audio("./musicj/K.mp3");
            tone11.play();
            break; 

        case "ぎ":
            var tone12 = new Audio("./musicj/L.mp3");
            tone12.play();
            break;   

        case "ぐ":
            var tone13 = new Audio("./musicj/M.mp3");
            tone13.play();
            break;

        case "げ":
            var tone14 = new Audio("./musicj/N.mp3");
            tone14.play();
            break;

        case "ご":
            var tone15 = new Audio("./musicj/O.mp3");
            tone15.play();
            break;

        case "さ":
            var tone16 = new Audio("./musicj/P.mp3");
            tone16.play();
            break;

        case "し":
            var tone17 = new Audio("./musicj/Q.mp3");
            tone17.play();
            break;

        case "す":
            var tone18 = new Audio("./musicj/R.mp3");
            tone18.play();
            break;

        case "せ":
            var tone19 = new Audio("./musicj/S.mp3");
            tone19.play();
            break;

        case "そ":
            var tone20 = new Audio("./musicj/T.mp3");
            tone20.play();
            break;
    
        case "ざ":
            var tone21 = new Audio("./musicj/U.mp3");
            tone21.play();
            break;

        case "じ":
            var tone22 = new Audio("./musicj/V.mp3");
            tone22.play();
            break;

        case "ず":
            var tone23 = new Audio("./musicj/W.mp3");
            tone23.play();
            break;

        case "ぜ":
            var tone24 = new Audio("./musicj/X.mp3");
            tone24.play();
            break;

        case "ぞ":
            var tone25 = new Audio("./musicj/Y.mp3");
            tone25.play();
            break;

        case "た":
            var tone26 = new Audio("./musicj/Z.mp3");
            tone26.play();
            break;

        default: console.log("press any key");
    }
}