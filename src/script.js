
window.onload = () => {
    const canvas = document.getElementById("canvas");
    if(!canvas){
        alert("nocanvas");
    }
    const context = canvas.getContext("2d");
    if(!context){
        alert("nocontext");
    }

    const APP_TEMPS = 0.5; 


    const myInterval = setInterval(animated, APP_TEMPS);  //temps

    //Balle 

    let diametreBalle = 5;
    let posXBalle = 1 + diametreBalle /2;
    let posYBalle = 1 + diametreBalle /2;
    let vitesseXBalle = 3;
    let vitesseYBalle = 3;

    let largeurCarre = 10;
    let hauteurCarre = 10;
    let posXCarre = 250;
    let posYCarre = 10;
    let vitesseXCarre = 1;
    let vitesseYCarre = 1;

    function animated() { //dans quelle mesure
        context.clearRect(0, 0, canvas.width, canvas.height); // (positionx, positiony, longueurx, longueury) à effacer
        context.beginPath();
        context.arc(posXBalle, posYBalle, diametreBalle / 2, 0, Math.PI * 2);


        context.fillRect(posXCarre, posYCarre, largeurCarre, hauteurCarre); // particularités rectangle
        context.fill();

        vitesseXBalle = collisionBalleCanvasHorizontal(posXBalle, diametreBalle, vitesseXBalle, canvas); 
        vitesseYBalle = collisionBalleCanvasVertical(posYBalle, diametreBalle, vitesseYBalle, canvas);

        vitesseXCarre = collisionCarreCanvasHorizotal(posXCarre, largeurCarre, vitesseXCarre, canvas);
        vitesseYCarre = collisionCarreCanvasVertical(posYCarre, hauteurCarre, vitesseYCarre, canvas);


        // if(posXBalle >= posXCarre ){
        //     vitesseXBalle *= -1;
        // }
        // if(posYBalle >= posYCarre){
        //     vitesseYBalle *= -1;
        // }

        posXBalle += vitesseXBalle;
        posYBalle += vitesseYBalle;






        posXCarre += vitesseXCarre;
        posYCarre += vitesseYCarre;
    }

    function collisionCarreCanvasHorizotal(posXCarre, largeurCarre, vitesseXCarre, canvas){
        if(posXCarre + largeurCarre >= canvas.width || posXCarre <= 0){
            vitesseXCarre *= -1;
        }
        return vitesseXCarre;
    }


    function collisionCarreCanvasVertical(posYCarre, hauteurCarre, vitesseYCarre, canvas){
        if(posYCarre + hauteurCarre >= canvas.height || posYCarre <= 0){
            vitesseYCarre *= -1;
        }
        return vitesseYCarre;
    }




///////////////////////BALLE///////////////////////////////////////
    function collisionBalleCanvasHorizontal(posXBalle, diametreBalle, vitesseXBalle, canvas) {
        if(posXBalle + diametreBalle / 2 >= canvas.width || posXBalle <= 0 + diametreBalle / 2){
            vitesseXBalle *= -1;
        }

        return vitesseXBalle;
    }

    function collisionBalleCanvasVertical(posYBalle, diametreBalle, vitesseYBalle, canvas) {
        if(posYBalle + diametreBalle / 2 >= canvas.height || posYBalle <= 0 + diametreBalle / 2){
            vitesseYBalle *= -1;
        }

        return vitesseYBalle;
    }
}
