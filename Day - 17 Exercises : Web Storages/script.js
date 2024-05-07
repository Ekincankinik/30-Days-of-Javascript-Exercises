// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('firstName', 'Adam', )
localStorage.setItem('lastName', 'Smith')
localStorage.setItem('age', 300)
localStorage.setItem('country', 'Scotland')
localStorage.setItem('city', 'Edinburg')


// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.


let student = {firstName : 'Ali', lastName : 'Ladik', age: 14, skills : ['music', 'theatre', 'sport'], country : 'Turkey', enrolled : true}

let studentJson = JSON.stringify(student)
localStorage.setItem('student1', studentJson)


// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

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

  console.log(personAccount)


const accountJson = JSON.stringify(personAccount)
console.log(accountJson)

