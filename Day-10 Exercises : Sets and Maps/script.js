

// Exercises Level 1 



1.1 
const emptySet = new Set()


1.2 

const setOfNums = new Set()
for (let i = 0; i < 10; i ++){
    setOfNums.add(i)
}
console.log(setOfNums)

1.3

const animals = [ 'Giraffe', 'Lynux', 'Cat', 'Dog']
const setOfAnimals = new Set(animals)
setOfAnimals.delete('Cat')
console.log(setOfAnimals)

1.4

setOfAnimals.clear()
console.log(setOfAnimals)


1.5 
const capitals = ['Berlin', 'Stockholm', 'London', 'Sarejevo', 'Ankara']
const setOfCapitals = new Set(capitals)
console.log(setOfCapitals)

1.6

// const countries = ['Finland', 'Sweden', 'Norway']

const setOfCountries = new Map()
for(const country of countries){
  setOfCountries.set(country,country.length)
}
console.log(setOfCountries)


// Exercises:Level 2


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


2.1 
let z = [...a,...b ]
const Z = new Set(z)
console.log(Z)



2.2 



const A = new Set(a)
const B = new Set(b)
let c = a.filter((num)=>B.has(num))
let C = new Set(c)
console.log(C)


2.3

const difference = a.filter((num)=>!B.has(num))
console.log(difference)


// Exercises:Level 3

// 1. How many languages are there in the countries object file.


// let languages = []


// for (let country of countries){
//   languages.push(country.languages)
// }
// let flatLanguages = languages.flat()
// let setOfLanguages = new Set(flatLanguages)
// let numberOfLanguages = setOfLanguages.size
// console.log(setOfLanguages)
// console.log(numberOfLanguages)

// or  

let setOfLanguages = new Set()

for (let country of countries) {
  for (let language of country.languages) {
    setOfLanguages.add(language)
  }
}

let numberOfLanguages = setOfLanguages.size
console.log(setOfLanguages)
console.log(numberOfLanguages)

// 2. Use the countries data to find the 10 most spoken languages:

