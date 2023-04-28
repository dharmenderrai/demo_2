

// function printObj(obj) {
//   console.log(`${obj}`);
// }
function countWords(word, letter) {
  let count = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++
    }
  }
  return count;
}

function printArgs(arg1, arg2, arg3) {
  
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
}

// Sample
// const word = "Hello";
// const letter = 'Z'
// console.log(countWords(word, letter))

// printArgs("Hello", "World");
// printObj(myObject_1.property1);

myArray = ['a', 'b', 'c'];
const myObject_1 = {
  key1: 'value1',
  key2: 'value2',
  key3 : {
    key1_1: 'valueX',
    key2_1: 'valueY'
  }
};

const myObject_2 = new Object();
myObject_2.prop = 'value1';
myObject_2.address = 'value2';
myObject_2.name = 'value2';



for (const elem in myObject_2) {
  console.log(elem + ': ' + myObject_2[elem]);
}

for (const elem in myArray) {
  console.log(elem + ': ' + myArray[elem]);
}

for (const elem of myArray) {
  console.log(elem);
}


// for (const i in myObject_1) {
//   console.log(i + ': ' + myObject_1[i]);
// }

// console.log(myArray.length);
// console.log(myObject_1.length);
// console.log(myObject_2.length);