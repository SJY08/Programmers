function solution(progresses, speeds) {
    let answer = [];
    
    let copy = progresses.map((a,i)=>Math.ceil((100-a)/speeds[i]))
    let count = 0
    let num = copy[0]
    
    for(let i = 0 ; i < copy.length; i++){
        if(num >= copy[i]) count++;
        else{
            answer.push(count);
            count=1;
            num=copy[i]
        }
    }
    
    answer.push(count)
    
    return answer;
}