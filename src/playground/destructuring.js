//////////////////////
//Object Destructuring
//////////////////////

// const person = {
//   firstName: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 88,
//   },
// }

// const { firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     pubName: 'Penguin',
//   },
// }

// const { pubName: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

/////////////////////
//Array Destructuring
/////////////////////
const address = ['1299 S Juniper Street', 'Phiadelphia', 'Pensylvania', '19147']

const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75']

const [drink, , medium] = item

console.log(`A medium ${drink} costs ${medium}`)
