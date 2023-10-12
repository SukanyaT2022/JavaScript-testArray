var scoreArr = [1,2,3,4,5]

// filter only even number
//use loop
function filterEven(scoreArr){
for (i=0; i<scoreArr.length; i++){
    if (scoreArr[i] % 2 == 0){
        document.write(scoreArr[i])
    }
}
}
filterEven(scoreArr)

//no loop show only even number
function filterEvenNoloop(num){
    return num % 2 == 0
}
var newArr = scoreArr.filter(filterEvenNoloop)
document.write(newArr)




