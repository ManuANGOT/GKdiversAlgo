const readline = require('readline');

function IntToHex() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("N = ", function(answer) {
    let N = parseInt(answer);

    if (isNaN(N)) {
      console.log("Veuillez saisir une valeur entière valide.");
    } else {
      const hexaValue = "0123456789ABCDEF";
      let H = "";
      let reste;
      while (N > 0) {
        reste = N % 16;
        H = hexaValue[reste] + H;
        N = Math.floor(N / 16);
      }
      console.log("H = " + H);
    }

    rl.close();
  });
}

IntToHex();