
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


    parametresBalle(diametreBalle, posXBalle, posYBalle, vitesseXBalle, vitesseYBalle);
    parametresBalle(largeurCarre, hauteurCarre, posXCarre, posYCarre, vitesseXCarre, vitesseYCarre);


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


        vitesseXBalleC = collisionBalleCarreHorizontal(posXBalle, posXCarre, diametreBalle, vitesseXBalle, vitesseXCarre);
        vitesseXCarreB = collisionBalleCarreHorizontal(posXBalle, posXCarre, diametreBalle, vitesseXBalle, vitesseXCarre);

        vitesseYBalleC = collisionBalleCarreVertical(posYBalle, posYCarre, diametreBalle, vitesseYBalle, vitesseYCarre);
        vitesseYCarreB = collisionBalleCarreVertical(posYBalle, posYCarre, diametreBalle, vitesseYBalle, vitesseYCarre);


        posXBalle += vitesseXBalle;
        posYBalle += vitesseYBalle;

        posXCarre += vitesseXCarre;
        posYCarre += vitesseYCarre;
    }










////////////////////////////////////////////////// FONCTIONS ///////////////////////////////////////////////////////////////////////////

//////////////////////////////// BALLE ////////////////////////////////////////////////////
    function parametresBalle(diametreBalle, posXBalle, posYBalle, vitesseXBalle, vitesseYBalle){
        let diametreBalle = 5;
        let posXBalle = 1 + diametreBalle /2;
        let posYBalle = 1 + diametreBalle /2;
        let vitesseXBalle = 3;
        let vitesseYBalle = 3;
    }
    //////////////////////////////// CARRE ////////////////////////////////////////////////////
    function parametresBalle(largeurCarre, hauteurCarre, posXCarre, posYCarre, vitesseXCarre, vitesseYCarre){
        let largeurCarre = 10;
        let hauteurCarre = 10;
        let posXCarre = 250;
        let posYCarre = 10;
        let vitesseXCarre = 1;
        let vitesseYCarre = 1;
    }

//////////////////////////////// CARRE_CANVAS ////////////////////////////////////////////////////
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


/////////////////////// BALLE_CANVAS ///////////////////////////////////////
    function collisionBalleCanvasHorizontal(posXBalle, diametreBalle, vitesseXBalle, canvas){
        if(posXBalle + diametreBalle / 2 >= canvas.width || posXBalle <= 0 + diametreBalle / 2){
            vitesseXBalle *= -1;
        }

        return vitesseXBalle;
    }

    function collisionBalleCanvasVertical(posYBalle, diametreBalle, vitesseYBalle, canvas){
        if(posYBalle + diametreBalle / 2 >= canvas.height || posYBalle <= 0 + diametreBalle / 2){
            vitesseYBalle *= -1;
        }

        return vitesseYBalle;
    }
/////////////////////// BALLE_CARRE ///////////////////////////////////////
    function collisionBalleCarreHorizontal(posXBalle, posXCarre, diametreBalle, vitesseXBalle, vitesseXCarre){
        if(posXBalle + diametreBalle / 2 >= posXCarre){
            vitesseXBalleC = vitesseXBalle * -1;
            vitesseXCarreB = vitesseXCarre * -1;
        }
        return vitesseXBalleC && vitesseXCarreB;
    }
    function collisionBalleCarreVertical(posYBalle, posYCarre, diametreBalle, vitesseYBalle, vitesseYCarre){
        if(posYBalle + diametreBalle / 2 >= posYCarre){
            vitesseYBalleC = vitesseYBalle * -1;
            vitesseYCarreB = vitesseYCarre * -1;
        }
        return vitesseYBalleC && vitesseYCarreB;
    }
}



addEventListener("keypress", myFunction);
