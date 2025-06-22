const FindPrimeNumber = (num) => {
    if(num <= 1) return `${num} is NOT a Prime Number`;

  // Iterate from 2 up to the square root of the number
  // If a divisor is found, the number is not prime
    for (let i = 2; i<= Math.sqrt(num); i++) {
       if(num % i === 0) {
        return `${num} is NOT a Prime Number`
       }
    }

    return `${num} is a Prime Number`
}


console.log(FindPrimeNumber(5))