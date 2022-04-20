function getFunctorial (a) {
    if (a === 1) return a;
    return a * getFunctorial(a - 1)
}

console.log(getFunctorial(5)) // 120 (5*4*3*2*1)


function pow(x,y) {
    if (y === 1 ) return x
    else return  x * pow(x,y - 1)
}

console.log(pow(5,2))