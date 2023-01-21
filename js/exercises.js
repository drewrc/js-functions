(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

//num1/2: arguments, could be data, etc
//if num1 is greater than num2, returns num1. 
//if num2 is greater than num1, returns num2. 


//Answer: 


function max(num1, num2) {
  if (num1 > num2) {
    return num1
    //return console.log(num1);
  } else {
    return num2
    //return console.log(num2);
  };
};

max(4,8)



  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------



    //Answer:


function maxOfThree(num1, num2, num3) {
    
  return Math.max(num1, num2, num3);
  //return console.log(Math.max(num1, num2, num3)); //Math.max is a built in function
};

//maxOfThree(4,8,12);


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

//forming or statments: if(char === 'a' || char === "...")

//Answer:

function isVowel(char) {
  return 'aeiou'.includes(char);
  //return console.log('aeiou'.includes(char)); // .includes returns boolean
};

//isVowel('a');

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  //function rovarspraket() // ????


  //answer:

  function rovarspraket(text) {                    // text is 
    text = text.split("");                        // turns step 1 into array
    for(let i = 0; i < text.length; i++) {        //loops through array created in step 1
      if ("bcdfghjklmnpqrstvwxyz".includes(text[i])) { //.includes is command to execute consonant
        text[i] = text[i] + "o" + text[i];
      };
    };

    return text.join("");
   // return console.log(text.join("")); //puts array back into string 
  };

  //rovarspraket('I am swimming')

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
    //answer:

//answer using loop
//sum function
function sum(arr) {
  let sum = 0; //index starts on first number in array

  for (let i = 0; i < arr.length; i++) { //loop continues to execute until length of the array ends
    sum += arr[i];                //after loop executes, formula is added together
    //sum += arr[i]; -> shorthand 
  };
  return sum;
};

//console.log(sum([1,2,3,4]));

//multiply function 
function multiply(num) {
  let total = 1;
  for (let i=0; i<num.length; i++){
    total = (total * num[i])
  }
 return total;
};

//console.log(multiply([1,2,3,4]))



  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


  //answer:

  function reverse(str) {
    return str.split("").reverse().join(""); //(" ")- splits at every space () copies string
  };

  //console.log(reverse("jag testar"));



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
//answer:

function findLongestWord(arr) {
 let length = 0; //start at 1st string
 for(let i = 0; i < arr.length; i++) { //loop that runs through array 
  if(arr[i].length > length) { //is index length greater than length of word?
    length = arr[i].length; //
  };
 };
return length;
};

//console.log(findLongestWord(['dog', 'cat', 'moose']))


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

//answer:
//answer for loop

const filterLongWords = function(arr, int) {
  const length = arr.length;
  const longerThanI = [];
  for (i = 0; i < length; i++) {
    if (arr[i].length > int) {
    longerThanI[longerThanI.length] = arr[i];
  }
}
return longerThanI;
}

//console.log(filterLongWords(['do', 'cat', 'banana'], 3))

//filter method returns new true array based on function or does not return if false

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
//function 

var charFreq = function(str) {  //declare function expression
const freqList = {};           //declared/assigned list array
const length = str.length;      //declared/assigned length
for (let i = 0; i < length; i++){ //for loop to run through length of string
  if (str.charAt(i) in freqList) //if else ????
    freqList[str.charAt(i)] += +1;
    else
    freqList[str.charAt(i)] = 1;
}
return freqList;
}

//console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));


//square brackets if you dont know what property variable is 
//[*variablename*]['nameofstring']


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
