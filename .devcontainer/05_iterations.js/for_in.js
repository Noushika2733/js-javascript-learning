//for in loop :- works for arrays and objects !
//syntax :
// for (const key in object) {
    
// }


const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}
for (const key in myObj) {
    console.log(key)
}
for (const key in myObj) {
    console.log(myObj[key])
    }

for(const key in myObj){
    console.log(key , ':-', myObj[key])
}

//or

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}
//---------------

const arr = [1,2,3,4,5]

for(const key in arr){
    console.log(arr[key])
}



