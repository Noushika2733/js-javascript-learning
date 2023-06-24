                                  //SCOPE
// let a =10
// const b = 20
// var c = 30
   // console.log(a)
// console.log(b)
// console.log(c)


// if(true){
//     let a =10
// const b = 20
// var c = 30
// }
// console.log(a)     //not poss
// console.log(b)     //not poss
// console.log(c)      //prints 30

function one(){
    const username = "noush"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const user = "Hitesh"
    if(user === "Hitesh"){
        const website = " youtube"
        //console.log(user + website)
    }
    //console.log(website)
}
//console.log(website)

//-----------------INTERESTING TOPIC----------------------------------------
//one more way of declaring functions in js :
const addtwo = function(num){
    return num + 2;
}
console.log(typeof addtwo(3))



