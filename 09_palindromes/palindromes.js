const palindromes = function (str) {
  let reverseIndex = str.length - 1;
  let strIndex = 0;

  console.log(str);
  console.log(str.length);

  while (reverseIndex > -1 && strIndex < str.length) {
    if (!((str.charCodeAt(strIndex) >= 65 && str.charCodeAt(strIndex) < 91) || (str.charCodeAt(strIndex) >= 97 && str.charCodeAt(strIndex) < 123))) {
      strIndex++;
      continue;
    }
    if (!((str.charCodeAt(reverseIndex) >= 65 && str.charCodeAt(reverseIndex) < 91) || (str.charCodeAt(reverseIndex) >= 97 && str.charCodeAt(reverseIndex) < 123))) {
      reverseIndex--;
      continue;
    }
    if (str.toLowerCase().charCodeAt(strIndex++) != str.toLowerCase().charCodeAt(reverseIndex--)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
