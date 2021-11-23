import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) {
        //console.log("User Oluştu")
        super(id, firstName, lastName, city, age)
        this.salary = salary
    }
}