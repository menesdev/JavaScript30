const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '🌸');

// Styled
// console.log('%c I am some great text', 'font-size:50px; background: red;')

// warning!
console.warn('OH NOOO');

// Error :|
console.error('I am an error');

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 2, 'Thats wrong')

// clearing
console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/menesdev')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

//table
console.table(dogs)