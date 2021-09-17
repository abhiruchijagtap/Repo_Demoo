var nums= new Array(11,12,13,14,15)
console.log("printing original array...")

nums.forEach(function(val,index){
    console.log(val)
})

nums.reverse()
console.log("printing reverse array");
nums.forEach(function(val,index)
{
    console.log(val)
})