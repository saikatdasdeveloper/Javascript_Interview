const OddNumberFun = (num) => {
    if (num % 2 !== 0) {
        return `${num} is a Odd number`
    }
    else {
        return `${num} is not a Odd Number`
    }
}


console.log(OddNumberFun(5))