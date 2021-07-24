var stdin = process.openStdin()

stdin.addListener("data", function (d){
    let res;
    res = parseInt(d)%2 == 0 ? "even" : "odd"
console.log('You entered: ', res)
//return res
process.exit(0)
})