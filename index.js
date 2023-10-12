var numSeq = [3,6,2,3,5]

function getScoreDiffrence(numSeq){
    var playerOneScore = 0
    var playerTwoScore = 0
    var turn = 1 // always game start with player one
    //size array not fix so we use while
    while(numSeq.length > 0){
var frontNum = numSeq[0]
numSeq.splice(0,1)
// splice() use for delete add insert
//below we checking if reverse number we need to reverse it
if (frontNum % 2 ==0){
    numSeq.reverse()
}

//separate if second check player one or player 2 turn
//if player one add to player one score if player2 we add player 2 score
if (turn == 1){
    playerOneScore += frontNum // keeep add on to the score
turn = 2 // next player 2
}else{
    turn = 1 // next round turn one player
    playerTwoScore += frontNum
}
    }
    return(playerOneScore - playerTwoScore)
}
document.write(getScoreDiffrence(numSeq))