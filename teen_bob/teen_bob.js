var hey = function(input) {

  var quietBob = function(input) {
     if (input === '' || input === '   '){
		  return true
	  } 										//checking for any silences
  };

  var bobYells = function(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input;  //found this clever test on the internetz >:D
  };

  var bobAsk = function(input) {
	  return input.charAt(input.length - 1) == '?';    //cheching for questions
  };

    if (bobYells (input) ) {return 'Whoa, chill out!';}

    else if (bobAsk (input) ) {return 'Sure.';}

	 else if (quietBob (input) ) {return 'Fine. Be that way!';}

    else { return 'Whatever.'; };


  };
