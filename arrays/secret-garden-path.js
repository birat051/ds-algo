// function designGardenPath(stones,k) First iteration
// {
//     const freqMap={}
//     const res=[]
//     stones.forEach((stone)=>{
//         if(freqMap[stone]==null)
//         {
//             freqMap[stone]=0
//         }
//         freqMap[stone]=++freqMap[stone]
//         if(freqMap[stone]<=k)
//             res.push(stone)
//     })
//     console.log(freqMap)
//     return res
// }

function designGardenPath(stones,k)
{
    const freqMap={}
    const res=[]
    stones.forEach((stone)=>{
        if(freqMap[stone]==null)
        {
            freqMap[stone]=0
        }
        if(freqMap[stone]<k)
        freqMap[stone]=++freqMap[stone]
    })
    const freqArray=Object.keys(freqMap).map((key)=>({stone: parseInt(key),freq: freqMap[key]}))
    const path=[]
    let lastAdded=null
    while (freqArray.length>0)
    {
        freqArray.sort((a,b)=>a.freq-b.freq)
        let index=freqArray.findIndex(e=> e.stone!==lastAdded || freqArray.length<2)
        const selectedStone=freqArray[index]
        path.push(selectedStone['stone'])
        freqArray[index]['freq']=--selectedStone['freq']
        lastAdded=selectedStone['stone']
        if(freqArray[index]['freq']===0)
        freqArray.splice(index,1)
    }   
    return path
}

const arr=[1, 2, 3, 1, 2, 1, 3, 4]
console.log(designGardenPath(arr,2))
console.log(designGardenPath([1, 1, 1, 2, 2, 3], 2));
console.log(designGardenPath([1, 1, 1, 1, 2, 3], 2));
console.log(designGardenPath([1, 1, 2, 2, 3], 1));
console.log(designGardenPath([1, 1, 1, 2, 2, 2, 3], 2));