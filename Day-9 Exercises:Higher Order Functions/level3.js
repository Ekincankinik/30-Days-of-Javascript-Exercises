
// Exercises Level 3
// 1.Use the countries information, in the data folder. Sort countries by name, by capital, by population.


1.1

let sortedByName = countries.sort((a,b) => a.name.localeCompare(b.name))
sortedByName.forEach(country=>console.log(country))

console.log(sortedByName)


// 1.2 

let sortedByCapital = countries
  .filter(country => country.capital !== undefined) 
  .sort((a, b) => a.capital.localeCompare(b.capital))

sortedByCapital.forEach(country => console.log(country))

1.3

let sortedByPopulation = countries.sort((a,b)=>{
    return b.population - a.population
})

console.log(sortedByPopulation)


2. 


// *** Find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},


// 3. Use countries_data.js file create a function which create the ten most populated countries


function mostPopulatedCountries(arr,number){
let sortedByPopulation = arr.sort((a, b) => b.population - a.population)

let countriesAndPop = sortedByPopulation.slice(0,number).map(element => {
    return {country : element.name, population : element.population }
})
return countriesAndPop

}

console.log(mostPopulatedCountries(countries,6))



