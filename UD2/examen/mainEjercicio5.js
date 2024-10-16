const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const pares = array.filter(elem => {
  if (elem % 2 === 0) {
    return elem
  }
})

const sumaPares = (pares) => {
  let suma = 0;
  for(let i = 0; i < pares.length; i++) {
    suma += pares[i];
  }
  console.log(suma)
}

sumaPares(pares);