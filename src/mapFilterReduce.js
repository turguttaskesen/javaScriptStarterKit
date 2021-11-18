let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Kalem", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Bardak", quantity: 1, unitPrice: 20 },
    { id: 4, productName: "Şarz Cihazı", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },

]

//cart.map(product =>console.log(product.productName))//diziyi tek tek dolaşır.

console.log("<ul>")
cart.map(product => {
    console.log("<ul>"+product.productName + " : " + product.unitPrice * product.quantity+"/<ul>")
})//Diziyi gezer************
console.log("<ul>")

let total = cart.reduce((aku, product) => aku + product.unitPrice * product.quantity, 0)// acc'nin ilk değeri 0 dır.
console.log(total)


let quantityOver2 = cart.filter(product => product.quantity < 4)
// yepyeni array oluştururuz.
console.log(quantityOver2)

function addToCart(sepet) {// referans tip plduğu için adrese ekleme yapar.
    sepet.push({ id: 7, productName: "Monitör", quantity: 3, unitPrice: 2000 })
}

addToCart(cart)

console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1
    return number
}
sayiTopla(sayi)//değer tip tir değiştirme yapmaz.
console.log(sayi)
