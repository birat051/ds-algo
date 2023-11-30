const arr=[1,2,3,4,5,6]

arr.splice(3,1) //delete one element starting from 3rd index
console.log(arr)
const arr1=arr.filter((el)=>el!=5)
console.log(arr1)
arr.shift()  //removes the first element from array
console.log(arr)
arr.pop() //remove the last element from array
console.log(arr)
