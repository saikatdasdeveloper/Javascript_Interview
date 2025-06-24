export const FindPrime = (n) => {
if (n <2) return false

    for(let i = 2; i <=Math.sqrt(n); i++) {
        if(n%i === 0) return false
    }
    return true;
}


// console.log(FindPrime(2))


export const rangePrime = (start,end) => {
    for(let i = start; i<=end ; i++) {
        if(FindPrime(i)){
            console.log(`${i} is a Prime Number`)
        }
    }
}

// rangePrime(1,10)


export const FindNPrime = (n) => {
    const result = [];
    let i = 2;

    while(result.length < n) {
        if(FindPrime(i)) {
            result.push(i)
            console.log(`${i} is a Prime Number`)
        }
        
        i++;
    }
}

// FindNPrime(4)