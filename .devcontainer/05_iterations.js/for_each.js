const coding = ["js", "java","cpp","python","ruby"]

// coding.forEach(function (courses){     //normal function
//      console.log(courses)
//     })
//this means for each of array values we need to perfom=rm an action
//so....we use function to do that action
//pass array elements as args to the function and then do whatever you want
//onto allll the elements of the function

// coding.forEach((courses) => {       //arrow function
//     console.log(courses)
// })

// function printMe(item){
// console.log(item)
// }
// coding.forEach(printMe);
// //----------------------

// coding.forEach((item,index,arr) => {
//      console.log( item, index, arr)
// })


const mycoding = [{
    name: "javascript",
    langfile: "js"

},{
    name: "Python",
    langfile: "Pt"
},{
    name: "java",
    langfile: "java"
}]

mycoding.forEach(function(item){
     console.log(item.langfile)
} )



