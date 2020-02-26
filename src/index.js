var isValid = function(s) {
  let result = true;
  //if the first parenthesis is ], } or )
  //one case
  if (s.charAt(0) === ")" || (s.charAt(0) === "]") | (s.charAt(0) === "}")) {
    result = false;
  }
  //if the last index is open
  if (
    s.charAt(s.length - 1) === "(" ||
    s.charAt(s.length - 1) === "[" ||
    s.charAt(s.length - 1) === "{"
  ) {
    result = false;
  }
  //cases where it opens but doesn't close
  if (
    s.includes("(") !== s.includes(")") ||
    s.includes("{") !== s.includes("}") ||
    s.includes("[") !== s.includes("]")
  ) {
    result = false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(" && s.charAt(i + 1) === "]") {
      result = false;
    }
    if (s.charAt(i) === "(" && s.charAt(i + 1) === "}") {
      result = false;
    }
    if (s.charAt(i) === "[" && s.charAt(i + 1) === "}") {
      result = false;
    }
    if (s.charAt(i) === "[" && s.charAt(i + 1) === ")") {
      result = false;
    }
    if (s.charAt(i) === "{" && s.charAt(i + 1) === ")") {
      result = false;
    }
    if (s.charAt(i) === "{" && s.charAt(i + 1) === "]") {
      result = false;
    }
  }

  let openBrackFreq = 0;
  let closedBrackFreq = 0;
  let openParaFreq = 0;
  let closedParaFreq = 0;
  let openCurlyFreq = 0;
  let closedCurlyFreq = 0;

  let arr = s.split("");
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") {
      openBrackFreq++;
    }
    if (arr[i] === "]") {
      closedBrackFreq++;
    }
    if (arr[i] === "(") {
      openParaFreq++;
    }
    if (arr[i] === ")") {
      closedParaFreq++;
    }
    if (arr[i] === "{") {
      openCurlyFreq++;
    }
    if (arr[i] === "}") {
      closedCurlyFreq++;
    }
  }
  //i'm scared
  //i think it didn't work because i didn't close the curly braces at the right place
  if (openBrackFreq !== closedBrackFreq) {
    result = false;
  }
  if (openCurlyFreq !== closedCurlyFreq) {
    result = false;
  }
  if (openParaFreq !== closedParaFreq) {
    result = false;
  }
  let openBrackArr = [];
  let closedBrackArr = [];
  let openParaArr = [];
  let closedParaArr = [];
  let openCurlyArr = [];
  let closedCurlyArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "[") {
      openBrackArr.push(i);
    }
    if (s.charAt(i) === "]") {
      closedBrackArr.push(i);
    }
    if (s.charAt(i) === "(") {
      openParaArr.push(i);
    }
    if (s.charAt(i) === ")") {
      closedParaArr.push(i);
    }
    if (s.charAt(i) === "{") {
      openCurlyArr.push(i);
    }
    if (s.charAt(i) === "}") {
      closedCurlyArr.push("}");
    }
  }
  //shows the difference between each closing and opening bracket
  let squareDiff = [];
  if (
    openBrackFreq !== 0 &&
    closedBrackFreq !== 0 &&
    openBrackFreq === closedBrackFreq
  ) {
    // console.log(closedBrackArr);
    // console.log(openBrackArr);
    // console.log(arr);
    for (let i = 0; i < openBrackFreq; i++) {
      squareDiff.push(closedBrackArr[openBrackFreq - 1 - i] - openBrackArr[i]);
    }
  }
  let paraDiff = [];
  if (
    openParaFreq !== 0 &&
    closedParaFreq !== 0 &&
    openParaFreq === closedParaFreq
  ) {
    for (let i = 0; i < openParaFreq; i++) {
      paraDiff.push(closedParaArr[openParaFreq - 1 - i] - openParaArr[i]);
    }
  }
  let curlyDiff = [];
  if (
    openCurlyFreq !== 0 &&
    closedCurlyFreq !== 0 &&
    openCurlyFreq === closedCurlyFreq
  ) {
    for (let i = 0; i < openCurlyFreq; i++) {
      curlyDiff.push(closedCurlyArr[openCurlyFreq - 1 - i] - openCurlyArr[i]);
    }
  }
  console.log(arr);
  console.log(squareDiff);
  console.log(paraDiff);
  console.log(curlyDiff);

  // if(squareDiff.every(x => x%2 ===0) ===false && openBrackArr !==0){result =false}
  // if(paraDiff.every(x => x%2 ===0)===false){result =false}
  // if(curlyDiff.every(x =>x%2 ===0)===false){result =false}
  return result;
};

console.log(isValid("()") + " should return true");
console.log(isValid("[](){}") + " should return true");
console.log(isValid("(]") + " should return false");
// control for this case
// if "]" comes after "(" or "["
//if ")" comes after "[" or "{"
//if "}" comes after "[" or "("
// console.log(isValid("([)]") + " should return false");
// console.log(isValid("{[]}") + " should return true");
// console.log(isValid("(()(") + " should return false");
// //did not work for this case
// console.log(isValid("[(({})}]") + " should be false");
//did not work for this case
//i need to think about this case more
//i'm thinking a palindrome test could work but they don't need to be palindromes to be true
console.log(isValid("[([]])") + " should return false");
