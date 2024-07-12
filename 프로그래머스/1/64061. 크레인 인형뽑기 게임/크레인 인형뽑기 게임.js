function solution(board, moves) {
    let answer = 0
    let stk = []
    
    for(let v of moves){
        let now = v-1
        
        for(let i = 0 ; i < board.length ; i++){
            if(board[i][now] != 0){
                if(stk[stk.length-1] == board[i][now]){
                    answer += 2
                    stk.pop()
                }
                else{
                    stk.push(board[i][now])
                }
                board[i][now] = 0
                break
            }
        }
    }
    return answer;
}