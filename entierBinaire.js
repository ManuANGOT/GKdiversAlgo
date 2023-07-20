function decimalToBinary(decimal) {
    if (decimal === 0) {
      return '0';
    }
  
    let binary = '';
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  }
  
  const decimalNumber = 513;
  const binaryNumber = decimalToBinary(decimalNumber);
  console.log(`Le nombre binaire équivalent de ${decimalNumber} est : ${binaryNumber}`);