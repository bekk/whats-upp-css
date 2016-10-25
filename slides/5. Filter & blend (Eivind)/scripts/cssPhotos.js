
let insertMarkup = () => {
  let cssPhotos = document.getElementsByClassName("cssPhotos")[0];
  cssPhotos.innerHTML = markup;
  var filterdude = document.getElementById("filterdude");
  window.outputTag = document.getElementById("filterValue");
  console.log(outputTag);
}
let insertInABit = () => {
  let timeout = window.setTimeout(insertMarkup, 1000);
}
window.onload = insertInABit;


var filterText = function() {
  return "sepia(" + sepia + "%) invert(" + invert +
    "%) saturate(" + saturate + "%) hue-rotate(" + hueRotate + "deg) contrast(" + contrast +
    "%) grayscale(" + grayscale + "%) brightness(" + brightness + "%) blur(" + blurAmount + "px) opacity(" + opacity + "%);"
}
var filterTextCodeBlock = function() {
  return `<span class="hljs-attribute">filter</span>: <span class="hljs-value">
  ${cssLine('sepia', sepia+'%')} ${cssLine('invert', invert+'%')}
  ${cssLine('saturate', saturate+'%')} ${cssLine('hue-rotate', hueRotate+'deg')}
  ${cssLine('contrast', contrast+'%')} ${cssLine('grayscale', grayscale+'%')}
  ${cssLine('grayscale', grayscale+'%')} ${cssLine('blur', blurAmount+'px')}
  ${cssLine('opacity', opacity+'%')}</span>`
}

var cssLine = (functionName, value) => `<span class="hljs-function">${functionName}</span>(<span class="hljs-number">${value}</span>)`;

var blurAmount = 0;
var brightness = 100;
var contrast = 100;
var dropShadow = 0;
var grayscale = 0;
var hueRotate = 0;
var invert = 0;
var opacity = 100;
var saturate = 100;
var sepia = 0;
var setOutput = function(value){
  window.outputTag.innerHTML = value;
}

var setFilter = function() {
  filterdude.setAttribute("style",
    "-webkit-filter: " + filterText()
    + "filter: " + filterText());
  setOutput(filterTextCodeBlock());
}

var changeGrayscale = function(value){
  grayscale = value;
  setFilter();
}
var changeBlurAmount = function(value){
  blurAmount = value;
  setFilter();
}
var changeBrightness = function(value){
  brightness = value;
  setFilter();
}
var changeContrast = function(value){
  contrast = value;
  setFilter();
}
var changeHueRotate = function(value){
  hueRotate = value;
  setFilter();
}
var changeSepia = function(value){
  sepia = value;
  setFilter();
}
var changeInvert = function(value){
  invert = value;
  setFilter();
}
var changeSaturate = function(value){
  saturate = value;
  setFilter();
}
var changeSaturate = function(value){
  saturate = value;
  setFilter();
}
var changeOpacity = function(value){
  opacity = value;
  setFilter();
}
var changeBlur = function(value){
  blurAmount = value;
  setFilter();
}



const markup =
`<div class="imageTarget">
 <img id="filterdude" src="assets/flower.jpg">
</div>
<div class="controls">
<div class="filterGroup">
 <h2>Light</h2>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   contrast
   <output name="amount" for="inputRange">100</output>%
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeContrast(this.value)" value="100" min="0" max="200" />
 </form>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   brightness
   <output name="amount" for="inputRange">100</output>%
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeBrightness(this.value)" value="100" min="0" max="200" />
 </form>
</div>
<div class="filterGroup">
 <h2>Color</h2>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   sepia
   <output name="amount" for="inputRange">0</output>%
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeSepia(this.value)" value="0" min="0" max="100" />
 </form>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   invert
   <output name="amount" for="inputRange">0</output>%
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeInvert(this.value)" value="0" min="0" max="100" />
 </form>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   saturate
   <output name="amount" for="inputRange">100</output>%
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeSaturate(this.value)" value="100" min="0" max="200" />
 </form>
 <form class="filterEdit" oninput="amount.value=inputRange.value">
   rotate hue
   <output name="amount" for="inputRange">0</output>deg
   <input type="range" name="inputRange" class="filterEdit-input" onInput="changeHueRotate(this.value)" value="0" min="0" max="360" />
 </form>
 <form class="filterEdit" oninput="amount.value=grayscaleRange.value">
   grayscale
   <output name="amount" for="grayscaleRange">0</output>%
   <input type="range" name="grayscaleRange" class="filterEdit-input" onInput="changeGrayscale(this.value)" value="0" min="0" max="100" />
 </form>
</div>
<div class="filterGroup">
 <h2>Extra</h2>
 <form class="filterEdit" oninput="amount.value=blurRange.value">
   blur
   <output name="amount" for="blurRange">0</output>px
   <input type="range" name="blurRange" class="filterEdit-input" onInput="changeBlur(this.value)" value="0" min="0" max="20" />
 </form>
 <form class="filterEdit" oninput="opacityAmount.value=opacityRange.value">
   opacity
   <output name="opacityAmount" for="opacityRange">100</output>%
   <input type="range" name="opacityRange" class="filterEdit-input" onInput="changeOpacity(this.value)" value="100" min="0" max="100" />
 </form>
</div>
</div>
<div class="output">

 <code class="CSS hljs css remark-code" id="filterValue">
   <span class="hljs-attribute">filter</span>: <span class="hljs-value">
    <span class="hljs-function">sepia</span>(<span class="hljs-number">0%</span>)
    <span class="hljs-function">invert</span>(<span class="hljs-number">0%</span>)
    <span class="hljs-function">saturate</span>(<span class="hljs-number">100%</span>)
    <span class="hljs-function">hue-rotate</span>(<span class="hljs-number">0deg</span>)
    <span class="hljs-function">contrast</span>(<span class="hljs-number">100%</span>)
    <span class="hljs-function">grayscale</span>(<span class="hljs-number">0%</span>)
    <span class="hljs-function">brightness</span>(<span class="hljs-number">100%</span>)
    <span class="hljs-function">blur</span>(<span class="hljs-number">0px</span>)
    <span class="hljs-function">opacity</span>(<span class="hljs-number">100%</span>)
    </span>
 </code>
</div>`
