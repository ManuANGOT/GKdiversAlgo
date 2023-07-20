const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Palindrome(mot) {
 
  mot = mot.replace(/[^a-zA-Z]/g, '').toLowerCase();
// je ne veux pas de chiffres
  for (let i = 0; i < Math.floor(mot.length / 2); i++) {
    if (mot[i] !== mot[mot.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

rl.question("Entrez un mot (strictement en lettres) : ", function(motUser) {
  if (motUser) {
    if (Palindrome(motUser)) {
      console.log(`"${motUser}" est un palindrome.`);
    } else {
      console.log(`"${motUser}" n'est pas un palindrome.`);
    }
  } else {
    console.log("Vous n'avez pas saisi de mot.");
  }

  rl.close();
});