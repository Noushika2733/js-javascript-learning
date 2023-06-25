const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }

}
//  user.welcomeMessage()
//  user.username = "sammy"
//  user.welcomeMessage()
 //console.log(this)


//++++++++++++++++++++++++++++++++++ARROW FUNCTION+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username)         //cant use 'this' inside function to access vars..poss in objs !
// }
// chai()

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username) 
// }
// chai()

// const chai = () =>{                              //ARROW FUNCTION DECLARATION *******
//     let username = "Hitesh"
//    console.log(this) 
// }
// chai()

//syntax:
//() =>{}

// const add = (num1,num2) =>{               // one way of arrow function
//     return num1 + num2
// }
// console.log(add(4,5))

// const add = (num1,num2) => num1 + num2         
//                                                    //2nd way of arrow function ****
// console.log(add(4,5))

const add = (num1,num2) => (num1 + num2)         
                                                   //curly braces() used then no need of return keyword
console.log(add(4,5))                              //{} used then return keyword is compulsory *****

