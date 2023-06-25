//switch statement :
//syntax :
// switch (key) {     //if 'break' not provided then everything below that case
//     case value:                runs....except 'default:' **********
        
//         break;

//     default:
//         break;
// }

// }

const month = 5;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("jun");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("aug");
        break; 
        

    default:
        console.log("Invalid number");
        break;
}

