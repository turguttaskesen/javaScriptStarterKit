function addToCart(quantity,productName="Elma" ) {
    console.log("Sepete Eklendi : " + productName + 
    "=> adet :" + quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")
//addToCart(25)

let dolarDun = 9.5
let sayHello = ()=>{
    console.log("Hello World??")
}

sayHello()

let sayHello2 = function (){
    console.log("Hello World2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",2,67)

let  product1 = {productName : "Elma", unitPrice : 10, quantity : 5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Ürün : " + product.unitPrice)
}


addToCart3(product1)

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


