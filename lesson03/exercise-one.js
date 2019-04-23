const Aeons = ['Valefor', 'Ifrit', 'Ixion', 'Shiva', 'Bahamut']

// Add an element to the end of the array.

Aeons.push('Anima');

// Remove the third element.

Aeons.splice(2,1);

console.log(Aeons);

// Create a string from the elements and comma separate them.

const AeonsList = Aeons.join(',');

console.log(AeonsList);
