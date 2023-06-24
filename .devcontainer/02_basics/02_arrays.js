const heros = ["thor", "ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// heros.push(dc)
// console.log(heros)        //gives array within an array , does not merge both arrays
// console.log(heros[3][1])      //flash

// heros.concat(dc);
// console.log(heros)           // same output with concat(), push() also...array within array !
//soo....solution1 :  have to hold it in new array for concat(): with concact can join only 2 arrays !

// let allheros = heros.concat(dc);
// console.log(allheros);

//solution2: use...(spread operator) for as many arrays as you want to join !!!!

// let arr = [...heros,...dc]
// console.log(arr)

//----------------------------flat()-------------------------------------
// const arr = [1,2,3,4,[5,6,7],8,9,[5,4,[7,8]]]
// const new_arr = arr.flat(Infinity)
// console.log(new_arr);

//----------------------------------------------------------------------------
//to check if given input is array or not ?
console.log(Array.isArray("Hitesh"))           //false
console.log(Array.from("Hitesh"))              //make an array of anything 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))    //make array of any elements(var,array etc)


















