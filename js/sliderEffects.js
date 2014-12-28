/**
 * @author eduardo22i / http://estampworld.com/
*/

var slider;
var timer;

//General Functions

function codeAddress() {
    slider = document.getElementById("slider");
}

function fullScreen () {
    var dif = (window.innerWidth / parseInt(document.getElementById("slider").style.width) );
    document.getElementById("slider").style.width = window.innerWidth + "px";
    document.getElementById("slider").style.height = (dif  * parseInt(document.getElementById("slider").style.height) ) + "px";
    
    var firstIMG = document.getElementById("slider").getElementsByTagName('img')[0];
    firstIMG.style.width =  window.innerWidth + "px";
    
    window.addEventListener("resize", fullScreen);

    console.log(document.getElementById("slider").style.height);
}

function KSTransitionTimer(imgNext) {
        clearInterval(timer);

        var imagePart = document.createElement('img');
        imagePart.src = imgNext;
        slider.innerHTML = "";

        slider.appendChild(imagePart);
        imagePart.width = slider.width;
        imagePart.height = slider.height;
 }

//Effects 

function KSDissolve ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";
    slider.style.backgroundOrigin = "center";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);

    var iDiv = document.createElement('div');
    iDiv.className = 'dissolve';
    iDiv.style.width = width + "px";

    var imagePart = document.createElement('img');
    imagePart.src = image;
    imagePart.width = width;

    iDiv.appendChild(imagePart);
    slider.appendChild(iDiv);
    
    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 

function KSSlideUp ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    var iDiv = document.createElement('div');
    iDiv.className = 'slideUp';
    iDiv.style.width = width + "px";

    var imagePart = document.createElement('img');
    imagePart.src = image;
    imagePart.width = width;
    imagePart.height = height;


    iDiv.appendChild(imagePart);
    slider.appendChild(iDiv);
    
    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 

function KSSlideDown ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    var iDiv = document.createElement('div');
    iDiv.className = 'slideDown';
    iDiv.style.width = width + "px";

    var imagePart = document.createElement('img');
    imagePart.src = image;
    imagePart.width = width;
    imagePart.height = height;

    iDiv.appendChild(imagePart);
    slider.appendChild(iDiv);

    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 

function KSSlideLeft ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    var iDiv = document.createElement('div');
    iDiv.className = 'slideLeft';
    iDiv.style.width = width + "px";

    var imagePart = document.createElement('img');
    imagePart.src = image;
    imagePart.width = width;
    imagePart.height = height;


    iDiv.appendChild(imagePart);
    slider.appendChild(iDiv);
    
    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 

function KSSlideRight ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    var iDiv = document.createElement('div');
    iDiv.className = 'slideRight';
    iDiv.style.width = width + "px";

    var imagePart = document.createElement('img');
    imagePart.src = image;
    imagePart.width = width;
    imagePart.height = height;


    iDiv.appendChild(imagePart);
    slider.appendChild(iDiv);
    
    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 

function KSMosaic ( image, imgNext) {

    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    for (var i = 0; i < Math.floor(height/100); i ++) {
        for (var j = 0; j < Math.floor(width/100); j++) {
            var iDiv = document.createElement('div');
            iDiv.className = 'mosaicBlock';

            var imagePart = document.createElement('img');
            imagePart.src = image;
            imagePart.width = width;
            imagePart.height = height;
            imagePart.style.transform = "translate("+(-j*100)+"px,"+(-i*100)+"px)";
            imagePart.style.webkitTransform  = "translate("+(-j*100)+"px,"+(-i*100)+"px)";
            imagePart.style.MozTransform = "translate("+(-j*100)+"px,"+(-i*100)+"px)";
            
            iDiv.appendChild(imagePart);

            slider.appendChild(iDiv);
        }
    }

    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

}

function KSWindows ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    for (var i = 0; i < width/300; i ++) {
        //for (var j = 0; j < width/100; j++) {
            var iDiv = document.createElement('div');
            iDiv.className = 'windowBlock';

            var imagePart = document.createElement('img');
            imagePart.src = image;
            imagePart.width = width;
            imagePart.height = height;
            imagePart.style.transform  = "translate("+(-i* (300) )+"px,0px)";
            imagePart.style.webkitTransform  = "translate("+(-i* (300) )+"px,0px)";
            imagePart.style.MozTransform  = "translate("+(-i* (300) )+"px,0px)";


            iDiv.appendChild(imagePart);

            slider.appendChild(iDiv);
        //}
    }


    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);


}

function KSDoors ( image, imgNext) {
    
    codeAddress();
    slider.innerHTML = "";
    slider.style.background = "url(" + imgNext + ")";
    slider.style.backgroundSize = "cover";

    var width = parseInt(slider.style.width);
    var height = parseInt(slider.style.height);


    for (var i = 0; i < 2; i ++) {
        var iDiv = document.createElement('div');
        iDiv.className = i > 0 ? 'imagePush' : 'imagePush2';
        iDiv.style.width = width/2 + "px";

        var imagePart = document.createElement('img');
        imagePart.src = image;
        imagePart.width = width;
        imagePart.height = height;

        imagePart.style.transform  = "translate("+(-i* (width/2 ) )+"px,0px)";
        imagePart.style.webkitTransform  = "translate("+(-i* (width/2 ) )+"px,0px)";
        imagePart.style.MozTransform  = "translate("+(-i* (width/2 ) )+"px,0px)";

        iDiv.appendChild(imagePart);
        
        slider.appendChild(iDiv);
    }


    timer = setInterval(function () {KSTransitionTimer(imgNext)}, 1000);

} 




window.onload = codeAddress();