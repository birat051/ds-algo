function addMatrices(matrixA,matrixB)
{
    if(matrixA.length===0 || matrixB.length===0 )
        return "Empty matrix provided as input"
    if(matrixA.length!=matrixB.length || matrixA[0].length!=matrixB[0].length)
        return "Matrices provided are not of same length"
    return matrixA.map((x,i)=>x.map((y,j)=>y+matrixB[i][j]))
}

function multiplyMatrices(matrixA,matrixB)
{
    if(matrixA.length===0 || matrixB.length===0 )
        return "Empty matrix provided as input"
    if(matrixA[0].length!==matrixB.length)
        return "Matrices cant be multiplied"
    const res=[]
    for(let i=0;i<matrixA.length;i++)
    {
        const resRow=[]
        for(let j=0;j<matrixB[0].length;j++)
        {
            let sum=0
            for(let k=0;k<matrixB.length;k++)
            {
                sum+=matrixA[i][k]*matrixB[k][j]
            }
            resRow.push(sum)
        }
        res.push(resRow)
    }
    return res
}



const matrixA=[ [1, 2],
[3, 4] ]
const matrixB=[ [5, 6],
[7, 8] ]

const matrixC=[[1]]
const matrixD=[[2]]

const matrixE=[ [1],
[2] ]

const matrixF=[[1, 2, 3], [4, 5, 6]]

const matrixG=[[7, 8], [9, 10], [11, 12]]



console.log(addMatrices(matrixA,matrixB))

console.log(addMatrices(matrixC,matrixD))

console.log(addMatrices(matrixA,matrixD))

console.log(addMatrices(matrixC,[]))

console.log(multiplyMatrices(matrixA,matrixE))

console.log(multiplyMatrices(matrixA,matrixB))

console.log(multiplyMatrices(matrixF,matrixG))

console.log(multiplyMatrices([[2]],[[3]]))
