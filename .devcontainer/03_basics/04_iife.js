// Immediately Invoked Function Expressions (IIFE)
//why iife ? global scope's declarations vars pollution creates pbm sometimes,
//so to remove that pollution we use iife.

//syntax:   ()(); 
//1st() -> function
//2nd() -> for running the function immediate and ; is mandate

(function chai(){                    //function with iife works, this is named iife
    console.log(`DB connected`)
})();


( () => {
    console.log("DB 2 connected")           //arrow function with iife works , unnamed simple iife
} )(); 

( (name) => {
    console.log(`DB 2 connected , ${name}`)      //function with args.. with iife works
} )("Hitesh");

