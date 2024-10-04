// console.log() skriver ut något i konsolen.
console.log("Jag älskar JavaScript!")
console.log(50)

// I JS kan du göra matematiska operationer.
console.log(1 + 2)
console.log(5 - 3)
console.log(3 * 2)
console.log(5 / 0)
console.log(10 % 3) // Läses modulo, anger resten vid division. 10 % 3 --> 1

// I JS så har de matematiska operationerna samma ordning som i verkliga världen.
console.log(1 + 3 * 3)

// Ibland kan det vara användbart att spara dina värden. Detta kallas för variabel.
// Om jag använder samma värde flera gånger i koden slipper jag skriva om det.
let temperature = 3
console.log(temperature * 9 / 5 + 32)
console.log(temperature + 273)

// let är samma sak som const men tillåter dig inte att omdeklarera
const favoriteNumber = 42
//favoriteNumber = 40 // Ger dig error

// I ovanstående exempel har vi behandlat siffror och tal. Vi ska nu kika lite på strängar.
const word1 = "Hello"
const word2 = "World"
console.log(word1 + word2) //HelloWorld

// Alla operationer mellan strängar är inte tillåtna
console.log(100 / "apple") //NaN (Not-a-number)