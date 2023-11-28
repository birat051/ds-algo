const arr=[1,5,10,12,14,18,22,27]

function binarySearch(arr,low,high,element)
{
    if(low>high)
    return -1
    let middle=Math.floor((low+high+1)/2)
    if(arr[middle]==element)
    return middle
    if(element<arr[middle])
    return binarySearch(arr,low,middle-1,element)
    else
    return binarySearch(arr,middle+1,high,element)
}

const result=binarySearch(arr,0,arr.length-1,27)
if(result!=-1)
console.log('Element found at: ',result+1)
else
console.log('Element not found')