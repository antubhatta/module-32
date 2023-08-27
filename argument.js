function sum(a,b,c){
    // console.log(arguments[5])
    const args= [...arguments]
    console.log(args)
    const total=a+b+c;
    return total
}
const result=sum(4,5,6,99,33,44,34,53,22)
// console.log(result)
// console.log(typeof sum)
console.log(sum.length)