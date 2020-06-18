const algo = '111';

// declaração de função
function callback(event) {
  console.log(algo) // 'aosdaojs'
  alert(`You clicked on button ${event.target.innerText}`);
}

// chamando a função
callback(event);

document.querySelector('.linha').addEventListener('click', callback); // passando a função por referência...

let algo = 'asada';

console.log(algo) // '';

algo.length // 0

algo.charAt(0) // 'a'

algo = 'a';

algo = 2;

algo = false;

algo = () => console.log('alsdlasd');

algo = [1, 2, 3];

// mdn array javascript

// mdn array.map()
// mdn array.forEach()
// mdn array.reduce() -> não tentar agora!

const array1 = algo.map(valor => {
  return valor * 2
});

console.log(array1) // [2, 4, 6]
console.log(algo) // [1, 2, 3]

algo.forEach(a => console.log(a));

for (let index = 0; index < algo.length; index++) {
  console.log(a);
}

algo = {
  param: 0,
  bla: 'sada',
  bla2: false,
  foo: () => console.log('object')
};

console.log(algo.param) // 0

const saldka = algo;

const outro = '';

const array = [];

array.push('');

// truthy: 'asa', 12, {}, [], {foo: ''}, [1], true...
// falsy: undefined, null, NaN, 0, '', false

// ==
// ===  // valor, tipo
// != diferente
// !== // valor, tipo
// >
// <
// >=
// <=
// ! 'nao'
// !! 'sim'

// !'' true
// !'asda' false
// !!'' false
// !!'asda' true

// + somar
// - subtrair
// / dividir
// * multiplicar
// % resto

if (!algo) {
  const outro2 = 'siodjaisdja';
} else {
  const alsal = 3;
}

// função pra somar dois números

function somar(a, b) {
  return a + b;
}

const somar2 = (a, b) => {
  return a + b
};

const blaskasdl = somar(1, 2);

console.log(blaskasdl) // 3

document // DOM
document.querySelector('h1:nth-of-type(2n)')