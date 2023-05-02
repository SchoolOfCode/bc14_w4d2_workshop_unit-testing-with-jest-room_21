/* Complete the following greetPerson function so that it passes 
the tests in index.test.js. 

String goes in as an argument -> "Greetings, Liz K" as the return value

Number or boolean goes in -> "Please try again with a name!"

*/

export function greetPerson(name) {
  if (typeof name === "string") {
    return `Greetings, ${name}`;
  } else {
    return "Please try again with a name!";
  }
}
