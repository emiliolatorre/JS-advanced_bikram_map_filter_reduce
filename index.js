//RESUELVE LOS EJERCICIOS AQUI

//MAP
//[] 1.
let numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = (array) => {
    return array.map(numero => numero*numero);
};

elevados(numbers);

//[] 2.
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const foodPhrase = foodList.map((plato) => {
    switch (plato) {
        case 'Pizza':
            return 'Como soy de Italia, amo comer Pizza';            
            break;
        case 'Ramen':
            return 'Como soy de Japón, amo comer Ramen';            
            break;
        case 'Paella':
            return 'Como soy de Valencia, amo comer Paella';            
            break;
        case 'Entrecot':
            return 'Aunque no como carne, el Entrecot es sabroso';            
            break;
        default:
            'No tengo información sobre esta comida';
            break;
    }
});

//[] 3.
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

const staffPhrase = staff.map(({name, role, hobbies}) => {
    return `${name} es  ${role} y le gusta ${hobbies[0]} y ${hobbies[1]}`
  });

console.log(staffPhrase);

//FILTER

//[] 4.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(numero => numero % 2 !== 0);

console.log(result4);

//[] 5.

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
];

const result5 = () => {
    const foodVeggie = foodList2.filter(({isVeggie}) => {
        return isVeggie === true});
    const Phrase = foodVeggie.map (({name}) => `Que rico ${name} me voy a comer!`)
    return console.log(Phrase)
};

result5();

//[] 6.

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  
const productosCaros = () => {
    const objCaros = inventory.filter(({price}) => price > 300);
    let arrayCaros = [];
    for (let element of objCaros) {
        arrayCaros.push(element.name);
    }
    return arrayCaros;
}

productosCaros();

//REDUCE

//[] 6.
const numerosArray = [39, 2, 4, 25, 62]

const multiplicador = numerosArray.reduce((accumulator, currentValue) => {return accumulator *currentValue});

console.log(multiplicador);

//[] 7.
const sentenceElements = [
    'Me',
    'llamo',
    'Emilio',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

const fuerza = sentenceElements.reduce((accumulator, currentValue) => {return accumulator + ' ' + currentValue});

console.log(fuerza);

//[] 8.
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  
const precioBooksCode = () => {
    const booksCode = books.filter(({category}) => category === 'code');
    const booksPrices = [];
    booksCode.forEach((book) => {
        booksPrices.push(book.price)
    })
    return booksPrices.reduce((accumulator, currentValue) => accumulator + currentValue);
}

precioBooksCode();