Karrot Slider
======

Karrot Slider a is non-jQuery Slider pure Javascript and CSS. Runs in Internet Explorer 10, Safari, Chrome, Firefox and Opera. Karrot Slider has 8 differents effects and we are working on more. Karrot Slider support responsive image mode, with 100% width, calling fullScreen() function. Karrot Slider it's easy to implement on your site.

Info

http://estampworld.com/karrotslider/

![alt tag](http://estampworld.com/karrotslider/images/logo.png)

Configuration

Include slider.css and sliderEffects.js in your file.

<link href="css/slider.css" rel="stylesheet" type="text/css" /> 
<script src="js/sliderEffects.js"></script>

Create a div with ID slider, then set its Width and Height. Then, add the first image inside the div.

<div id="slider" style="width: 900px; height: 505px; margin: auto;"> 
 <img src="images/1.jpg" > 
</div>

Usage

Karrot Slider has 8 differents effects:

Dissolve
Slide Up
Slide Down
Slide Left
Slide Right
Mosaic
Window
Doors
All effects functions contains 2 parameters, the current image reference and the next image reference.

//effect(current, next); 
KSDissolve("images/1.jpg", "images/2.jpg");
KSSlideUp("images/1.jpg", "images/2.jpg");
KSSlideDown("images/1.jpg", "images/2.jpg");
KSSlideLeft("images/1.jpg", "images/2.jpg");
KSSlideRight("images/1.jpg", "images/2.jpg");
KSMosaic("images/1.jpg", "images/2.jpg");
KSWindows("images/1.jpg", "images/2.jpg");
KSDoors("images/1.jpg", "images/2.jpg");