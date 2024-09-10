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


