// Exercises in this file = // 

// 1. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// 2.Declare four variables without assigning values

// 3. Declare four variables with assigned values

// 4. Declare variables to store your first name, last name, marital status, country and age in multiple lines

// 5. Declare variables to store your first name, last name, marital status, country and age in a single line

// Declare two variables myAge and yourAge and assign them initial values and log to the browser console.


// DATA TYPES [ String, Number, Boolean, undefined, null ]




// 1. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable


console.log( typeof 'word')
console.log( typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof worksOfSmith)
console.log(typeof booksOfSmith)



// 2. Declare four variables without assigning values


let cat 
let elephant
let donkey
let monkey
let bird 

console.log(typeof bird)

// 3. Declare four variables with assigned values

let number = 1
let car = "toyota"
let color = "black"
let x = false
let y = true


// 4. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let hisName = 'Adam', 
hisLastName= 'Smith',
hisMaritalStatus = false,
hisCountry = 'Scotland',
hisAge = 67

console.log(hisName, hisLastName, hisCountry, hisAge, hisMaritalStatus)

// 5. Declare variables to store your first name, last name, marital status, country and age in a single line

let herName = 'Rosa', herLastName='Luxemburg', herMaritalStatus= false, herCountry = 'Poland ', herAge='48'


console.log(herName,herLastName,herCountry,herAge,herMaritalStatus)


// 6. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

let myAge = 100
let yourAge=200
console.log(` I am ${myAge} years old. You are ${yourAge} years is old. `)




// Examples

//String data 

// let firstName = 'Adam' //string 
// let lastName = 'Smith'
// let country = "Scotland"
// let city= 'Kirkcaldy'



//Number data

// let age= 67 // number
// let children= 0 //number


//Boolean data

// let isMarried = false  // boolean
// let hasDied = true  //boolean


//Undefined data


// let worksOfSmith
// let birthDateofSmith

// Null data

// let booksOfSmith = null // Obj

// Many times we often get confused on what the difference between UNDEFINED and NULL is. Simply put, undefined means a variable has been declared but has not yet been assigned a value. undefined is a type by itself (undefined). Unassigned variables are initialized by JavaScript with a default value of undefined.
// On the other hand, null is an object. It can be assigned to a variable as a representation of no value. JavaScript never sets a value to null. That must be done programmatically.

// taken from
// https://flexiple.com/javascript/undefined-vs-null-javascript

