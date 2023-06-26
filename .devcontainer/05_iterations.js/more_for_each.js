//forEach -> do any operation but does NOT RETURN any values into a variable.
//filter -> if true...then return values as per action into a variable
//map -> returns values after action 
//all these are callbackfunctions only


// const coding = ["js", "java","cpp","python","ruby"]

// const values = coding.forEach( (item) => {
//     console.log(item)
// })
// console.log(values)


//-------------------chaining------------------------------------------

const nums = [1,2,3,4,5,6,7]

const number = nums
                 .map( (n) => n * 10 )
                 .map(  (n) => n + 1 )
                .filter( (n) => n > 30)
       
console.log(number)                