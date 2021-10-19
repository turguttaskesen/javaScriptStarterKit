console.log("Merhaba Taşkesen Mühendislik !")

// Js Tip korumalı değildir
let dolarDun = 9.20
dolarDun = "Ankara"
let dolarBugun = 9.30
//dolarDun = "Ankara"

{
    let dolarDun = 9.10
}


console.log(dolarDun)


const  euroDun = 11.2
//euroDun = 11 // bunu let yapamıyoruz.

console.log(euroDun)

//Array
//camelCasing
let konutKredileri = ["konut Kredisi", "Emlak Konut Kredisi",  "Kamu Konut Kredisi", "özel Konut Kredileri"]

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] +"<li>")
    
}
console.log("<ul>")

console.log(konutKredileri)