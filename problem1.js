const people = [
    { name: 'abdullah', age: 18, gender: 'male' },
    { name: 'foysal', age: 16, gender: 'male' },
    { name: 'abid', age: 7, gender: 'male' },
    { name: 'safia', age: 3, gender: 'female' }
];

const filteredNames = people.filter(person => person.gender !== 'female').map(person => person.name);
console.log(filteredNames);