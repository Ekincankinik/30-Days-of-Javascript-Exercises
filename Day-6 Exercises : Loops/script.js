
// Exercises Level 1

1.

// 1.1 for loop

for(let i = 0; i <= 10; i ++){

    console.log(i)
}


// 1.2 while loop


let i = 0
while ( i <= 10 ){
    console.log(i)
    i++

}

// 1.3 do while loop


let i = 0
do { 
    console.log(i)
i++} while( i <= 10)



2.

2.1
for( let i = 10; i >= 0; i-- ){
  console.log(i)
}


2.2

let j = 10
while(j >= 0){
console.log(j)
j--

}


2.3
let x = 10
do{ console.log(x)
x--} while(x >= 0)


3. 


let n =  Number(prompt('Enter a number'))

for (let i = 0; i <= n; i++ ){
  console.log(i)
}


4.

let symbol = " "

for ( let i = 0; i <= 7 ; i++){
symbol += '#' 
console.log(symbol) 
  
}

5. 


for (let i = 0; i <= 10; i++ ){

  console.log(`${i} * ${i} = ${i*i}`)
}



6.

for ( let i = 0; i <= 10; i ++){

  console.log( `${i} ${i*i} ${i*i*i} `)
}

// 7.even numbers

for ( let i = 0; i <= 100; i++){

  if (i %2 == 0){
    console.log(i)
  }
}


// 8. odd number


for (let i = 0; i <= 100; i++){
  if ( i % 2 !== 0){
    console.log(i)} }
  
  // 9. Prime numbers




  // 10.  sum off all numbers


  let sum = 0

  for (let i = 0; i <=100; i++ ){

    sum+= i
  }
  console.log(`The sum of all numbers from 0 to 100 is ${sum}`)



  // 11. sum of all even numbers 0 to 100

  let sum2 = 0


for( let i = 0; i <= 100; i++){
if( i % 2 == 0){
sum2+= i

}

}
console.log(`The sum of all even numbers from 0 to 100 is ${sum2}`)


12. 

let sum3 = 0
let sum4 = 0
const numbersArray = []

for (let i = 0; i <= 100; i++){
  if( i % 2 == 0){
    sum3 += i
  }
else{ sum4 += i}

}

numbersArray.push(sum3, sum4)


console.log(numbersArray)

// 13. random numbers


const randomNumbers = []

for( let i = 0; i <= 5; i++){

  const random = Math.floor(Math.random()*1000)
  randomNumbers.push(random)
}
console.log(randomNumbers)

14.

const numbersRandom = []

for (let i = 0; numbersRandom.length < 5; i++){

  const numberRandom = Math.floor(Math.random()*10)

  if ( !numbersRandom.includes(numberRandom)){

  numbersRandom.push(numberRandom)}
}
console.log(numbersRandom)

15. 


let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"

let randomId = ''

for (let i = 0; i < 6; i++ ){

  let randomIndex = Math.floor(Math.random()*characters.length)

  randomId += characters[randomIndex]
}
console.log(randomId)




// EXERCISES LEVEL 2

1.

// Develop a small script which generate any number of characters random id:

let charac = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"

let anyNumberId = ''

for ( let i = 0; i < Math.floor(Math.random ()*charac.length); i++){

let characRandomIndex = Math.floor(Math.random()*charac.length)
anyNumberId += charac[characRandomIndex]

}
console.log(anyNumberId)

2.  
 let hexChars = "0123456789ABCDEF";
let randomHex = "#";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * hexChars.length);
  randomHex += hexChars[randomIndex];
}
console.log(randomHex)

3.



// 4. Using the above countries array, create the following new array.

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


let countriesUpperCase = []

for (let i = 0; i < countries.length; i++){

countriesUpperCase.push(countries[i].toUpperCase())


}

console.log(countriesUpperCase)


// with higher order function ( map)


let countriesUpper = countries.map((element)=>{

return element.toUpperCase()

})
console.log(countriesUpper)


5. 



// with for loop 
let countriesLenght = []

for( let i = 0; i < countries.length; i++){

  countriesLenght.push(countries[i].length)

}
console.log(countriesLenght)




// with map()

let index = countries.map((element, index)=>{

  return index
  
  })
  
  console.log(index)






6.


let countriesSliced = [] 

for ( let i = 0; i < countries.length; i++){

  countriesSliced.push([countries[i], countries[i].toUpperCase(). slice(0,3), countries[i].length])
}
console.log(countriesSliced)





7. 

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let countriesWihtLand = []
let countriesWithoutLand = []

for (let i = 0; i < countries.length; i++){

if( countries[i].includes('land')){

  countriesWihtLand.push(countries[i])
}  else (countriesWithoutLand.push(countries[i]))


}
console.log(countriesWihtLand)
console.log(countriesWithoutLand)



