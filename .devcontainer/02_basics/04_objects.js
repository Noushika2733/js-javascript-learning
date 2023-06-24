// const tinder1 = new Object()    //singleton obj
// console.log(tinder1)
 const tinder = {}             //not a singleton obj that is all the difference here !
// console.log(tinder)

tinder.id = "123abc";
tinder.name = "Sammy";
tinder.isLoggedIn = false;

//console.log(tinder)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        username: {
            firstname: "hitesh",
            lastname: "Choudary"
        }
    }
}
//console.log(regularUser.fullname.username)  

const obj1 = {
    1: "a",
    2: "b",
    3:"c"
}

const obj2 = {
    4: "ab",
    5: "bc",
    6:"cd"
}

const obj3 = {obj1, obj2}               //gives wrong result of combining to objs 
//console.log(obj3)
const obj4 = Object.assign({},obj1,obj2)   // 1st way to merge objects
//console.log(obj4)

const obj5 = {...obj1, ...obj2}        //2nd way : spread operator******best practice to merge objects 
//console.log(obj5)

//--------------------------------------------------------------------------------------

// data comes from database as an array of objects 
// ex:
// const users= [
//     {
//         id :1
//     },
//     {
//          id1: 1
//     }
// ]

console.log(tinder)
//now I want to get the keys of this object :
console.log(Object.keys(tinder))                             //*******IMPORTANT***************
console.log(Object.values(tinder))

console.log(tinder.hasOwnProperty('isLoggedIn'))
console.log(tinder.hasOwnProperty('isLoggedOut')) //to check if object has particular key(property) or not.

//----------------------------------------------------------------------------------------------------

//------------------------------Object De-structure----------------------------------------------
const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

//course.courseInstructor   --- too big to call many times so we can de-structure it

//const {courseInstructor} = course
//console.log(courseInstructor)
//more easy name then :
const {courseInstructor: instructor} = course
console.log(instructor)

//------------------------------API------------------------------------------------------
//https://api.github.com/users/noushika   check this for JSON syntax..

// {
//    "id": "12345c",
//    "name": "ndhbhgf",
//    "email": "jbxhfdb"
// }


or 

// [
//    {},
//    {},
//    {}
// ]

//check randomuser me api and JSON formatter to understand more in detail ************************




























