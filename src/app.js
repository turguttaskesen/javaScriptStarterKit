<<<<<<< HEAD
console.log("Merhaba Kodlama.io !")

// Js Tip korumalı değildir
//var sayi2 = 10
//sayi2 = "Turgut"

let student = { id: 1, name1: "Turgut Taşkesen" }

//console.log(student)

function save(student, puan = 10) {
    console.log(student.name1 + " kayıt edildi. " + puan + ":aldı.")

}

//save(student, 100)//"Engin")

let students = ["Engimn Demiroğ", "Turgut Taşkesen", "Ahmet Kat"]

//console.log(students)

let students2 =[student,{ id: 2, name1: "Metin" }, "Ankara", {city:"Kahramanmaraş"}]
//console.log(students2)

let showProduts = function name(id,...products) {//products bir dizi döndürür.
    console.log(id)
    console.log(products[0][0])
}

showProduts(10, "Elma", "Armut", "Karpuz")// rest parametre

//Spread
let puanlar = [1,2,3,4,56,89,74,14]

console.log(...puanlar)
console.log(Math.min(...puanlar))
console.log(..."ABC", "D",..."EFG", "H")

//Destructuring = dizi elemanlarını değişkenlere atamaktır.

let populations = [10000,20000,30000, [40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
    
}

someFunction(populations)










/* let dolarDun = 9.20
dolarDun = "Ankara"
let dolarBugun = 9.30
//dolarDun = "Ankara"


console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
{
    let dolarDun = 9.10
}

<<<<<<< HEAD

console.log(dolarDun)


const  euroDun = 11.2
//euroDun = 11 // bunu let yapamıyoruz.

console.log(euroDun)

//Array
//camelCasing
let konutKredileri = ["konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "özel Konut Kredileri"]

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] +"<li>")

}
console.log("<ul>")

console.log(konutKredileri) */
=======
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
