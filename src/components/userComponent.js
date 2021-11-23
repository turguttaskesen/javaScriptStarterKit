import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingCocerns/logging/logger.js"
import { users } from "../data/users.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi...")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Turgut", "Taşkesen", "Kahramanmaraş")
let user2 = new User(2, "İbrahim", "Taşkesen", "Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))


let customer = { id: 1, fistName: "Turgut" }

// Prototyping
customer.lastName = "Taşkesen"
console.log(customer.lastName)

console.log("***************************************************************************")

userService.load(users)