let NUMBERS = [];
let B=[]
let I=[]
let N=[]
let G=[]
let O=[]

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

    return [b,i,n,g,o]    
}


//initialize
setNumbers()


const generateBNumber = generateNumber(B)
const generateINumber = generateNumber(I)
const generateNNumber = generateNumber(N)
const generateGNumber = generateNumber(G)
const generateONumber = generateNumber(O)


console.log( generateCard() )

