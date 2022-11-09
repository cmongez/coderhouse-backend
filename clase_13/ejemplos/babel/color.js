"use strict";

var colorRamdon = function colorRamdon() {
  var ramdon = parseInt(Math.random() * 255);
  return ramdon;
};
var result = "El color generado es: (".concat(colorRamdon(), ",").concat(colorRamdon(), ",").concat(colorRamdon(), ")");
console.log(result);
