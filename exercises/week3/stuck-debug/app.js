var ask = require("readline-sync");

    // Goal:
    // This program should have the user:

    // Pick flowers and and keep looping if they select 'pick flowers',
    // Shoot guns and and keep looping if they select 'shoot guns',
    // Fight bears and end the program if they select 'fight bears'. 

    // It should tell them to select an option if they choose 'Cancel'



var isAlive = true;


while(isAlive){
  var options = ['pick flowers', 'shoot guns', 'fight bears'];

  var index = ask.keyInSelect(options, "Please select from the options.")

  if (options[index]=== 'pick flowers'){
      console.log("\n You picked some flowers and made a boutique. ")
  } else if (options[index]=== 'shoot guns'){
      console.log('\n You shoot and shoot and shoot some more.')
  }else if (options[index]=== 'fight bears'){
      console.log('\n You fought a bear and got beat up. Better luck next time.')
      isAlive = false;
  }else if (index === -1){
      console.log('\n You need to choose a number that is not zero. Please try again.')
  }
}
 