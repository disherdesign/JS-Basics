//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
  	return name === "Tyler";
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  var getName = function() {
  	var Name = prompt("what is your name?");
  	return Name;
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.



  function welcome() {
  	return alert("Welcome, " + getName())
  }


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  // answer- A parameter is defined with the function declaration, 
  // while a argument is what gets passed in place of a parameter when 
  // the function is invoked


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // NaN // Null // 0 // false // Undefined // ''(emptystring)
  // example: `return (0 === true)` returns false



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
  	return "Drew"
  	// return ("My name is " + name.toString()); ("more than asked for, broke jasmine")
  }
  



//Now save the function definition of myName into a new variable called newMyName

  var newMyName = function() {
  	return myName()
  }

//Now alert the result of invoking newMyName
	alert(newMyName())


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
  	var myNameIs = function() {
  		return "Drew"
  	}
  	return myNameIs;
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = function() {
  	return outerFn().toString()
  }

//Now invoke innerFn.
	innerFn()