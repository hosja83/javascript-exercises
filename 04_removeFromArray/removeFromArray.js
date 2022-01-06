const removeFromArray = function(arr, ...args) {
  let arrayAfterRemoval = new Array();
  for (let i = 0; i < arr.length; i++){
    let skipped = false;
    
    for (let k = 0; k < args.length; k++) {
      if (arr[i] === args[k]) {
        skipped = true;
        break;
      }
    }
    
    if (skipped) {
      continue;
    }

    arrayAfterRemoval.push(arr[i]);
  }
  return arrayAfterRemoval;
};

// Do not edit below this line
module.exports = removeFromArray;
