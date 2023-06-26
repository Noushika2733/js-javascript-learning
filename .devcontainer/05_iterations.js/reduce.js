//reduce() :
//syntax and ex:

const myNums = [1,2,3,4]

// const myTotal = myNums.reduce( function(accumalator,currentvalue) {
//     console.log(`accumalator: ${accumalator} and currentvalue: ${currentvalue}`)
//     return accumalator + currentvalue
// },10 )          // 0 is intialvalue for accumalator to start !!!!

// console.log(myTotal)
//--------------------------------
// const myTotal = myNums.reduce( (accumalator,currentvalue) =>  accumalator + currentvalue,0)
// console.log(myTotal)


const courses = [
    {
        itemname: "Js course",
        cost: 2999
    },
    {
        itemname: "py course",
        cost: 999
    },
    {
        itemname: "data science",
        cost: 12999
    },]

   const total = courses.reduce( (acc,item ) => acc + item.cost , 0 )
   console.log(total)