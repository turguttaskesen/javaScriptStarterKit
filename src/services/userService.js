import { users } from "../data/users.js"

export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.customers = []
        this.employees = []
        this.loggerService = loggerService
    }

    load(users){
        for (const user of users) {
            this.users.push(user)
            
        }
        console.log(users)
    }

    add(user) {
        //console.log("Kullanıcı Eklendi : " + user)
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        //console.log("Kullanıcılar Listelendi")
        //return this.users
    }

    getById(id) {
        //console.log("Kullanıcı Detayı Getirildi.")
        //return this.users.find(u => u.id === id)

    }

}