let balance = 5000;
let Q = false;

while (Q === false) {
  let input = prompt('Welcome to Bank of Nacirema. Please make your selection.');

switch (input) {
    case 'B':{
      alert('Your balance is currently $' + balance.toFixed(2));
      break;
    }
    case 'W':{
      let withdrawal = prompt('How much would you like to take out today?');
      result = Number(balance) - Number(withdrawal);
      alert('Your balance is now $' + result.toFixed(2));
      break;
    }
    case 'D':{
      let deposit = prompt('Please enter a amount you would like to deposit');
      result = Number(balance) + Number(deposit);
      alert('Your balance is now $' + result.toFixed(2));
      break;
    }
     case 'Q': {
      quit = true;
      break;
    }
  }
}
