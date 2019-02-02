//Exercise 1
let temp = 44;
if (temp <= 32) {
  console.log("Watch out for ice!");
} else if (temp >= 33 && temp <= 55) {
  console.log("Better put on a jacket.");
} else if (temp >= 71 && temp <= 99){
  console.log("Summer is here!");
} else if (temp >= 56 && temp <= 70) {
  console.log("Such nice weather");
//} else if (temp === 212) (temp === 444) {
  //console.log("Where are you?");
} else {
  console.log("Global Warming!");
};
//Exercise 2
let time = new Date();
let date1 = time.getDate();
console.log(date1);

let month = new Date();
let month1 = month.getMonth();
console.log(month1);

function currentMonth(time) {
  return (time ? 'It is Jan' : "It isn't not Jan")
}
console.log(currentMonth(date1));

//Exercise 3
const a = 1

if (true) {
  const b = 2

  if (true) {
    const c = 3

    console.log(a) // What will this print?
    console.log(b) // What will this print?
    console.log(c) // What will this print?
  }


  console.log(a) // What will this print?
  console.log(b) // What will this print?
  console.log(c) // What will this print?
}

// global scope
console.log(a) // What will this print?
console.log(b) // What will this print?
console.log(c) // What will this print?
};
//Exercise 4


//Bonus
