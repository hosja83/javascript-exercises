const caesar = function(str, shift) {
  const strArr = str.split("");
  const newStrArr = strArr.map((ch) => {
    let charCode = ch.charCodeAt(0);
    let adjustedShift = shift % 26;
    let newCharCode = charCode + adjustedShift;
    if ((charCode >= 65 && charCode < 91) || (charCode >= 97 && charCode < 123)) {
      if (charCode >= 65 && charCode < 91) {
        if (newCharCode >= 91) {
          return String.fromCharCode((newCharCode % 91) + 65);
        } else if (newCharCode < 65) {
          return String.fromCharCode(newCharCode + 26);
        } else {
          return String.fromCharCode(newCharCode);
        }
      } else if (newCharCode >= 123) {
        return String.fromCharCode((newCharCode % 123) + 97);
      } else if (newCharCode < 97) {
        return String.fromCharCode(newCharCode + 26);
      } else {
        return String.fromCharCode(newCharCode);
      }
    } else {
      return ch;
    }
  });

  return newStrArr.join("");
};

// Do not edit below this line
module.exports = caesar;
