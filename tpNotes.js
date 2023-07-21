const readline = require('readline');

// PARTIE 1 Saisir
function saisirNote(nomNote) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(`Veuillez saisir la note ${nomNote}: `, note => {
      rl.close();
      note = parseFloat(note);
      // Je vérifie si la saisie est valide (est un chiffre) ou comprise strictement entre 0 et 20
      if (isNaN(note) || note < 0 || note > 20) {
        console.log("Saisie invalide. Veuillez entrer une note comprise entre 0 et 20.");
        return saisirNote(nomNote); // Réessayer la saisie si la note est en dehors de 0-20
      } else {
        resolve(note); 
      }
    });
  });
}

// PARTIE 2 Moyenne
function calculerMoyenne(notes) {
  const total = notes.reduce((acc, val) => acc + val, 0);
  return total / notes.length;
}

// Saisir les notes
async function saisirNotes() {
  let notes = [];
  const nomsNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  for (let i = 0; i < 9; i++) {
    const note = await saisirNote(nomsNotes[i]);
    notes.push(note);
  }

  // Calcul et affichage de la moyenne
  const moyenne = calculerMoyenne(notes);
  console.log(`La moyenne est : ${moyenne}`);

// PARTIE 3 Message
  if (moyenne > 15) {
    console.log("Félicitations ! Vous avez bien travaillé !");
  }
}

saisirNotes();