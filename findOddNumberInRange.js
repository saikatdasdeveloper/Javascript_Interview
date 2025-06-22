const findOddNumber = (start,end) => {
    // const oddNumber = []
   for (let i = start; i<=end ; i++) {
        if(i%2 !== 0) {
            // oddNumber.push(i)

            console.log(`${i} is a Odd Number`)
        }
   }
//    return oddNumber;             
}


findOddNumber(2,9)