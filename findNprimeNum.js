import {FindPrime} from './playroom.js'

const FindNPrime = (n) => {
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

FindNPrime(4)