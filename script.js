let num = 266219
let array = (num + "").split("")
let sum = 1

for (let i = 0; i < array.length; i++) {
    sum *=  Number(array[i])
    
}

sum **= 3

console.log(sum)
console.log((sum + "").slice(0, 2))