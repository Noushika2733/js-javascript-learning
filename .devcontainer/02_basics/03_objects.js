//singleton : made out of constructor onlyy object.. //object.create
//literals : not a singleton..we will learn this first

//object literals :

const mySym = Symbol("Key1")
const jsUser = {
    name: "Noushika" ,
    [mySym]: "myKey1",                                  //obj declaration
    age: 26,
    loc:"Jaipur",
    email:'noush@google.com',
    isLoggedIn: false,
    lastLogInDays: ["Mondays","Saturday"]
} 

// console.log(jsUser.email)                                    //2 ways to access 
// console.log(jsUser["email"])    // best way !!

//Q : Take a Symbol , add it in object's key and print it.
//answr :  //const mySym = Symbol("Key1") then add it in array as above then print it !!

// console.log(jsUser[mySym])
// console.log(typeof mySym)


// jsUser.age = 27;     //can override values of array like this
// console.log(jsUser)

// Object.freeze(jsUser)     // to freeze anymore changes in the array
// jsUser.age = 18;
// console.log(jsUser)        //18 not reflected .


//arrays with functions
jsUser.greeting = function(){
    console.log("Hello JS user")
}
 
jsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);

}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())








