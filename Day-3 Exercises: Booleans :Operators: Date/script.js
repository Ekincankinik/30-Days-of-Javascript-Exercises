
// Exercises Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName= 'Adam'
const lastName= 'Smith'
const country = 'Scotland'
const city= ' Kirkcaldy'
const age = 67
const isMarried= false
const years= 2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof years)


//2. Check if type of '10' is equal to 10


console.log(10 ==='10') //to compare types of values use (===)


// false since 10's type is number and '10's type is string




// 3. Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8')==10)



// 4. Boolean value is either true or false.


// Write three JavaScript statement which provide truthy value.  Write three JavaScript statement which provide falsy value.

let truthyNumber=  1
let truthyString = 'Banana'
let truthyArr = [1,2,3]

let falsyNumber= 0
let falsyStatement = ''
let falsyStatement2 = null

console.log(Boolean(truthyNumber))
console.log(Boolean(truthyString))
console.log(Boolean(truthyArr))


console.log(Boolean(falsyNumber))
console.log(Boolean(falsyStatement))
console.log(Boolean(falsyStatement2))



console.log(Boolean(0))//false
console.log(Boolean(''))//false
console.log(Boolean(null))//false

console.log(Boolean(-1))//true
console.log(Boolean('Hello Javascript!')) //true


//5. Figure out the result of the following comparison expression first without using console.log().

console.log(4 > 3) //true
console.log (4 >= 3) //TRUE
console.log (4 < 3) // false
console.log (4 <= 3) //false
console.log (4 == 4) //true
console.log (4 === 4) //true
console.log (4 != 4) //false
console.log (4 !== 4) //false
console.log (4 != '4') //false
console.log (4 == '4') //true
console.log (4 === '4') //false


let lang1 = 'javascript'
let lang2 = 'python'

console.log(lang1.length)
console.log(lang2.length)

let falsyComparison = lang1.length == lang2.length

console.log(falsyComparison)



// 6. 




console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12 ) //false
console.log(4 > 3 || 10 < 12 ) //true
console.log(4 > 3 || 10 > 12) // true
console.log( !(4 > 3) ) //false
console.log(!( 4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(! ( 4 > 3 && 10 > 12)) //true
console.log(!(4==='4')) //true

let dragon = 'dragon'
let python = 'python'

console.log(!(dragon.includes('on')) && !(python.includes('on'))) // false

7.



const now = new Date()

const year = now.getFullYear()
console.log(year)
//or
console.log(now.getFullYear())


const month = now.getMonth()
console.log(month)
//or
console.log(now.getMonth())

console.log(now)

const day = now.getDay()
console.log(day)
//or
console.log(now.getDay())

const minutes = now.getMinutes()
console.log(minutes)
// or
console.log(now.getMinutes())

const allSeconds = Date.now() 
console.log(allSeconds)



// Exercises Level 2


// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

function calculateTri(){
let base = Number( prompt ('Enter the base of the triangle'))
let height = Number( prompt( 'Enter the height of the triangle'))
let area = base*height*0.5
console.log(area)
}
 calculateTri()



// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)


function perimeterTriangle (){

    let aSide = Number( prompt('Enter the lenght of a') )
    let bSide= Number(prompt ('Enter the lenght of b'))
    let cSide= Number(prompt('Enter the lenght of c'))
    let perimeter = aSide+bSide+cSide
    console.log(perimeter)

}

perimeterTriangle()







// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function calculateRectangle(){

let lenght = Number(prompt('Enter the lenght of rectangle'))
let width = Number(prompt('Enter the width of rectangle'))
let area = lenght * width
let perimeter = 2 *( lenght+ width)

console.log(area)

console.log(perimeter)


}
calculateRectangle()







// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

function calculateCircle (){

const pi = 3.14
let r = Number(prompt('Enter the radius of the circle'))
let area = pi * r * r
let circumference = 2 * pi * r

console.log(area)
console.log(circumference)
}


calculateCircle()




9. 

function calculatePay (){

    let workingHours = Number(prompt('Enter the working hours' ))
    let ratePerHour = Number( prompt(' Enter the rate per hour'))
    let yourWeeklyEarning = workingHours*ratePerHour
    console.log(yourWeeklyEarning)
}
// calculatePay()

10. 

let fname = prompt('Enter your name')
if ( fname.length > 7 ){
    console.log('Your name is long')
}
else{ console.log('Your name is short')}


11. 

let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'

if ( firstNames.length > lastNames.length){
    console.log(`Your firstname, ${firstNames} is longer your family name, ${lastNames}`)
}

12.
let myAge = 250
let yourAge = 25


console.log( ` I am ${myAge - yourAge} years older than you.`)

13. 


let userBirthYear = Number(prompt('Enter the year you were born.'))
let userAge = 2023 - userBirthYear

if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`)

}
else{
    console.log(` You are ${userAge}. You will be allowed to drive after ${ 18 - userAge} years.`)}

14. 

let yearsYouLive = Number(prompt('Enter number of years you live '))
let secondsInYear = 365 * 24 * 60 * 60
let secondsYouLive = yearsYouLive * secondsInYear

console.log(secondsYouLive)

15. 

const today= new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth()
const thisDay = today.getDate()
const thisHours = today.getHours()
const thisMinutes = today.getMinutes()

console.log(` ${thisDay}/${thisMonth}/${thisYear} ${thisHours} :${thisMinutes}`)




// Exercises Level 3


