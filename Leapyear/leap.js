
/*
ALBERTO E. VILANO REYNA
Leap Year Calculator!
*/

var prompt = require('prompt');

prompt.start();

prompt.get(['year'], function (err, usrinput) {

    if ( (usrinput.year%4) == 0 && (usrinput.year%100) != 0 || (usrinput.year%400) == 0){

      console.log("The year: " + usrinput.year + " is a leap year!!");
    }
    else {
      console.log("The year: " + usrinput.year + " is NOT a leap year!!");
    }

 });
