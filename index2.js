const cal = (fn) => {
    const a = 12;
    const b = 20;
    return fn(a,b)
};

const tinhTong = (a,b) => {
    return a + b;
}

const tong = cal(tinhTong)
const tich = cal((a,b) =>  b === 0 ? undefined :  a / b)

// bai tap
const n = 100

const calc = (func) => {
    let result = " "
    for(let i = 1; i <= n ; i++){
        if(func(i)) result += " " + i 
    }
    return result
};


const getEven = calc((number) => number % 2 === 0 )
const getOdd = calc((number) => number % 2 === 1  )
const getDecimal6_5 = calc((number) => number % 6 === 5  )
const getDecimal6_4 = calc((number) => number % 6 === 4  )
const getSquare = calc((number) => parseInt(Math.sqrt(number)) === Math.sqrt(number) )
// const getEven = calc((number) => number % 2 === 0 )
// const getEven = calc((number) => number % 2 === 0 )
  

console.log(getSquare )


// bai tap vef nha
const n =5;
const paint = (fn,n) =>{
    let stgStar = ''
    for (let y = 1; y <= n ; y++ ) { 
        for (let x = 1; x <= n; x++ ) { 
            if(fn(x,y,n)){
                stgStar += "* "
            }else{
                stgStar += "  "
            }
        }
        stgStar += "\n"
    }
    return stgStar
}


// const paint1 = () => {
    
//     for (let y = 0; y <= 5 ; y++ ) { 
//         let stgStar = ''
//         for (let x = 0; x <= 5; x++ ) { 
//            if(x <= y){
//             stgStar += "* "
//            }
//         }
//         console.log(stgStar)
//     }
    
// }
// const paint2 = () => {
    
//     for (let y = 0; y <= 5 ; y++ ) { 
//         let stgStar = ''
//         for (let x = 0; x <= 5; x++ ) { 
//            if(y < 5 - x + 1){
//             stgStar += "* "
//            }else{
//             stgStar += "  "
//            }
//         }
//         console.log(stgStar)
//     }
    
// }
// const paint3 = () => {
//     for (let x = 1; x <= 5 ; x++ ) { 
//         let stgStar = ''
//         for (let y = 1; y <= 5; y++ ) { 
//             if(y == 1 || x == y || x == 5){
//                 stgStar += "* "
//             }else{
//                 stgStar += "  "
//             }
//         }
//         console.log(stgStar)
//     }
// }
// const paint4 = () => {
//     for (let x = 5; x >= 1 ; x-- ) { 
//         let stgStar = ''
//         for (let y = 5; y >= 1; y-- ) { 
//             if(x == 5 || x == 5 -y +1 || y == 5){
//                 stgStar += "* "
//             }else{
//                 stgStar += "  "
//             }
//         }
//         console.log(stgStar)
//     }
// }
const paint5Of2 = () => {
    for (let x = 5; x >= 1 ; x-- ) { 
        let stgStar = ''
        for (let y = 5; y >= 1; y-- ) { 
            if(y <= x){
                stgStar += "* "
            }
        }
        console.log(stgStar)
    }
}

const result = paint((x,y)=> (x <= y) ? true : false,n)
const result2 = paint((x,y,n)=> y <= n - x + 1 ? true : false,n)
const result3 = paint((x,y)=> (x == 1 || x == y || y == 5) ? true : false , n)
const result4 = paint((x,y,n)=> (y == 1 || y == n -x +1 || x == 1) ? true : false,n)

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)