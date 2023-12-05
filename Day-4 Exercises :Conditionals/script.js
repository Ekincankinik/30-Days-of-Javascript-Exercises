

// EXERCISES LEVEL 1


1.

let ageLimit = 18
let userAge = Number(prompt('Enter your age:'))
if( userAge >= ageLimit ){ alert('You are old enough to drive!')}
else if( userAge<ageLimit ){ alert(`You are left with ${ageLimit - userAge} years to drive!`)}

2.

let yourAge = Number(prompt('Enter your age:'))
let myAge= 25
if (yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me!` )
}
else( console.log(`I am ${myAge - yourAge} years older than you! `) )

3.
let a = 4
let b = Number(prompt('Enter the value of b:'))

a > b ? console.log(`${a} is greater than ${b}`) : a === b ? console.log(`${a} is equal ${b}` ) : console.log(`${b} is greater than ${a}`)


if(a > b ){console.log(`${a} is greater than ${b}`)}
else if(a == b){console.log(`${a} is equal ${b}`)}
else{console.log(`${b} is greater than ${a}`)}

4. 

let number = Number(prompt('Enter a number to learn whether it is an even or odd number'))

if( number % 2 == 0  ){
    console.log('It is an even number')
}
else if ( number % 2 !== 0){
    console.log('It is not a odd number')
}
else(console.log('It is not a number.'))










// EXERCISES LEVEL 2

// 1.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F




function calculateGrade(){

let point = Number(prompt ('Enter your point'))


if (point >= 80 ){
    console.log('Your grade is A')

}
else if(point >= 70 && point < 80  ){
    console.log('Your grade is B')
}
else if(point >= 60 && point < 70){
    console.log('Your grade is C')

}
else if (point >= 50 && point < 60){
    console.log('Your grade is D')

}
else if(point>= 0 && point < 49){
    console.log('Your grade is D')
}
else(console.log('Plase enter a valid number between 0 and 100'))
}
calculateGrade()

// OR

function calculateGrade() {
    let point = Number(prompt('Enter your point'))
  
    switch (true) {
      case point >= 80:
        console.log('Your grade is A')
        break
      case point >= 70 && point < 80:
        console.log('Your grade is B')
        break
      case point >= 60 && point < 70:
        console.log('Your grade is C')
        break
      case point >= 50 && point < 60:
        console.log('Your grade is D')
        break
      case point >= 0 && point < 50:
        console.log('Your grade is F')
        break
      default:
        console.log('Please enter a valid number between 0 and 100')
    }
  }
  
  // calculateGrade()


2. 


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

 function checkSeason (){


  let month = prompt('Please enter the month to learn the season')
switch(true){

case month == 'September'  || month=='October' || month=='November': 
console.log('The season is Autumn')
 
break

case month == 'December' ||month=='January' || month=='February':
  console.log('The season is Winter')
  break

case month == 'March' || month=='April' ||month== 'May':
  console.log ('The season is Spring')
  break

case month == 'June' || month=='July' || month=='August':
console.log('The season is Summer')
break

default:
  console.log('Please enter a valid month')
}



 }
checkSeason()



3.

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.


function dayS (){

let day = prompt('Please enter the day')

let lowerCaseday = day.toLowerCase()

if (lowerCaseday === 'saturday' || lowerCaseday=== 'sunday' ){
  console.log(`${day} is a weekend.`)
}
else if ( lowerCaseday === 'monday'|| lowerCaseday === 'tuesday' || lowerCaseday==='wednesday' ||  lowerCaseday=== 'thursday' || lowerCaseday==='friday'){

  console.log (`${day} is a working day.`)
}
else ( console.log('Please enter a valid day'))
}

dayS()


// EXERCISES LEVEL 3

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.

function numberOfDays () {

let month = prompt('Please enter the name of the month to find the number of days.')
let monthSlowerCase = month.toLowerCase()

if ( monthSlowerCase === 'january' || 
monthSlowerCase==='march' || 
monthSlowerCase=== 'may' || 
monthSlowerCase==='july'|| 
monthSlowerCase=== 'august' ||
 monthSlowerCase === 'october' || 
 monthSlowerCase=== 'december'){

  console.log(` The number of days in ${month} is 31.`)
}

else if ( monthSlowerCase === 'september' ||  
monthSlowerCase=== 'november' ||  
monthSlowerCase=== 'april' || 
monthSlowerCase=== 'june' ) {
  console.log(` The number of days in ${month} is 30.`)
}

else if( monthSlowerCase === 'february'){
  console.log(`The number of days in ${month} is 28.`)
}

else( console.log('Please enter a valid month name. '))



}

numberOfDays()