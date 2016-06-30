
//This function checks if the parentesis string inputed is 'balanced';;
var ParCheck = function(string) {

  var stack = [];
  var Po = { '{': '}', '[': ']', '(': ')' };
  var Pc = { '}': true, ']': true, ')': true };

for (var i = 0; i < string.length; i ++) {
    var pointer = string[i];

    if (Po[pointer]) {
      //console.log("open found");
      stack.push(pointer);

    } else if (Pc[pointer]) {
      //console.log("closed found");

      if (Po[stack.pop()] !== pointer) return false;
    }
  }

  return stack.length === 0;
};

console.log(ParCheck("[(])"));
console.log(ParCheck("[()]{}{[()()]()}"));
console.log(ParCheck("{}()[]"));
console.log(ParCheck("{[[](()]}"));
