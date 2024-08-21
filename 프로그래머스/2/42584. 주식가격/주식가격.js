/*

return 각 주식 별, 처음 prices 값보다 아래로 내려가지 않는 기간

prices길이 만큼 반복

    let second = 0;
    
    if(i == 마지막 인덱스)
        answer.push(second) //0 push
    else{
        prices[i]부터 끝까지 반복
            if(j == 마지막 인덱스)
                answer.push(0)
            if(prices[i] <= prices[j])
                 second ++
            else if(prices[i] > prices[j])
                answer.push(second+1)
                break
    }

return answer

*/

function solution(prices) {
    let answer = []
    
    for(let i = 0 ; i < prices.length ; i++){
        let second = 0 ;
        
        if(i == prices.length-1){
            answer.push(second)
            break
        }
        
        for(let j = i+1 ; j < prices.length ; j++){
            if(prices[i] <= prices[j])
                second++
            else{
                answer.push(second+1)
                break
            }
            if(j == prices.length-1)
                answer.push(second)
        }
    }
    return answer
}