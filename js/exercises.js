(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
function max(num1, num2) { //num1/2: arguments, could be data, etc
  if(num1>num2) { //if num1 is greater than num2, returns num1. 
    return num1; //if num2 is greater than num1, returns num2. 
  } else {num2
  }
}

//Answer: 

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {return num2;}
}

//#1, #4, #5


- console.log('here'); //debugging tool, dont leave in code














  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

function maxOfThree(num1, num2, num3) { //num1-3 are arguments 
  if (num1 > num2 && num3) { //function uses greater than and && statement to compare arguments
    return num1;
  } else if num2 > num3){
    return num2;
  } else if  {                     //largest of three numbers should be output
      return num3;
    }
  

    //Answer:
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3); //Math.max is a built in function
}










  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

isVowel('a')
 if ('a' == 'A' or 'E' or 'I' or 'O' or 'U') //attempted to chain or statement
 {return true;} else {return false;} //if else statement to return true if vowel is inputed

forming or statments: if(char === 'a' || char === "...")



//Answer:

function isVowel(char) {
  return 'aeiou'.includes(char); // .includes returns boolean
}





  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket() // ????


  //answer:

  function rovarspraket(text) {                    // text is 
    text = text.split("");                        // turns step 1 into array
    for(let i = 0; i < text.length; i++) {        //loops through array created in step 1
      if ("bcdfghjklmnpqrstvwxyz".includes(text[i])) { //.includes is command to execute consonant
        text[i] = text[i] + "o" + text[i];
      }
    }
    return text.join(""); //puts array back into string 
  }


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  const num = [1,2,3,4] //I think this needs to be iterated through an Array w/ a for loop to solve
  function sum(num) // but I am having a really difficult time understanding what each part means individually and together
    for(let i = 0; i++) //using freecodecamp: Iterate Through an Array with a For Loop as reference 


 


    //answer:

//answer using loop

function sum(arr) {
  let sum = 0; //index starts on first number in array

  for (let i = 0; i < arr.length; i++) { //loop continues to execute until length of the array ends
    sum = sum + arr[i];                //after loop executes, formula is added together
    //sum += arr[i]; -> shorthand 
  }
  return sum;

 return arr.reduce(function(acc, i) { //dictate how you start in a for loop
  return acc + 1;                   //can also dictate you increase/go backwards
 });
}


    function sum(arr) {
      arr.reduce(function(acc, i) {
        return acc + i;
      });

    }


function multiply(arr) 



  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


  //answer:

  function reverse(str) {
    return str.split("").reverse().join(""); //(" ")- splits at every space () copies string
  }



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
//answer:

function findLongestWord(arr) {
 let length = 0; //start at 1st string
 for(let i = 0; i < arr.length; i++) { //loop that runs through array 
  if(arr[i].length > length) { //is index length greater than length of word?
    length = arr[i].length; //
  }
 }
return length;
}


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
//answer:

function filterLongWords(arr, i) {
  return arr.filter(function (word){
    word.length > i;
  });
}

//answer for loop
const myArr = [];
for(let j = 0; j < arr.length; j++) {
  if(arr[j].length > i) {
    myArr.push(arr[j]); //why .push?
  }
}
return myArr;



//filter method returns new true array based on function or does not return if false



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
//function 
charFreq(str) {
const freqList = {};
str.split("").forEach(function (char) {
freqList[char] = freqList[char] + 1 || 1;
});
return freqList;
}


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
