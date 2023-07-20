// Fonction pour permuter deux entiers
function permuterEntiers(a, b) {
    console.log("Avant la permutation :");
    console.log("a =", a);
    console.log("b =", b);
  

    const temp = a;
    a = b;
    b = temp;
  
    console.log("Après la permutation :");
    console.log("a =", a);
    console.log("b =", b);
  }
  
  // Fonction pour tester si le nombre entré est premier
  function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
  
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= nombre) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  // Demander à l'utilisateur d'entrer les deux entiers
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Entrez le premier entier : ", (entier1) => {
    readline.question("Entrez le deuxième entier : ", (entier2) => {
      // Convertir les entrées en nombres entiers
      entier1 = parseInt(entier1);
      entier2 = parseInt(entier2);
  
      permuterEntiers(entier1, entier2);
  
      // Tester si les deux nombres sont premiers
      console.log(entier1, "est un nombre premier :", estNombrePremier(entier1));
      console.log(entier2, "est un nombre premier :", estNombrePremier(entier2));
  
      readline.close();
    });
  });