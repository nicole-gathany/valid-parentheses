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

  return result;
};

console.log(isValid("()") + " should return true");
console.log(isValid("[](){}") + " should return true");
console.log(isValid("(]") + " should return false");
//control for this case
// if "]" comes after "(" or "["
//if ")" comes after "[" or "{"
//if "}" comes after "[" or "("
console.log(isValid("([)]") + " should return false");
console.log(isValid("{[]}") + " should return true");
console.log(isValid("(()(") + " should return false");
//did not work for this case
console.log(isValid("[(({})}]") + " should be false");
//did not work for this case
console.log(isValid("[([]])") + " should return false");
