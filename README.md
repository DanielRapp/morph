# Morphological image processing
This is a simple tool for playing around with morphological image processing.

## How to use it
Here's a simple example
```html
<html>
  <body>
    <canvas id="demo" width=500 height=500></canvas>
    <script src="morph.js"></script>
    <script>
      var img = morph.generateRandomImage(500, 500, 100000);
      var structElem = morph.generateStructureElement(10);
      var morphResult = morph.dilate(img, structElem);

      var canvas = document.getElementById('demo');
      morph.drawImage(morphResult, canvas);
    </script>
  </body>
</html>
```
All that's really required is `morph.complement`, `morph.union` and `morph.erode`.
Read more in [the companion post on this](http://danielrapp.github.io/morph/).

## What to contribute?
There are a bunch of cools things that could
added. Like _topology preserving mappings_, etc.
Read more [here](http://www.isy.liu.se/cvl/edu/TSBB08/lectures/DBgrk6.pdf), and [here](http://www.isy.liu.se/cvl/edu/TSBB08/lectures/DBgrk7.pdf)
and in [this book](http://www.bioss.ac.uk/people/chris/ch5.pdf).
