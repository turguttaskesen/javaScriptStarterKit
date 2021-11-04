<<<<<<< HEAD
function addToCart(quantity,productName="Elma" ) {
    console.log("Sepete Eklendi : " + productName + 
    "=> adet :" + quantity)
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

//addToCart()
addToCart(10)
<<<<<<< HEAD
//addToCart("Karpuz")
//addToCart(25)

let dolarDun = 9.5
let sayHello = ()=>{
    console.log("Hello World??")
=======
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

sayHello()

<<<<<<< HEAD
let sayHello2 = function (){
    console.log("Hello World2")
}

sayHello2()
=======
let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

function addToCart2(productName, quantity, unitPrice) {
    
}

<<<<<<< HEAD
addToCart2("Elma",2,67)

let  product1 = {productName : "Elma", unitPrice : 10, quantity : 5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Ürün : " + product.unitPrice)
=======
addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}


addToCart3(product1)

<<<<<<< HEAD
let  product2 = {productName : "Armut", unitPrice : 20, quantity : 10}
let  product3 = {productName : "Elma", unitPrice : 10, quantity : 5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)// referans tipler

function addToCart4(products) {
    console.log(products)
    
}

let products = [
    {},
    {},
    {},
    {}
]
addToCart4(products)

function add(...numbers) {//Rest işlemi
    //console.log(numbers)
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i])
        total = total + numbers[i]
    }
    console.log(total)
    
}
add(20,50)
add(20,30,50)

console.log(Math.max(23,45,78,100))

=======
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

