let arr=[1,2,3,4,5]

function updateElement(arr,index,element)
{
    if(arr.length-1<index || index<0)
        return false
    arr[index]=element
    return true
}

function arraySum(arr)
{
    return arr.reduce((sum,element)=>{
        return sum+=element
    },0)
}

let result=updateElement(arr, 2, 10);
if(!result)
{
    console.log('Array index out of range')
}
console.log('Array sum is: ',arraySum(arr))