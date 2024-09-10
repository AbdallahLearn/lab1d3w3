
console.log("-------------Lab 1\n")

const user ={
    fullname : "Abdullah Aljohani",
    age : "23",
    id: 12,
    email: "Abdallahjhn@gmail.com",
    brithday: "2001/02/10",
    available: false,
    isAvailable: function(){
        return this.available
    },
    trainee: "Tuwaiq",
    address: {
       city:{
        city1:"medina",
        city2: "tabuk"
       }
    },
    skills: ["java", "javascript", "powerpoint"]

    

}

console.log("output 1--------------------\n")


console.log(user)
console.log("\n")

console.log("output 2--------------------\n")
console.log("\n")


console.log(user.fullname)
console.log("\n")


console.log("output 3--------------------\n")


user.id = 13
console.log(user.id)

console.log("\n")


console.log("output 4--------------------\n")

delete user.email
console.log(user)

console.log("\n")


console.log("output 5--------------------\n")

user.available = true
console.log(user.isAvailable())

console.log("\n")


console.log("output 6--------------------\n")

console.log(user.address)


console.log("\n")


console.log("output 7--------------------\n")


console.log(user.address.city.city1)


console.log("\n")


console.log("output 8--------------------\n")



console.log(user.skills[2])

console.log("\n")


console.log("output 9--------------------\n")



console.log(user.skills.join(","))



console.log("-------------Lab 2\n")


characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


  console.log("\n")


console.log("output 1--------------------\n")

let blueEyes = characters.find(e => e.eye_color === "blue");
console.log(blueEyes.name)


console.log("\n")


console.log("output 2--------------------\n")


let massOver50 = characters.find(mass=> mass.mass>50)
console.log(massOver50)

console.log("\n")


console.log("output 3--------------------\n")

let height = characters.filter(e=> e.height <200)
console.log(height)

console.log("\n")


console.log("output 4--------------------\n")
let males = characters.filter(m=> m.gender === "male")
console.log(males)


console.log("\n")


console.log("output 5--------------------\n")


let names = characters.map(n=> n.name)
console.log(names)

console.log("\n")


console.log("output 6--------------------\n")

let heights = characters.map(n=> n.height)
console.log(heights)


console.log("\n")
console.log("output 7--------------------\n")

let sortMass = characters.sort((a,b) => a.mass - b.mass)

console.log(sortMass)


console.log("\n")
console.log("output 8--------------------\n")


let sortMassHigh = characters.sort((a,b) => b.mass - a.mass)

console.log(sortMassHigh)

console.log("\n")
console.log("output 9--------------------\n")


let massMore = characters.every(e => e.mass > 40);

console.log(massMore); 


console.log("\n")
console.log("output 10--------------------\n")

let shorter = characters.every(e => e.height < 200);

console.log(shorter); 

console.log("\n")
console.log("output 11--------------------\n")

let hasBlueEyes = characters.some(e => e.eye_color === "blue");

console.log(hasBlueEyes); 

console.log("\n")
console.log("output 12--------------------\n")

let tallerThan210 = characters.some(e => e.height > 210);

console.log(tallerThan210); 



