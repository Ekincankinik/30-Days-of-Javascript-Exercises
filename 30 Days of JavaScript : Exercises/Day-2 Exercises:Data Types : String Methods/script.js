
// EXERCISES

let challenge = '30 Days Of Javascript'

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLocaleLowerCase())


console.log(challenge.substring(3,21))

console.log(challenge.substring(0,3) )

console.log(challenge.includes('script'))  //true

console.log(challenge.includes('Script')) //false

console.log(challenge.split(' ')) 


let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'


console.log(brands.split ( ','))


console.log(challenge.replace('Javascript', 'Python'))


console.log(challenge.charAt(15))


console.log(challenge.indexOf("J"))

console.log(challenge.charCodeAt(11))

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('a'))

console.log(sentence.lastIndexOf('because'))

console.log(sentence.search("because"))

let challengeTrim = ' 30 Days Of JavaScript '

console.log(challengeTrim.trim(' '))


console.log(challenge.startsWith ('30') ) //true

console.log(challenge.startsWith('Days')) //false

console.log(challenge.endsWith('Javascript'))


let letter =  /a/gi

console.log(challenge.match(/a/g))

console.log(challenge.match(letter))

let say = "3O Days of"
console.log(say.concat(" Javascript"))

console.log(challenge.repeat(2))




// Other examples

// Primitive Data Types

// Strings
// Booleans
// Numbers
// Null 
// undefined
// Symbol


let numberOne = 4
let numberTwo=4
console.log( numberOne==numberTwo)



let x= "John"
let y= "Adam"

console.log(x==y)


// Non-primitive Data Types 

// Objects
// Arrays 

let numbers= [1,4,6,8,9,13]
console.log(numbers)

// for index of an array 


console.log(numbers[3])


// Math Objects

const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))
console.log(Math.round(1.2))

let a = 4.17



console.log(Math.round(a))

console.log(Math.ceil(a))

console.log(Math.floor(a))



console.log(Math.min(-10,9,2,22))


// Create Random number
const d= Math.random()
console.log(d)

// Create random number between 0 to 20


const f = Math.floor(Math.random()*20)
console.log(f)


// RANDOM NUMBER GENERATOR

let randomN = Math.random()
console.log(randomN)

let zeroToten = randomN * 11

console.log(zeroToten)

let numberRoundToFloor = Math.floor(zeroToten)

console.log(numberRoundToFloor)


// STRINGS

let firstName = 'Adam'
let lastName ='Smith'
let country = "Scotland"
let job = 'economist'
let backTick = `Javascript`
let space = " "
let age = 200


let fullName= firstName + space + lastName
console.log(fullName)

let info = fullName + ". I am " + age + " years old."

console.log(info)


