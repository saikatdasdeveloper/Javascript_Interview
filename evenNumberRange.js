const FindEvenNumberRange = (start, end) => {

    const evenNumber = [];

    for (let i = start; i <=end; i++) {
        if(i %2 === 0) {
            console.log (`${i} is an Even Number`)
            evenNumber.push(i)
        }
    }
        return evenNumber;
}


console.log(FindEvenNumberRange(2,20));
