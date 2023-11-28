let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function printRowWise(arr)
{
    let rowString
    arr.forEach((row)=>{
        rowString=''
        row.forEach((element)=>{
            rowString=rowString+element.toString()+' '
        })
        console.log(rowString)
    })
}

function printColWise(arr)
{
    let colString
    let rowLength=arr[0].length
    x=0
    y=0
    while(x<rowLength || y<arr.length)
    {
        colString=''
        y=0
        while(y<arr.length)
        {
            colString=colString+arr[y][x]+' '
            y+=1
        }
        console.log(colString)
        x+=1
    }
}





// printRowWise(matrix)
printColWise(matrix)