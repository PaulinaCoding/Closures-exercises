var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

//console.log(rollDie());  // 1 (for example)

// Create a function called makeLoadedDie() which returns a function that when called, 
// seems to generate random numbers between 1 and 6, but in fact 
// returns numbers in a row from a hardcoded list.



function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var item = 0

  return function() {
    /* your code here */
    //item ++
    //console.log(item++)
    //console.log(item++)

    return list[item ++ ]
  }
}

var rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
