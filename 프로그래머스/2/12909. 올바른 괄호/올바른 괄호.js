function solution(s){
    let answer = 0

    for(let v of s){
        if(v=="(") answer++
        else answer --
        if(answer < 0) return false
    }

    return answer!=0?false:true;
}