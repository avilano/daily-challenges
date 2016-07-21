function decode(message) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const tebahpla = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
  let decodedStr = '';

  for (let i = 0; i < message.length; i++) {
    let codedLetter = message.charAt(i).toUpperCase();
    if (codedLetter === ' ') {
       decodedStr = decodedStr + ' ';
    }
    let letterIndex = alphabet.indexOf(codedLetter);
    let decodedLetter = tebahpla.charAt(letterIndex);
    decodedStr = decodedStr + decodedLetter;
  }
return console.log(decodedStr);
}

function encode(message) {
  const tebahpla = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
  let encodedStr = '';

  for (let i = 0; i < message.length; i++) {
    let decodedLetter = message.charAt(i).toUpperCase();
    if (decodedLetter === ' ') {
      encodedStr = encodedStr + ' ';
    }
    let letterIndex = alphabet.indexOf(decodedLetter);
    let encodedLetter = tebahpla.charAt(letterIndex);
    encodedStr = encodedStr + encodedLetter;
  }
  return console.log(encodedStr);
}
module.exports = { encode };
module.exports = { decode };

// encode('test');
// decode('GVHG');
// decode('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
