//if

// if(2 == "2"){
// console.log("executed");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromemail = true
if(userLoggedIn && debitCard){
    console.log("Allowed to buy");
    }

if(loggedInFromGoogle || loggedInfromemail){
    console.log("user logged in")
}