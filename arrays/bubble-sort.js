function bubbleSort(arr)
{
    const n=arr.length
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(arr[i]<arr[j])
            {
                const temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}

const arr=[5,6,11,12,1,4,3]
bubbleSort(arr)
console.log(arr)