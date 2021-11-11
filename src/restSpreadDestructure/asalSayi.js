console.log("Merhaba Kodlama.io")

function asalMi(...numbers) {
    let asal = []
    let asalDegil = []

    for (let number = 0; number < numbers.length; number++) {
        //console.log(...numbers)
        if (numbers[number] == 2)
            asal.push(numbers[number])

        if (numbers[number] == 0 || numbers[number] == 1)
            asalDegil.push(numbers[number])

        for (let i = 2; i < numbers[number]; i++) {

            if ((numbers[number]) % i == 0 ) {
                asalDegil.push(numbers[number])
                break
            } else {
                asal.push(numbers[number])
                break
            }

        }
    }
    console.log("Asal sayılar : " + asal)
    console.log("Asal Değil   : " + asalDegil)


}
asalMi(0,2,3,5,7,13,15,4,6,8,10,11,12,13,14,16,115,116,25)