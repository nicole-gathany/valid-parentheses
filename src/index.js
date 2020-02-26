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

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "[") {
      openBrackFreq++;
    }
    if (s.charAt(i) === "]") {
      closedBrackFreq++;
    }
    if (s.charAt(i) === "(") {
      openParaFreq++;
    }
    if (s.charAt(i) === ")") {
      closedParaFreq++;
    }
    if (s.charAt(i) === "{") {
      openCurlyFreq++;
    }
    if (s.charAt(i) === "}") {
      closedCurlyFreq++;
    }
    //i'm scared
    //this doesn't work
    if (openBrackFreq !== closedBrackFreq) {
      result = false;
    }
    if (openCurlyFreq !== closedCurlyFreq) {
      result = false;
    }
    if (openParaFreq !== closedParaFreq) {
      result = false;
    }
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
