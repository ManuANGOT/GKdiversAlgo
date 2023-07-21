// Déclaration des prix supermarchés A et B
let prixA = 0; // prix d'un produit dans le supermarché A
let prixB = 0; // prix du même produit dans le supermarché B

// Variables : somme des paniers
let totalA = 0; // somme totale des prix A
let totalB = 0; // somme totale des prix B
let totalMini = 0; // somme totale des prix les moins chers

// Partie « exécutable »
totalA = 0;
totalB = 0;
totalMini = 0;

function saisirPrix() {
  prixA = parseFloat(prompt("Saisir le prix du produit dans le supermarché A (0 pour terminer)"));
  prixB = parseFloat(prompt("Saisir le prix du produit dans le supermarché B (0 pour terminer)"));
}

saisirPrix();

while (prixA !== 0 || prixB !== 0) {
  if (prixA > 0 && prixB > 0) {
    totalA += prixA;
    totalB += prixB;
    if (prixA < prixB) {
      totalMini += prixA;
    } else {
      totalMini += prixB;
    }
  } else {
    // Traitement des erreurs de saisie : on resaisit prixA ou prixB ou les 2
    if (prixA < 0) {
      prixA = parseFloat(prompt("Le prix du produit dans le supermarché A doit être positif. Saisir à nouveau :"));
    }
    if (prixB < 0) {
      prixB = parseFloat(prompt("Le prix du produit dans le supermarché B doit être positif. Saisir à nouveau :"));
    }
    if ((prixA === 0 && prixB !== 0) || (prixB === 0 && prixA !== 0)) {
      saisirPrix();
    }
  }
  saisirPrix();
}

// Afficher le montant du « panier idéal »
console.log("Le montant du panier idéal est : " + totalMini);

// Quel est le supermarché globalement le moins cher
if (totalA < totalB) {
  console.log("C’est le 1er supermarché le plus intéressant");
} else if (totalA > totalB) {
  console.log("C’est le 2ème supermarché le plus intéressant");
} else {
  console.log("Les 2 supermarchés se valent");
}