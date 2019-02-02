//Complete your work for the exercises in here:
const range = (s, e) => {
  let rangeArray = [];

  for (i = s; i <= e ; i++ ){
    rangeArray.push(i);
    let total = 0;
    total += i;
    }
  return rangeArray;
}
const sum = theArray => {
  let sum = 0;
  for (i = 0; i < theArray.length; i++) {
    sum += theArray[i];
}
  return sum;
}
console.log(sum(range(1,10)))
console.log(range(1,10))
//const test = range(1, 10);
//console.log(test);

//REVERSING array

let array = [1, 2, 3, 4];
console.log(array);

var newArray = array.reverse();
console.log(newArray);
