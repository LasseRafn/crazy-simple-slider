# A simple, responsive, slider
Simple slider that I use for most of my projects. Using almost only CSS (transitions, transform and such) it's super easy to setup and very lightweight.

However, it's currently depending on jQuery.

Feel free to use it in your projects; do whatever you want.

# Demo
http://codepen.io/LasseRafn/pen/yOOpaJ

# Bugs?
Please submit an issue, or should you have the solution; make a pull request please.

# More features
I do not plan to implement options, other transitions (only those supported by native CSS) or similar. It's supposed to simply work, with no bs that makes sites lag.

# Events
## onSlideLeft (slide left)
This option allows you to set a callback for when the slider slides left
````
$("#slider").slider({
  onSlideLeft: function () { alert('slide left!'); }
});
````

## onSlideRight (slide right)
This option allows you to set a callback for when the slider slides right
````
$("#slider").slider({
  onSlideRight: function () { alert('slide right!'); }
});
````

# Methods
## setSlide(slideNum);
This method allows you to set the current slide using the slide number/index. Handy for thumbnails and such.
````
var slider = $("#slider").slider();

slider.setSlide(2);
````

## getCurrentSlide();
This method allows you to get the current slide number / index
````
var slider = $("#slider").slider();

slider.getCurrentSlide(); // 1
````
