const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const numeroPrimo = (array) => {
  let numPrimo = false;
  for (let i = 0; i < array.length; i++) {
      if (array[i] % i == 0){
        console.log("Hay primo");
      }
  }
}

numeroPrimo(array);