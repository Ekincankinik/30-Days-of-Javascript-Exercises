// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.


let url = 'https://restcountries.com/v3.1/all';

fetch (url)
.then (response => response.json())
.then(data =>{
    data.forEach( country =>{
        const name = country.name.common
        const capital = country.capital
        const languages = country.languages
        const population  = country.population
        const area = country.area
        
        console.log(name)
        console.log(capital)
        console.log(languages)
        console.log(population)
        console.log(area)
    })
})

.catch(error=>console.log(error))


// Exercises: Level 2
// Print out all the cat names in to catNames variable

const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
.then(response => response.json())
.then(data =>{
    data.forEach(cat=>{
        const catNames = cat.name
        console.log(catNames)
    })
})

// Exercises: Level 3

// 3.1. Read the cats api and find the average weight of cat in metric unit.



fetch(catsAPI)

.then(response => response.json())
.then(data=>{


   let catWeight = []
   data.forEach((element)=>{
    catWeight.push(element.weight.metric)
   })
   let separatedNums = catWeight.map(num => num.split(' - '))
   let totalAverage = 0
   
   separatedNums.forEach(element => {
     let average = (parseInt(element[0]) + parseInt(element[1])) / 2
     totalAverage += average;
   })
   
   let overallAverage = totalAverage / separatedNums.length
   
   console.log('Avarage is:', overallAverage)


})
.catch(error=>{
    console.log(error)
})




// 3.2. Read the countries api and find out the 10 largest countries

const countriesAPI = 'https://restcountries.com/v3/all'


fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    let top10Countries = data
      .map(country => ({ country: country.name.common, population: country.population }))
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);

    console.log('The 10 largest countries:', top10Countries);
  })





