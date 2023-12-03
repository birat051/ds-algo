function analyzeSymbols(symbols)
{
    const resultMap={}
    const resultArr=[]
    symbols.forEach((symbol)=>{
        if(resultMap[symbol]==null)
        {
            resultMap[symbol]=0
            resultArr.push(symbol)
        }
        resultMap[symbol] = ++resultMap[symbol]
    })
    console.log( 'Frequency object: ',resultMap, ` array without duplicates: [${resultArr}]`)
}

const symbols=[3, 5, 3, 4, 5, 3, 4]
analyzeSymbols(symbols)