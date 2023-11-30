function rotateArrayAnticlockwise(arr,n)
{
    if(n>arr.length)
    {
        n=n%arr.length
    }
    let i=arr.length-n
    let j=arr.length-1
    reverseArray(arr,i,j)
    j=arr.length-n-1
    i=0
    reverseArray(arr,i,j)
    i=0
    j=arr.length-1
    reverseArray(arr,i,j)
}

function reverseArray(arr,left,right)
{
    let temp=0
    while(left<right)
    {
        temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
}

function rotateArrayClockwise(arr,n)
{
    reverseArray(arr,0,n-1)
    reverseArray(arr,n,arr.length-1)
    reverseArray(arr,0,arr.length-1)
}


let arr = [1, 2, 3, 4, 5,6,7];

rotateArrayClockwise(arr, 2)
console.log(arr);
