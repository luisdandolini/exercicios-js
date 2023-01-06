/* 
1. Write a JavaScript program to display the current day and time in the following format.
*/

function fullDate() {
  let actualDate = new Date();
  let day = actualDate.getDay();
  let month = actualDate.getMonth() + 1;
  let year = actualDate.getFullYear();

  return `Today is ${day}/${month}/${year}`
}

console.log(fullDate())