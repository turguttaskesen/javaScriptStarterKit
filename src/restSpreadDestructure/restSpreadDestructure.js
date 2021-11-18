

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
add(20,30,40,50)

function add1(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add1(20,50)
add1(20,30,50)
add1(20,30,40,50)

let numbers = [30,10,500,600,120]
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)

let newProductName, newUnitPrice,newQuantity 
({productName:newProductName, unitPrice : newUnitPrice, quantity:newQuantity} 
= {productName:"Armut", unitPrice:200, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)