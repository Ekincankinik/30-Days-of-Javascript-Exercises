const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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



// 3.   Use forEach to console.log each country in the countries array.

countries.forEach(country => {

    console.log(country)
})

// 4.   Use forEach to console.log each name in the names array.

names.forEach(n =>{
    console.log(n)
})

// We can create another array

let namesOfCountries = []
countries.forEach( country =>{

    namesOfCountries.push(country)
})
console.log(namesOfCountries)


// or


function nameOf (arr){

    let nameOfX =[]

arr.forEach(element =>{
    nameOfX.push(element)

})
return nameOfX
}


console.log (nameOf(countries))


// 5.   Use forEach to console.log each number in the numbers array.

numbers.forEach(n=>{
    console.log(n)
})

// 6.   Use map to create a new array by changing each country to uppercase in the countries array.

let upperCaseCount = countries.map((count) => count.toUpperCase()
)

console.log(upperCaseCount)

// 7.   Use map to create an array of countries length from countries array.

let lengthOfCount = countries.map((country)=>{

    return country.length
})

console.log(lengthOfCount)


// 8.   Use map to create a new array by changing each number to square in the numbers array.

let squareOfNum = numbers.map(num=> num * num)

console.log(squareOfNum)

// 9.   Use map to change to each name to uppercase in the names array.


let upperCaseNm = names.map(fname => fname.toUpperCase())

console.log(upperCaseNm)

// 10.  Use map to map the products array to its corresponding prices.

let pricesOfPro = products.map(product=> product.price)
console.log(pricesOfPro)

// 11.  Use filter to filter out countries containing land.

let countLand = countries.filter( country => country.toUpperCase().includes('LAND'))

console.log(countLand)


// 12.  Use filter to filter out countries having six character.

let countWithSix = countries.filter( country=> country.length === 6)

console.log(countWithSix)


// 13.  Use filter to filter out countries containing six letters and more in the country array.

let sixAndMore =  countries.filter( x =>  x.length >= 6 )
console.log(sixAndMore)

// 14.  Use filter to filter out country start with 'E';

let startE = countries.filter( c => c.startsWith('E') )

console.log(startE)

// or using charAt

let startCwihtE = countries.filter(country => country.charAt(0)== 'E')
console.log(startCwihtE)
 
// 15.  Use filter to filter out only prices with values.

let priceValue = products.filter(product => typeof product.price === 'number')

console.log(priceValue)


// 16.  Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.



function getStringLists(arr){

   let filteredArr = arr.filter(element =>  typeof element === 'string')
    return filteredArr
}



// 17.  Use reduce to sum all the numbers in the numbers array.

let sumOfNum = numbers.reduce((acc, current)=>{
    return acc + current
}, 0)

console.log(sumOfNum)

// 18.  Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries



const sentence = countries.reduce((acc, current, index) => {
  if (index === countries.length - 1) {
    return acc + ' and ' + current
  } else {
    return acc + current +  ', '
  }
}, 'Estonia' );

const finalSentence = `${sentence} are north European countries.`
console.log(finalSentence)


// 19.  Explain the difference between some and every


// 20.  Use some to check if some names' length greater than seven in names array

let checkLen = names.some((fn)=> {

    return fn.length > 7
})

console.log(checkLen)

// 21.  Use every to check if all the countries contain the word land

let containLand = countries.every( ( country)=>{

    return !country.includes('land')
})

console.log(containLand)


// 22.  Explain the difference between find and findIndex.


let findFirstElement = countries.find((element)=>{
    return element.includes('land')
})


console.log(findFirstElement)

let findFirstElementIndex = countries.findIndex((element)=>{
    return element.includes('land')
})

console.log(findFirstElementIndex)


// 23.  Use find to find the first country containing only six letters in the countries array.


let FsixLetters= countries.find((element)=>{
    return element.length === 6
})

console.log(FsixLetters)

// 24.  Use findIndex to find the position of the first country containing only six letters in the countries array

let indexOfSix = countries.findIndex((c)=>{
    return c.length === 6 
})
console.log(indexOfSix)

// 25.  Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.



let norwayIndex = countries.findIndex(country => country === "Norway")

if (norwayIndex === -1) {
  console.log("Norway does not exist in the array.")
} else {
  console.log(`Norway is at index ${norwayIndex}.`)
}

// 26.  Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.



const russiaIndex = countries.findIndex(country => country === "Russia")

if (russiaIndex === -1) {
  console.log("Russia does not exist in the array.")
} else {
  console.log(`Russia is at index ${russiaIndex}.`)
}







