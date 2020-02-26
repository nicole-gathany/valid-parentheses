var isValid = function(s) {};

console.log(isValid("()") + " should be true");
console.log(isValid("[](){}") + " should be true");
console.log(isValid("(]") + " should be false");
console.log(isValid("([)]") + " should be false");
console.log(isValid("{[]}") + " should be true");
