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

//add no 6 in array we use push function -- push use to add

scoreArr.push(6)
document.write("<br>" + scoreArr)

//put 7 at the front -- splice()use for add remove and update
scoreArr.splice(0,0,7)
//(0,0,7) 
//first means location where i want to inserrt  at position 0- and 
//and 0 middle means i donot want to re place just add
//add no 7 is the value
document.write("<br>" + scoreArr)



//put 8 at the front no 3 on array
scoreArr.splice(2,0,8)
//(0,0,7) 
//first means location where i want to inserrt  at position 2- and 
//and 0 middle means i donot want to re place just add- middle always 0
//add no 8 is the value
document.write("<br>" + scoreArr)


//update position 1 with 100 use splice()
scoreArr.splice(0,1,100)
//first 0 menas position 0
//1 means remove only one value
//100 means number that we want to update


// remove no 5 out of array use splice() or pop()
scoreArr.splice(4,1)
//remove 4 means position 4
//and 1 means only remove 1 value
document.write("<br>" + scoreArr)

//reverse front to back and back to front
scoreArr.reverse()
document.write("<br>" + scoreArr)



