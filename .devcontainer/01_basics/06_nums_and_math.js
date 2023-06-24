// const  num = 400;                          //400
// console.log(num)

// const bal = new Number(100)
// console.log(bal)                        //[Number: 100] check in console also for number functions

// console.log(bal.toString().length);      //number to string and using string properties..
// console.log(bal.toFixed(2));              // 100 to 100.00

// const num1 = 23.8966;
// console.log(num1.toPrecision(3));      // 23.9
// const num2 = 123.9877
// console.log(num2.toPrecision(3))        //124
// const num3 = 123.9877
// console.log(num3.toPrecision(4))        //124
// const num4 = 1234.9877
// console.log(num4.toPrecision(3))        //1.23e+3

// const num5 = 1000000
// console.log(num5.toLocaleString());            //US stds - 1,000,000
// console.log(num5.toLocaleString('en-IN'))     // Indian std - 10,00,000

//------------------------------------------------MATHS---------------------------------------------------


// console.log(Math)                      //check console for its properties
// console.log(Math.abs(-4))              //to get absolute value = -ve becomes +ve thats alll
           
// console.log(Math.round(4.3))           // 4
// console.log(Math.round(4.7))           //5
// console.log(Math.ceil(4.2))            //5
// console.log(Math.floor(4.9))           //4

// console.log(Math.max(3,4,5,6,7,2,))
// console.log(Math.min(3,4,5,6,7,2,))

// console.log(Math.random())                     //between 0 and 1
// console.log((Math.random()*10) + 1);              // random number between 1 to 10 but not 0 at any cost...
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);     // to get just a single number and not a decimal val...

//---------------------------------------------------------------------------------------------------------
//I want random num btwn 10 and 20 : to get random nums between a range : *********
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

//----------------------------------------------------------------------------------------------------------