// 8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.


const countriesWithIa = []
const countriesWithoutIa = [] 


for (let i = 0; i < countries.length; i++){

  if ( countries[i].endsWith('ia')){
    countriesWithIa.push(countries[i])
  } else( countriesWithoutIa.push(countries[i]) )

  
}

console.log(countriesWithIa)
console.log(countriesWithoutIa)


// 9. Using the above countries array, find the country containing the biggest number of characters.


let sortedCountries = countries.sort((a,b)=>{

return b.length - a.length
})

let countryWithMaxChac = sortedCountries[0]

console.log(countryWithMaxChac)


// 10. Using the above countries array, find the country containing only 5 characters.

let countriesWithFive = []

for ( let i = 0; i < countries.length; i++){

if( countries[i].length === 5){

  countriesWithFive.push(countries[i])
}

}

console.log(countriesWithFive)


// 11. Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let sortedWebTechs = webTechs.sort((a,b)=>{

  return b.length - a.length
})

let longestWeb = sortedWebTechs[0]

console.log(longestWeb)

12. 

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]


let webTechsWithLenght = []

for (let i = 0; i < webTechs.length; i++){

webTechsWithLenght.push([webTechs[i], webTechs[i].length   ])

}
console.log(webTechsWithLenght)


13. 
let mernArray = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = [];

for (const tech of mernArray) {
   mernStack.push(tech[0]);
};
 console.log(mernStack.join(''));



14. 

for(const tech of webTechs) {
  console.log(tech)}

15. 

let fruits = [ 'banana', 'orange', 'mango', 'lemon']

let reversedFruits = []

for (let i = fruits.length-1; i >= 0; i-- ){


  reversedFruits.push(fruits[i])
}

console.log(reversedFruits)

16. 
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

// or


for (let arrays of fullStack){

  for (let elements of arrays){
    console.log(elements)
  }

}



// EXERCISES LEVEL 3




// 1.  Copy countries array(Avoid mutation)

const countriess = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


// a. with for loop

let countriesSame = []

for (let i = 0; i < countries.length; i++){

countriesSame.push(countriess[i])


}
console.log(countriesSame)

// or

// b. with for of...

let countriesSame1 = []

for( let country of countriess){

  countriesSame1.push(country)
}

console.log(countriesSame1)

// or 
// c. with map()

let countriesSame2 = countriess.map( (element)=>{

  return element
})
console.log(countriesSame2)

// or 
// d. with forEach 
let countriesSame3 = []

countriess.forEach((element)=>{
countriesSame3.push(element)


})

console.log(countriesSame3)


// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries.

let copiedCountriess = []

for ( let each of countriess ){

  copiedCountriess.push(each)
}

let sortedCopiedArray = copiedCountriess.sort()
console.log(sortedCopiedArray)

// 3. Sort the webTechs array and mernStack array

let sortedWebTechs1 = webTechs.sort()
console.log(sortedWebTechs1)

let sortedMernStack = mernStack.sort()
console.log(sortedMernStack)

4. // Extract all the countries contain the word 'land' from the countries array and print it as array

const countriez =  [ 'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]


let countriezWithLand = []

for ( let element of countriez){

  if ( element.includes( 'land')){
countriezWithLand.push(element)

  }
}
console.log(countriezWithLand)

5. // Find the country containing the hightest number of characters in the countries array

let countriezSortedbyLenght = countriez.sort((a,b)=>{

  return b.length - a.length

})

let countryHighestLenght = countriezSortedbyLenght[0]
console.log(countryHighestLenght)

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array

// let countriezWithLand = []

// for ( let element of countriez){

//   if ( element.includes( 'land')){
// countriezWithLand.push(element)

//   }
// }
// console.log(countriezWithLand)

// 

7. // Extract all the countries containing only four characters from the countries array and print it as array

let countriezWithFour = []

for (let i = 0; i < countriez.length; i++) {
  if (countriez[i].length == 4) {
    countriezWithFour.push(countriez[i])
  }
}

console.log(countriezWithFour)


// 8. Extract all the countries containing two or more words from the countries array and print it as arr

let countriesWithTwoOrMoreWords = []

for (let i = 0; i < countriez.length; i++) {
  if (countriez[i].includes(' ')) {
    countriesWithTwoOrMoreWords.push(countriez[i])
  }
}

console.log(countriesWithTwoOrMoreWords)


9. // Reverse the countries array and capitalize each country and stored it as an array

const countrie =  [ 'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya'
]


let reversedCountrie = []

for (let i = countrie.length-1; i >= 0; i--){

  reversedCountrie.push(countrie[i].toUpperCase())
}
console.log(reversedCountrie)