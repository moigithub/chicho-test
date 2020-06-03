let NUMBERS = [];
 
// set inital valid values range 1 to 75
function setNumbers(){
    for (let i=1; i<=75; i++) {
        NUMBERS.push(i)
    }
}


// return unique random number from pool
function generateNumber(){
    const index=Math.floor( Math.random() * 75)  + 1
    return NUMBERS.splice([index], 1)[0]
}



setNumbers()

console.log( generateNumber() )
console.log( generateNumber() )
console.log( generateNumber() )
console.log( generateNumber() )
console.log( generateNumber() )
