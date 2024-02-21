// EXERCISES LEVEL 1


// 1.   Declare a function fullName and it print out your full name.

function fullName(){

return 'Asabeneh'

}

console.log( fullName())


// 2.   Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.


function fulLName (firstName, lastName){

return `${firstName} ${lastName}`}

console.log(fulLName('Asabeneh', 'Last'))


// 3.   Declare a function addNumbers and it takes two two parameters and it returns sum.


function addNumbers (a,b){
return a +b
}
console.log(addNumbers(2,4))

// 4.   An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfCircle(length,width){
    return length  * width
}

console.log(areaOfCircle(20,40))



// 5.   A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    return 2 * (length + width)
}

console.log(perimeterOfRectangle(20,50))

// 6.   A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height){
    let volume = length * width * height
return volume

}
console.log(volumeOfRectPrism(10,12,7))

// 7.   Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){

let area = Math.PI * r * r
return area
}
console.log(areaOfCircle(15))


// 8.   Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius){

    let circumference = 2 * Math.PI * radius
    return circumference
}

console.log(circumOfCircle(5))



// 9.   Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume){
  let density = mass/volume
  return density
}

console.log( density(20,10 ))

// 10.  Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speedF = (distance, time)=>{
let speed = distance/time
return speed
}
console.log(speedF(60,20))




// 11.  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightF = function(mass,gravity){

let weight = mass * gravity
return weight
}

console.log(weightF(10,100))


//  12.  Temperature in oC can be converted to oF using this formula: oF = . Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC){
let oF = (oC * 9/5) + 32
return oF
}

console.log(convertCelsiusToFahrenheit(10))

//  13.    Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function calculateBMI(weight, height) {

  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);

  if ( bmi < 18.5){
    weightOfperson = 'Underweight' 
  }else if( bmi >= 18.5 && bmi <= 24.9){
    weightOfperson = 'Normal weight'
  }else if( bmi >= 25 && bmi <= 29.9){
    weightOfperson = ' Overweight'
  }else{
    weightOfperson = 'Obese'
  }
return weightOfperson
}


console.log(calculateBMI(72,172))

// 14.  Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {

    const lowercaseMonth = month.toLowerCase();

    if (lowercaseMonth === 'december' || lowercaseMonth === 'january' || lowercaseMonth === 'february') {
      return 'Winter'
    } else if (lowercaseMonth === 'march' || lowercaseMonth === 'april' || lowercaseMonth === 'may') {
      return 'Spring'
    } else if (lowercaseMonth === 'june' || lowercaseMonth === 'july' || lowercaseMonth === 'august') {
      return 'Summer'
    } else if (lowercaseMonth === 'september' || lowercaseMonth === 'october' || lowercaseMonth === 'november') {
      return 'Autumn'
    } else {
      return 'Invalid month'
    }
  }

  console.log(checkSeason('March'))


//   15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.


let findMax = ( a, b, c )=>{

  let maxNumber = ''
if( a > b && a >c ){
   maxNumber = a
}else if( b > a && b > c){
  maxNumber = b
} else if( c > a && c && b ){
  maxNumber = c
} else if(a===b && b === c){
  maxNumber=a
}
return maxNumber
}

console.log(findMax(19,5,5))


// EXERCISES LEVEL 2


// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation


function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) {
    return "Invalid equation."
  } else if (a === 0) {
    return "x = " + (-c / b)
  } else if (b === 0) {
    return "y = " + (-c / a)
  } else {
    return "x = " + (-c / a) + ", y = " + (-c / b)
  }
}


// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.


function printArray(...args){
  for (let arg of args){
    console.log(arg)
  }

}

let nums= [1,2,3,4,5,6,29]
printArray(nums)

// or 

function printArrayS(...args){

  for ( let i = 0; i < args.length; i++){

console.log (args[i])
  }
}

printArrayS(nums)


// or


let printNumbers = function (...args){
  args.forEach((number)=>{
   console.log( number)
  })

}

printNumbers(nums)


// or


let printArrayMap = (...args)=>{

args.map((element)=>{

  console.log(element)
  })
  return args
}

printArrayMap(nums)



// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.


function showDateTime(){
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const dayOfMonth = date.getDate()
const hour = date.getHours()
const minutes = date.getMinutes()
return `${dayOfMonth}/${month}/${year} ${hour}:${minutes}`

}

console.log(showDateTime())

//5. Declare a function name swapValues. This function swaps value of x to y.


function swapValues(x,y){

  let a = y
  let b = x

 console.log( a, b)

}

swapValues(4,10)

// 
// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).


function reverseArray(array){

for ( let i = array.length - 1; i >= 0; i-- ){

console.log(array[i])
}
}

reverseArray([1,2,3,4,5])


// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){

let capitalizedArray = []

