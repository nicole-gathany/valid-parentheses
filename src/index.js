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

  console.log(result);
};

isValid("()");
isValid("[](){}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
