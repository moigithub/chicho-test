let NUMBERS = [];
 
// set inital valid values range 1 to 75
function setNumbers(){
    for (let i=1; i<=75; i++) {
        NUMBERS.push(i)
    }
}


// return unique random number from pool
function generateNumber(){
    const index=Math.floor( Math.random() * NUMBERS.length)  + 1
    return NUMBERS.splice([index], 1)[0]
}

//generate random values for a bingo card
function generateCard() {
    const B=[]    
    const I=[]    
    const N=[]    
    const G=[]    
    const O=[]    

    
    for (let i=0; i<25; i++) {
        const number = generateNumber()

        if (number>=1 && number <=15){
            B.push(number)
        }
        if (number>=16 && number <=30){
            I.push(number)
        }
        if (number>=31 && number <=45){
            N.push(number)
        }
        if (number>=46 && number <=60){
            G.push(number)
        }
        if (number>=61 && number <=75){
            O.push(number)
        }
    }

    return [B,I,N,G,O]
}


//initialize
setNumbers()
console.log(NUMBERS)
console.log(NUMBERS.length)


console.log( generateCard() )

