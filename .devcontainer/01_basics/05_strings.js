const name = "Noushika"
const repoCount = 50
//console.log(name + repoCount + " Value"); //not suggested in today world

//string interpolation is the NEW thing ...
console.log(`Hello my name is ${name} and my count is ${repoCount}`)

//different way to declare strings in js :

const gameName = new String("hitesh-hc-new")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.indexOf('t'))
console.log(gameName.charAt(4))
//check all strings methods from mdn and console - (const gameName = new String("Carom") , gameName) 

const newStr = gameName.substring(0,4) 
console.log(newStr)

const anthStr = gameName.slice(0,4)
console.log(anthStr)

const str = "   hitesh   "
console.log(str.trim())
console.log(str)

const url = "https://nou.com/nou%20shika"
console.log(url)
console.log(url.replace('%20','-'));
console.log(url.includes('nou'));

console.log(gameName.split('-'))

                                               




