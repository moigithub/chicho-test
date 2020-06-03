let NUMBERS = [];
let B=[]
let I=[]
let N=[]
let G=[]
let O=[]
let CALLED_NUMBERS = []

const BLANK = ""

// set inital valid values range 1 to 75
function setNumbers(){
    for (let i=1; i<=75; i++) {
        NUMBERS.push(i)
    }

    B=NUMBERS.slice(0,15)    
    I=NUMBERS.slice(15,30)    
    N=NUMBERS.slice(30,45)    
    G=NUMBERS.slice(45,60)    
    O=NUMBERS.slice(60)    
}


// return unique random number from pool
function generateNumber(array){
    return function() {
        const index=Math.floor( Math.random() * array.length)  
        return array.splice([index], 1)[0]
    }
}

//generate random values for a bingo card
function generateCard() {

    const b=[]
    const i=[]
    const n=[]
    const g=[]
    const o=[]

    for (let idx=0;idx<5;idx++){
        b.push( generateBNumber() )  
        i.push( generateINumber() )  
        n.push( generateNNumber() )  
        g.push( generateGNumber() )  
        o.push( generateONumber() )  
    }

    // should have space in middle of the card ( letter I )
    n[2]=BLANK

    return [b,i,n,g,o]    
}


//check if all numbers on the card have been called
function checkWinnerCard(cardArray){
    return cardArray.flat().every(number => CALLED_NUMBERS.includes(number)||number===BLANK)
}


//initialize
setNumbers()

const callNumbers = generateNumber(NUMBERS)
const generateBNumber = generateNumber(B)
const generateINumber = generateNumber(I)
const generateNNumber = generateNumber(N)
const generateGNumber = generateNumber(G)
const generateONumber = generateNumber(O)

const card1 = generateCard()

console.log( card1 )

let count=0
do {
    count++
    //call a number
    const number = callNumbers()
    CALLED_NUMBERS.push( number )

    console.log(number)
    //check if have winner
    status = checkWinnerCard(card1)
} while (!status && count < 75)

console.log("card1 won after ", count, "attempts")