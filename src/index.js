var isValid = function(s) {
  let result = true;
  //if the first parenthesis is ], } or )
  //one case
  if (s.charAt(0) === ")" || (s.charAt(0) === "]") | (s.charAt(0) === "}")) {
    result = false;
  }
  let isOpenPara = s.includes("(");
  let isClosedPara = s.includes(")");
  let isOpenCurly = s.includes("{");
  let isClosedCurly = s.includes("}");
  let isOpenBraket = s.includes("[");
  let isClosedBraket = s.includes("]");

  //cases where it opens but doesn't close
  if (
    isOpenBraket !== isClosedBraket ||
    isOpenPara !== isClosedPara ||
    isOpenCurly !== isClosedCurly
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
