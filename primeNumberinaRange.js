const FindPrimeNumberInRange = (start,end) => {
    if (start <= 1) return `Can't Start from ${start}`

    for (let i = start ; i <= end ; i ++) {
        let isPrime = true
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                isPrime = false;
                break;  //No Need to Keep Checking
            }
        }

        if(isPrime) {
            console.log(`${i} is a Prime Number`);
        }
    }
}

FindPrimeNumberInRange(5, 10);