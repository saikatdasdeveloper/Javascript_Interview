const evenFun = (num) => {
    if(num %2 === 0) {
        return `${num} is an Even Number`
    }
    else {
        return `${num} is NOT an Even Number`
    }
}


console.log(evenFun(13))