for (let i = 0; i < arr.length; i++){


let firstLetter = arr[i].charAt(0).toUpperCase()
let remaining = arr[i].slice(1)


capitalizedArray.push(firstLetter + remaining)
}
return capitalizedArray

}

let names = ['Karl', 'Friedrich']

console.log(capitalizeArray(names))



// 8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item){

let array = []

array.push(item)

return array

}

console.log(addItem(6))

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


function removeItem ( index ){
  
  let arr = ['Ali', 'Veli', 'Cafer']

  arr.splice(index)
  return arr
}

console.log(removeItem(2))



  // 10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.


  function sumOfNumbers(...args){

    let sum = 0

    for ( let i = 0; i < args.length; i++)

    sum+=args[i]
    return sum

  }

  console.log( sumOfNumbers(1,2,3,6))


  // 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.


  function sumofOdds(...numbers){
    let sum = 0
for (let i = 0; i < numbers.length; i++){

  if ( numbers[i]%2 !== 0){
    sum+= numbers[i]
  }
}
return sum

  }

console.log(sumofOdds(2,4,5,6,7))


  // 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

  let sumOfEven = (...nums)=>{

let sum = 0
for (let i = 0; i < nums.length; i++){
  if ( nums[i]%2 == 0){
    sum+= nums[i]
  }
}
return sum

  }

  console.log(sumOfEven(2,5,1,4))



  // 14. Write a function which takes any number of arguments and return the sum of the arguments.


  function x (...args){

    let sum = 0
    for ( let arg of args ){

      sum+=arg
    }

    return sum
  }

  console.log(x(1,2,3,4))

  // 15. Write a function which generates a randomUserIp.

  function ipGenerator (){

    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    let d = Math.floor(Math.random() * 255)

let IP = `${a}.${b}.${c}.${d}`
return `IP : ${IP}`

  }

  console.log(ipGenerator())


  // 16. Write a function which generates a randomMacAddress

  function randomMacAddress() {
    const characters = '0123456789ABCDEF'
    let macAddress = ''
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 2; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        const randomChar = characters.charAt(randomIndex)
        macAddress += randomChar;
      }
  
      if (i < 5) {
        macAddress += ':'
      }
    }
  
    return macAddress
  }
  
  console.log(randomMacAddress())



  // Exercises Level 3 


//  10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// function isEmpty(param){


// }

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum (...args){

  let total = 0
  for(let i = 0; i < args.length; i++){
    
    total += args[i]
  }
  return total 
}

console.log(sum(1,2,3,4,10))


// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.


function sumOfArrayItems(arr){

  let total = 0 

  for(let i = 0; i < arr.length; i++){

    if (typeof(arr[i]) === 'number'){
     total += arr[i]
 
    } else {
      return `Please enter an array consisting of numbers. `
    }


    }
    return total 
  }


  let numbers = [4,2,3,4,5,8,9,'5']

  console.log( sumOfArrayItems(numbers))


// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr){

  let sum= 0
  for (let i = 0; i < arr.length; i++){
    sum+= arr[i]


  }

  let averageOfNums = sum / arr.length
  return averageOfNums
}

let numss = [1,2,3,4,5,10]

console.log(average(numss))

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.



let words = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']

function modifyArray(arr){

if( arr.length < 5){
  return 'item not found'
}
else{
  let newArr = arr.slice()
  newArr[4] = newArr[4].toUpperCase()
  return newArr
}

}

console.log(modifyArray(words))


// 16. Write a functions which checks if all items are unique in the array.


function isUnieque(arr){

for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j<arr.length;j++){
    if(arr[i]===arr[j]){
      return `All the items are not unique`
    }
  }
}
return `All the items unique`

}

let numberss =[1,2,3,4,5,6]
console.log(isUnieque(numberss)) 

// 17. Write a function which checks if all the items of the array are the same data type.

function checkDataTypes(arr) {
  let dataType = typeof arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== dataType) {
      return 'Data types are not the same.'
    }
  }
  return 'Data types are the same.'
}

let datas = ['Adam', 'Ali', 3]
let datas1 = [1,2,3]

console.log(checkDataTypes(datas))
console.log(checkDataTypes(datas1))

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variableName) {
  const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
  return regex.test(variableName) ? 'The variable name is valid.' : 'The varible name is not valid.'
}

let variable = 'selim='
console.log(isValidVariable(variable)); // Değişken adı geçerlidir.


// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function sevenNums (){
let randomNumbers = []

while(randomNumbers.length<7) {
let randomNums = (Math.floor(Math.random()*10))
if (!randomNumbers.includes(randomNums)){
randomNumbers.push(randomNums)

}

}
return randomNumbers
}
console.log(sevenNums())


// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.


function reverseCountries(arr){
let reversedCountries = arr.slice().reverse()

return reversedCountries
}




