// LEVEL 1

// 1. 
const arr=[]
// 2. 
const numbers=[1,2,3,4,5,6,7]
// 3.
console.log(numbers.length)
// 4.
console.log(numbers[0])



let firstNumber=numbers[0]
console.log(firstNumber)


console.log(numbers.length)
let middleItem=numbers[3]
console.log(middleItem)


let lastIndex=numbers.length - 1
console.log( numbers[lastIndex])

// 5.
 
let mixedDataTypes= ['e',2, true, 'Adam', 8, 'Cuba']
console.log(mixedDataTypes.length)

6.

let itCompanies=[ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

7. 
console.log(itCompanies)

8.
console.log(itCompanies.length)
9.

let firstCompany = itCompanies[0]
console.log(firstCompany)

console.log(itCompanies[0])

// console.log(itCompanies.length-1)
console.log(itCompanies[6])

10.
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

11.
console.log(itCompanies[0].toUpperCase())

console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toLocaleUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

12.
console.log(`${itCompanies} are big IT companies. `)
13.
console.log(itCompanies.includes('Amazon'))
console.log(itCompanies.includes('Meta'))


// 15. Sort

let companies = ['BMW','DE','Amazon', 'Car', 'FF']
companies.sort()
console.log(companies)

itCompanies.sort()
console.log(itCompanies)


// 16. Reverse
companies.reverse()
console.log(companies)

itCompanies.reverse()
console.log(itCompanies)

itCompanies.reverse()
console.log(itCompanies)

// 17.Slice


console.log(itCompanies.slice(4,7))
console.log(itCompanies.slice(0,4))
console.log(itCompanies.slice(3,4))

// 18. Remove

itCompanies.splice(0,1)
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

itCompanies.splice(0,7)
console.log(itCompanies)




// LEVEL 2


1. 

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


let textWhitoutPunc = text.replace(/[^\w\s]|_/g, '')

console.log(textWhitoutPunc)

let words = textWhitoutPunc.split(' ')

console.log(words)

console.log(words.length)

2. 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

const withoutHoney = shoppingCart.splice(4,1)

console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
console.log(shoppingCart);

// or

let indexofMilk = shoppingCart.indexOf('Milk')
if (indexofMilk !== -1){
    shoppingCart[indexofMilk] = 'Juice'
    console.log(shoppingCart)
}


3.

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

console.log(countries)


if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}

// or//

let indexOfEt = countries.indexOf('Ethiopia')
if ( indexOfEt !== -1){

    console.log('ETHIOPIA')
}

// 4. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let indexOfSaas = webTechs.indexOf('SASS')
if ( indexOfSaas !== -1){
    console.log('Saas is a CSS preprocess')
}
else if (indexOfSaas == -1){
    webTechs.push('Saas')
    console.log(webTechs)
}


// Exercise: Level 3
// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


3.1//Sort the array and find the min and max age

// MAX AGE

let maxAge = ages.sort(function(a,b)
{ return b-a})
maxAge = maxAge[0]
console.log(maxAge)

// MIN AGE


let minAge = ages.sort(function(a,b)
{return a-b})
minAge = minAge[0]
console.log(minAge)

// 3.2 Find the median age(one middle item or two middle items divided by two)


function medianAge(){

    let sortedAge = ages.sort(function (a,b){
        return a - b
    })
    let middleIndex = Math.floor( (sortedAge.length-1) / 2 )
    console.log(sortedAge[middleIndex])
}
medianAge()


// 3.3 Find the average age(all items divided by number of items)


function averageAge ( ){
    let sum = 0

    for (let i = 0; i < ages.length; i++){
    
        sum += ages[i]

} 

let elementsInarray = ages.length

return sum / elementsInarray




}

console.log(averageAge())

// 3.4 Find the range of the ages(max minus min)

function rangeAges (){

    let minAge = ages.sort( (a,b) => {
        return a-b}
    )[0]

let maxAge = ages.sort( (a,b) => {
    return b-a})[0]

    let range = maxAge - minAge
    console.log(range)

}

rangeAges()



// 3.2.1.Slice the first ten countries from the countries array

let slicedCountries = countries.slice(0,10)
console.log(slicedCountries)

// 3.2.2. Find the middle country(ies) in the countries array

function middleCountry(){


let middle = (countries.length - 1) / 2

let middleCoun = countries[middle]
console.log(middleCoun)
}

middleCountry()




// 3.2.3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half

  
  function divideCountries() {
    let length = countries.length;
    let middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
     
      let firstHalf = countries.slice(0, middle);
      let secondHalf = countries.slice(middle);
      console.log(firstHalf);
      console.log(secondHalf);
    } else {
    
      let firstHalf = countries.slice(0, middle + 1);
      let secondHalf = countries.slice(middle + 1);
      console.log(firstHalf);
      console.log(secondHalf);
    }
  }
  
  divideCountries();


