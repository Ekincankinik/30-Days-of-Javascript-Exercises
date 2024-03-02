// Exercises Level 1 
 
//     1.  Create an empty object called dog
let dog = {}

    // 2.  Print the the dog object on the console

console.log(dog)


//     3.   Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Calo'
dog.leg = 4
dog.color = 'black'
dog.age = 5
dog.bark = function ( ){
    return 'woof woof'
}
//      4.     Get name, legs, color, age and bark value from the dog object

console.log(dog.name)
console.log(dog.leg)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())


// 5.   Set new properties the dog object: breed, getDogInfo

dog.breed = 'kangal'
dog.getInfo = function(){
return ` Name : ${this.name} leg: ${this.leg} color : ${this.color} age : ${this.age} bark: ${this.bark()}`



}


console.log(dog.getInfo())

let animal = { type : 'bird', 
age : 2,
 color : 'blue',
getFull: function(){
    return `${this.type} ${this.age} ${this.color}`
}}

console.log(animal.getFull())


animal.name  = 'duffy'



// Exercises Level 2



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


  // 1.  Find the person who has many skills in the users object.


let maxSkillsUSer = ''
let maxSkills = 0
for(let user of Object.keys(users)){
  let skills = users[user].skills

  if(skills.length > maxSkills){
    maxSkills = skills.length
    maxSkillsUSer = user
  }
}
console.log(maxSkillsUSer)

// 2.   Count logged in users, count users having greater than equal to 50 points from the following object.

let loggedNumbers = 0
let gretaerThan = 0
for (let user of Object.keys (users)){
  let usersNumber = users[user].isLoggedIn
let usersPoints = users[user].points
  if(usersNumber === true){
    loggedNumbers ++
  }
  if (usersPoints >= 50 ){
    gretaerThan ++
  }

}
console.log(loggedNumbers)
console.log(gretaerThan)
// 3. Find people who are MERN stack developer from the users object.


for (let user of Object.keys(users)){

  let skillsOfUser = users[user].skills
  if(
    skillsOfUser.includes( 'MongoDB') && skillsOfUser.includes('Express') && skillsOfUser.includes('React') && skillsOfUser.includes('Node'))
  console.log(user)
}


// 4. Set your name in the users object without modifying the original users object.

let userCopy = Object.assign({}, users)
userCopy.Ekin = {}
console.log(userCopy)


  // 5. Get all keys or properties of users object

 
  let allProperties = Object.entries(users)
  console.log(allProperties)

  let allKeys = Object.keys(users)
  console.log(allKeys)

  // 6. Get all the values of users object

  let allValues = Object.values(users)
  console.log(allValues)
  
  // 7. Use the countries object to print a country name, capital, populations and languages.
  

console.log(`Country : ${countries[0].name} Capital: ${countries[0].capital}  Population : ${countries[0].population} Languages : ${countries[0].languages}` )

// Exercises: Level 3




// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


let personAccount = {
  firstName: 'Adam',
  lastName: 'Smith',
  balance: 0,
  incomes: {
    salary: 2000,
    capitalGains: 4000,
    rentalIncome: 2000
  },
  expenses: {
    rent: 400,
    bankCharges: 800,
    bill: 500
  },
  totalIncome: function() {
    let total = 0
    for (let income in this.incomes){
      total += this.incomes[income]
    }
 return total
  },
  totalExpense: function(){
    let total = 0
    for(let expense in this.expenses){
      total += this.expenses[expense]
    }
    return total
  },
  accountInfo: function(){
    return`Name:${this.firstName} ${this.lastName} Total expense : ${this.totalExpense()}  Total income : ${this.totalIncome()} `
  }

}
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())





// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()



    const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];


    function signUp(object) {
      let newUser = prompt('Please enter your username')
      let userExists = false
    
      for (let obj of Object.keys(object)) {
        let userNames = object[obj].username
        if (userNames.includes(newUser)) {
          userExists = true
          break
        }
      }
    
      if (userExists) {
        return 'You already have an account'
      } else {


        const newId = function (){

            let id = ''
            
            let sources = 'abcdefghuvyzx0123456789'
            let lengthOfsource = sources.length
            for (let i = 0; i < 6; i++){
            
                let randomIndex = Math.floor(Math.random()*lengthOfsource)
                let char = sources[randomIndex].toString()
                id+=char
            } 
            return id
        }

      
        const newCreatedAt = function(){
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const day = now.getDate()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const date = `${day}/${month}/${year} ${hours}:${minutes}`
        return date
        }
        const email = prompt('Please enter your email')
        const password = function(){
          let count = 0
      
          while(count < 3){
              let password = prompt('Please enter your password which includes 6 digits.')
           if(password.length === 6){
              return password
            
          }else if(password.length!==6){
              count++
          }
          if(count===3){
              return `You tried 3 times. Try later.`
          }
      
      }}
      

        const newLoggedIn = false
    
        const newUserObj = {
          _id: newId(),
          username: newUser,
          email: email,
          password: password (),
          createdAt: newCreatedAt(),
          isLoggedIn: newLoggedIn
        }
    
        object.push(newUserObj);
        return userss
     
      } 
        
    }
    
 
  // console.log(signUp(userss))


/** Exit the program when password is entered three times */



  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

  // The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

  // Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  


  function rateProduct(obj){

  }

function averageRating(obj){

}

function likeProduct(obj){
  
}





