// Alternate Case

var alternateCase = function (s) {
  var chars = s.toLowerCase().split("");
  for (var i = 0; i < chars.length; i++) {
  if (chars[0].toUpperCase && chars[6].toUpperCase) {
    chars[0] = chars[0].toLowerCase();
    chars[6] = chars[6].toLowerCase();
  }
  chars[i] = chars[i].toUpperCase();
    
  }
  return chars.join("");
};

var txt = "Hello World";
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
console.log(alternateCase(txt));