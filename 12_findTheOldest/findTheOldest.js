const findTheOldest = function(arr) {
  return arr.reduce((oldest, person) => {
    let currentAge, prevAge;

    //"key" in object tests whether property is undefined in object
    if ("yearOfDeath" in person === false)
      person.yearOfDeath = new Date().getFullYear();

    currentAge = person.yearOfDeath - person.yearOfBirth;
    prevAge = oldest.yearOfDeath - oldest.yearOfBirth;//
    return currentAge > prevAge ? person : oldest;
  }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
