//Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)                 //object ****

//--------------------------Different syntaxes for dates--------------------------------------------
// let myNewDate = new Date(2023,0,23)           //month starts with 0 in js 0=jan , 1=feb etc...
// let date = new Date(2023,0,23,5,40)           // for date and time as well
// let newDate = new Date("2023-01-31")          // for our own format like here yyyy-mm-dd 
//let newDate1 = new Date("01-31-2023") 
// console.log(myNewDate.toDateString())
// console.log(date.toLocaleString())
// console.log(newDate.toLocaleString())
// console.log(newDate1.toLocaleString())


//TIMESTAMPS----------------
// let myTimeStamp = Date.now();
// console.log(myTimeStamp)                //will give you current time from jan01 1970 till today in millisecs
// console.log(newDate1.getTime())       //will give our given time from start time in millisecs 
// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))           //for converting millisecs to secs ********


let newDate = new Date()
// console.log(newDate.getMonth())              //jan=0, feb=1 remember
// console.log(newDate.getDay())                // mon=1 tues =2 sat =6 remember 

//-------toLocalString() properties and how it works ands how we can customize it ?-----------------

let date = newDate.toLocaleString('default',{
    weekday: "long"
                                                      //click crtl+space abr to get all avail options to use
})
console.log(date)











