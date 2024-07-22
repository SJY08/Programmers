function solution(arr) {
    let answer = []
    for(let v of arr)
        for(let i = 0 ; i < v ; i++)
            answer.push(v)
    return answer;
}