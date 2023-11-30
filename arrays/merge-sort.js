function merge(arr1,arr2)
{
    let i=0,j=0;
    const res=[]
    const m=arr1.length
    const n=arr2.length
    while (i<m && j<n)
    {
        if(arr1[i]<arr2[j])
        {
            res.push(arr1[i])
            i++
        }
        else
        {
            res.push(arr2[j])
            j++
        }
    }
    while(i<m)
    {
        res.push(arr1[i])
        i++
    }
    while(j<n)
    {
        res.push(arr2[j])
        j++
    }
    return res
}

function mergeSort(arr,left,right)
{
    if(left<right)
    {
        const middle=Math.floor((left+right)/2)
        const arr1=mergeSort(arr,left,middle)
        const arr2=mergeSort(arr,middle+1,right)
        return merge (arr1,arr2)
    }
    else
    {
        return left === right  && left < arr.length? [arr[left]] : [];
    }
}

const arr= [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(arr,0,arr.length-1))