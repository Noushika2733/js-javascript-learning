//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

const array = [1,2,3,4,5,6]

 for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
 }


 //loop inside a loop
//  for(i=1;i<= 10;i++){
   
//     console.log(`outer loop ${i}`)               //printing tables form 1 to 10 ********
//     for(j=1;j<= 10;j++){
//         //console.log(`inner loop ${j}`)
//         console.log(i + '*' + j + '='+  i*j)

//     }

//  }

 //break and continue :
//  for(i=1;i<=20;i++){
//    if(i === 5){
//       console.log("Detected 5");                            //break
//       break;
//    }
//    console.log(`Value of i is ${i}`)
//  }
 
 for(i=1;i<=20;i++){
   if(i === 5){
      console.log("Detected 5");                            //continue
      continue;
   }
   console.log(`Value of i is ${i}`)
 }
 
 






