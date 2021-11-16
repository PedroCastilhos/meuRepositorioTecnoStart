var array = [0,1,2,3,4,5,6,7,8,9]
var outroArray = []

var callback = (elemento)=>{
    return elemento > 5
}

outroArray = array.filter(callback)
console.log("com filter:" + outroArray);


outroArray =[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(callback(element, index, array)){
        outroArray.push(element)
    }
}
console.log("com for:" + outroArray);