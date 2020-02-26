var isValid = function(s) {
  let result = true;
  //if the first parenthesis is ], } or )
  //one case
  if (s.charAt(0) === ")" || (s.charAt(0) === "]") | (s.charAt(0) === "}")) {
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
