/**
 * @author eduardo22i / http://estampworld.com/
*/


var images = ["images/1.jpg" , "images/2.jpg" , "images/3.jpg",  "images/4.jpg" ];
var timing = 3000;
var currentImg = 1;

function karrotSlider() {
    
    var nextimg = (currentImg + 1) > images.length ? 1 : currentImg + 1;
      
    var effect = Math.floor (Math.random()*8 +1 );
    
    //effect=1;

    switch (effect) {
        case 1: 
            KSDissolve(images[currentImg- 1], images[nextimg- 1])
            break;
        case 2:
            KSSlideUp(images[currentImg- 1], images[nextimg- 1])
            break;
        case 3:
            KSSlideDown(images[currentImg- 1], images[nextimg- 1])
            break;
        case 4:
            KSSlideLeft(images[currentImg- 1], images[nextimg- 1])
            break;
        case 5:
            KSSlideRight(images[currentImg- 1], images[nextimg- 1])
            break;
        case 6:
            KSMosaic(images[currentImg- 1], images[nextimg- 1])
            break;
        case 7:
            KSWindows(images[currentImg- 1], images[nextimg- 1])
            break;
        case 8:
            KSDo(images[currentImg- 1], images[nextimg- 1])
            break;
    }

    currentImg = (currentImg + 1) > images.length ? 1 :  currentImg + 1;
    
}

window.onload = setInterval(function () { karrotSlider() } , timing);
