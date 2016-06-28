

class Mammal {
  speak(){
    console.log('Dur hur');
  }
}

class Homosapien extends Mammal {
  something(){
    console.log('Grr');
  }
}

class Human extends Homosapien {
  speak(){
    console.log('Hello');
  }
}

var pedro = new Human();
pedro.speak();


//
//
//
//
//
// /// ---
//
// var Mammal = function(){
// };
//
// var Homosapien = function(){
// };
// Homosapien.prototype = Mammal.prototype;
//
// var Human = function(){
// };
// Human.prototype = Homosapien;
//
// Human.prototype.family = function(){
//     console.log("The humans formed a family.");
//
// };
//
//
// var  = function(){};
// dad.prototype = hooman.prototype;
//
//   var vader = new dad();
//   vader.family();
//
//   hooman.prototype.smile = function(){
//     console.log("smile :D");
//   };
//
// vader.smile();
