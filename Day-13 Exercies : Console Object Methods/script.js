// Exercises:Level 1


// Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.table(countries)

// Display the countries object as a table

const objOfCountries = {
    firstCoun : 'Germany',
    secondCoun : 'Serbia',
    thirdCoun : 'Gree',
    fourthCoun : 'Cuba'


}
console.table(objOfCountries)




// Use console.group() to group logs
console.group('Animals')
let animals = ['cat','dog', 'wolf', 'elephant','fox']
console.log(animals)
console.groupEnd()



// Exercises:Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2*10, '10 is greater than 20')



// Write a warning message using console.warn()

console.warn('This is a warning message!')

// Write an error message using console.error()

console.error('This is an error message!')



// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach


let cities = ['Istanbul', 'Athens', 'Oslo', 'Stockholm', 'Diyarbakır', 'Sardinia']


console.time('while loop')
let i = 0
while(i < cities.length ){
    console.log(cities[i])
    i ++
}
console.timeEnd('while loop')


console.time('for loop')
for (let i = 0; i < cities.length; i++){
    console.log(cities[i])
}
console.timeEnd('for loop')



console.time ('for of loop')

for (let city of cities){
    console.log(city)
}
console.timeEnd('for of loop')

console.time('forEach loop')

cities.forEach(element=>console.log(element))
console.timeEnd('forEach loop')

