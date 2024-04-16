// Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods


// Level 1.1 

class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.placesTheAnimalLives = []
    }

    getAnimalInfo (){
        return `The name of this animal is ${this.name}. ${this.name} is ${this.age} years old. ${this.name} has ${this.legs} legs and the color of ${this.name} is ${this.color}. `
    }

  get getNameOfAnimal (){
    return this.name
  }
 get getColorOfAnimal (){
    return this.color
 }
 
set setPlaces(place){
    this.placesTheAnimalLives.push(place)
}

get getPlacesAnimalLives(){
    return this.placesTheAnimalLives
}

}

// Exercises Level 2
// Override the method you create in Animal class

class Cattle extends Animal{

    constructor(name, age, color, legs, breed, origin, sex){
        super(name, age, color, legs)
        this.breed = breed
        this.origin = origin
        this.sex = sex
    }

getAnimalInfo (){ 
    return `The name of this animal is ${this.name}. ${this.name} is an ${this.breed} and ${this.breed}s are originated in ${this.origin}. ${this.name} is ${this.sex} and ${this.name} is ${this.age} years old. ${this.name} has ${this.legs} legs and the color of ${this.name} is ${this.color}. `

}

}

const cattle1 = new Cattle( 'Bella', 2, 'black', 4, 'Iberian cattle', 'Spain', 'male')
console.log(cattle1.getAnimalInfo())

