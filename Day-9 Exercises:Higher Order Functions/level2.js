// Exercises: Level 2


//  1.     Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


let filteredPrices = products.filter((product)=>{
    return typeof product.price === 'number'
})
console.log(filteredPrices)

let mappedPrices = filteredPrices.map((p)=>{

return p.price

})

let sumOfPrices = mappedPrices.reduce((acc,current)=>{
    return acc+current
}, 0)

console.log(sumOfPrices)


//  2.   Find the sum of price of products using only reduce reduce(callback)

  
  let productsReduce = products.reduce((acc, current) => {
    if (typeof current.price === 'number') {
      return acc + current.price;
    } else {
      return acc
    }
  }, 0);
  
  console.log(productsReduce)


//  3.     Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).


function categorizeCountries(arr){


     let cnt = arr.filter((country)=>{
        return country.toUpperCase().includes('LAND')
    })
    return cnt
}

console.log(categorizeCountries(countries))




//  4.   Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function startingLetterCount(arr){

let letterCounts = {}

for(let country of countries){

let firstletter = country.charAt(0).toUpperCase()
if(letterCounts[firstletter]){
  letterCounts[firstletter] ++
}else {
  letterCounts[firstletter] = 1
}

}
 
let result = []

for (let letter in letterCounts){

  result.push({ letter: letter, count: letterCounts[letter] })
}
return result

}
console.log(startingLetterCount(countries))

//  5.   Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

let getFirstTenCountriesWithFor = (array)=>{

  let firstTen = []
  for ( let i = 0; i < 10; i++ ){
    firstTen.push(array[i])


  }
  return firstTen
}

console.log(getFirstTenCountriesWithFor(countries))



let getFirstTenCountriesWithForEach = (arr)=>{

  let firstTen = []
  arr.forEach((element,index)=>{
 if (index < 10)
{firstTen.push(element)}
   
  } )
  return firstTen
}

console.log(getFirstTenCountriesWithFor(countries))


let getFirstTenCountriesWithMap = (arr)=>{
let mappedCountries= arr.map((element,index)=>{

   if(index < 10){
    return element
   }

})

return mappedCountries


}

console.log(getFirstTenCountriesWithMap(countries))


function getFirstWithSlice(arr){

let slicedArr= arr.slice(0,10)
return slicedArr

}

console.log(getFirstWithSlice(countries))


let getFirstTenCountriesWithFilter = (arr)=>{
let filteredArr = arr.filter((element, index)=>{

  return index < 10
})
return filteredArr
}

console.log(getFirstTenCountriesWithFilter(countries))


//  6.   Declare a getLastTenCountries function which which returns the last ten countries in the countries array.


let getLastTenCountries = (arr)=>{
  let arrayOfTen = []

  arr.forEach((element,index)=>{
    if(index >  arr.length -11){
      arrayOfTen.push(element)
    }

  })
  return arrayOfTen
}

console.log(getLastTenCountries(countries))


let getLastTenCountriesWithSlice = ( arr)=>{

  let slicedArr = arr.slice(-10)

  return slicedArr
}

console.log(getLastTenCountriesWithSlice(countries))



// 7.   Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


function repeatLetters(arr){
  let repeatedArr = []
for(let i = 0; i < arr.length; i++){
  for (let j = i+1; j < arr.length; j++ ){
    if (arr[i].charAt(0)=== arr[j].charAt(0) && !repeatedArr.includes(arr[i].charAt(0))){
      repeatedArr.push(arr[i].charAt(0))
    }
  }
}
return repeatedArr

}

console.log(repeatLetters(countries))
