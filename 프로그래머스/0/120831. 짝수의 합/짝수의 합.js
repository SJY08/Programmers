function solution(n) {
    let answer = 0
    //초기 값을 짝수 중 가장 작은 값인 2부터(0은 더해도 의미가 없으니 ..) 시작해 i가 n 이하일때 계속 2씩 증가, i를 answer 변수에 계속 더해준다
    for(let i = 2; i <= n ; i+=2) answer+=i
    return answer;
}
