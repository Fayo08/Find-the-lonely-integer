const arr = [1, 2, 3, 4, 1, 2, 3];

const counts = [];
arr.forEach(num => {
    if (!counts.includes(num) ){
counts.push(num)
    }
})
console.log(counts)



// Print all even numbers from 0 – 10
const arr1 = [0,1,2,3,4,5,6,7,8,9,10]
 const evenArr = []

 arr1.forEach((num)=> {
if (num % 2 === 0){
evenArr.push(num)
}
})
console.log(evenArr)