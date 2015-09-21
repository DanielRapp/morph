(function(window, morph) {

  // First demo
  var canvasWidth  = 150;
  var canvasHeight = 100;
  var rndImg = morph.generateRandomImage(canvasWidth, canvasHeight);
  var structElem = morph.generateStructureElement(3);
  var structElemHuge = morph.generateStructureElement(20);

  var demo1 = window.document.getElementById('demo1');
  demo1.width = canvasWidth, demo1.height = canvasHeight;
  morph.drawImage(rndImg, demo1);

  var demo2 = window.document.getElementById('demo2');
  demo2.width = canvasWidth, demo2.height = canvasHeight;
  morph.drawImage(morph.erode( rndImg, structElem ), demo2);
  //morph.drawImage( morph.boundary( morph.erode( morph.dilate(rndImg, structElem), structElemHuge ), structElem ), demo2 );


  // Union demo
  var canvasWidthSmall  = 100;
  var canvasHeightSmall = 100;
  var rndImgSmall1 = morph.generateRandomImage(canvasWidthSmall, canvasHeightSmall, 100);
  var rndImgSmall2 = morph.generateRandomImage(canvasWidthSmall, canvasHeightSmall, 100);
  var structElemBig = morph.generateStructureElement(10);
  rndImgSmall1 = morph.dilate( rndImgSmall1, structElemBig );
  rndImgSmall2 = morph.dilate( rndImgSmall2, structElemBig );

  var union1 = window.document.getElementById('union1');
  var union2 = window.document.getElementById('union2');
  var union3 = window.document.getElementById('union3');
  union1.width = canvasWidthSmall, union1.height = canvasHeightSmall;
  union2.width = canvasWidthSmall, union2.height = canvasHeightSmall;
  union3.width = canvasWidthSmall, union3.height = canvasHeightSmall;
  morph.drawImage( rndImgSmall1, union1 );
  morph.drawImage( rndImgSmall2, union2 );
  morph.drawImage( morph.union(rndImgSmall1, rndImgSmall2), union3 );


  // Complement demo
  var compl1 = window.document.getElementById('compl1');
  var compl2 = window.document.getElementById('compl2');
  compl1.width = canvasWidth, compl1.height = canvasHeight;
  compl2.width = canvasWidth, compl2.height = canvasHeight;
  var rndImgCompl = morph.generateRandomImage(canvasWidth, canvasHeight, 10000);

  morph.drawImage(rndImgCompl, compl1);
  morph.drawImage( morph.complement(rndImgCompl), compl2 );


  // Erosion demo
  var erosionWidth = 290/2, erosionHeight = 200/2;
  var er1 = window.document.getElementById('er1');
  var er2 = window.document.getElementById('er2');
  var er3 = window.document.getElementById('er3');
  er1.width = erosionWidth, er1.height = erosionHeight;
  er2.width = 3, er2.height = 3;
  er3.width = erosionWidth, er3.height = erosionHeight;
  var rndImgEr = morph.generateRandomImage(erosionWidth, erosionHeight, 10000);

  morph.drawImage( rndImgEr, er1 );
  //morph.drawImage( morph.blackImage(3), er2 );
  morph.drawImage( morph.erode(rndImgEr, structElem), er3 );


  // Dilation demo
  var dilationWidth = 290/2, dilationHeight = 200/2;
  var di1 = window.document.getElementById('di1');
  var di2 = window.document.getElementById('di2');
  var di3 = window.document.getElementById('di3');
  di1.width = dilationWidth, di1.height = dilationHeight;
  di2.width = 3, di2.height = 3;
  di3.width = dilationWidth, di3.height = dilationHeight;

  morph.drawImage( rndImgEr, di1 );
  //morph.drawImage( morph.blackImage(3), di2 );
  morph.drawImage( morph.dilate(rndImgEr, structElem), di3 );


  // Border demo
  var border1 = window.document.getElementById('border1');
  var border2 = window.document.getElementById('border2');
  border1.width = canvasWidthSmall, border1.height = canvasHeightSmall;
  border2.width = canvasWidthSmall, border2.height = canvasHeightSmall;
  var rndImgBorder = morph.generateRandomImage(canvasWidthSmall, canvasHeightSmall, 1000);
  //var structElemBorder1 = morph.generateStructureElement(20);
  //var structElemBorder2 = morph.generateStructureElement(10);
  var structElemBorder = morph.generateStructureElement(3);
  rndImgBorder = morph.dilate( rndImgBorder, structElemBig );

  morph.drawImage( rndImgBorder, border1 );
  //var borderRes = morph.boundary( morph.erode( morph.dilate(rndImgBorder, structElemBorder1), structElemBorder1 ), structElemBorder2 );
  var borderRes = morph.boundary( rndImgBorder, structElemBorder );
  morph.drawImage( borderRes, border2 );


  // Game of life demo
  //// Mini-rules
  /*
  var canvasWidthTiny = 3;
  var canvasHeightTiny = 3;
  var golRule1 = window.document.getElementById('gol-rule-1');
  var golRule2 = window.document.getElementById('gol-rule-2');
  var golRule3 = window.document.getElementById('gol-rule-3');
  golRule1.width = canvasWidthTiny, golRule1.height = canvasHeightTiny;
  golRule2.width = canvasWidthTiny, golRule2.height = canvasHeightTiny;
  golRule3.width = canvasWidthTiny, golRule3.height = canvasHeightTiny;

  morph.drawImage( [[1,0,0],[1,1,0],[0,0,0]], golRule1 );
  morph.drawImage( [[0,0,0],[1,1,0],[1,0,0]], golRule2 );
  morph.drawImage( [[0,0,0],[1,1,0],[1,1,0]], golRule3 );
  */


  //// Demo
  var gol1 = window.document.getElementById('gol1');
  var gol2 = window.document.getElementById('gol2');
  gol1.width = canvasWidthSmall, gol1.height = canvasHeightSmall;
  gol2.width = canvasWidthSmall, gol2.height = canvasHeightSmall;
  var rndImgGol = morph.generateRandomImage(canvasWidthSmall, canvasHeightSmall, 1000);
  var golStructs = morph.generateRandomGOLStructs();

  var foreground = [ 0, 0, 0 ];
  var background = [ 127, 219, 255 ];
  morph.drawImage( rndImgGol, gol1, foreground, background );
  var golIter = rndImgGol;
  var golCount = 0;
  var golSymbolEl = window.document.getElementById('gol-symbol');

  setInterval(function() {
    golIter = morph.gol(golIter, golStructs);
    morph.drawImage( golIter, gol2, foreground, background );
    if (Math.random() < 0.05) {
      golCount = 0;
      rndImgGol = morph.generateRandomImage(canvasWidthSmall, canvasHeightSmall, 1000);
      golIter = rndImgGol;
      morph.drawImage( rndImgGol, gol1, foreground, background );

      golStructs = morph.generateRandomGOLStructs();
    }
    if (golCount++ % 100 == 0) golIter = rndImgGol;

    var strCount = golCount%100;
    if (strCount < 10) strCount = '0'+strCount;
    golSymbolEl.innerHTML = 'G<sup>'+strCount+'</sup>';
  }, 100);




})(window, window.morphology);
