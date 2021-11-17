
function addToCart(quantity,productName="Elma" ) {// default değer son parametredir.
    console.log("Sepete Eklendi : ürün : " + productName + 
    "=> adet :" + quantity)
}


addToCart(10,"Elma")
addToCart(20)
addToCart(100,"Karpuz")
addToCart()

let dolarDun = 9.5      // değişken tanımlama

let sayHello = ()=>{    // değişkeni fonksiyona atama
    console.log("Hello World!")
}
addToCart(15)

let sayHello3 = ()=>{
    console.log("Hello World?")

}

sayHello()
sayHello3()


let sayHello2 = function (){
    console.log("Hello World2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {// parametre için obje pluşturabiliriz.
    //console.log(productName,quantity,unitPrice)

}


addToCart2("Elma",2,67)

// let  product1 = {productName : "Elma", unitPrice : 10, quantity : 5}

// function addToCart3(product) {
//     console.log("Ürün : " + product.productName)
//     console.log("Adet : " + product.quantity)
//     console.log("Ürün : " + product.unitPrice)
// }
addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName : "Elma", unitPrice : 10, quantity : 5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)

}
let  product2 = {productName : "Armut", unitPrice : 20, quantity : 10}
let  product3 = {productName : "Elma", unitPrice : 10, quantity : 5}

addToCart3(product1)

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)// referans tipler
console.log(product2.productName)// referans tipler

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
console.log(sayi2)

function addToCart4(productsparam) {
    console.log(productsparam)
}

let products = [
    {productName : "Armut", unitPrice : 20, quantity : 10},
    {productName : "Elma", unitPrice : 2, quantity : 5},
    {productName : "Karpuz", unitPrice : 10, quantity : 20},
    {productName : "Limon", unitPrice : 90, quantity : 100}
]
addToCart4(products)
