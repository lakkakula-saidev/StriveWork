/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sumNum(num1,num2){

    if(num1===num2){
        return num1*3
    }else{
        return num1+num2
    }
}

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function numCheck(num1,num2){

    if((num1||num2)===50){
        return true
    }else if((num1+num2) ===50){
        return true
    }else{
        return false
    }
}

//console.log(numCheck(0,50))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/


function charRemove(givenString,position){

    return givenString.slice(0, position) + givenString.slice(position+1);
     
}

//console.log(charRemove('This is called testing',5))
/*

4)
 Create a function to find the largest of three given integers.
*/

function largeCheck(num1,num2,num3){

    let numArray = [num1,num2,num3]
    let maxNum = numArray[0]
    for(let i = 1; i< numArray.length; i++){
        maxNum = numArray[i] > maxNum ? numArray[i] : maxNum
    }
    return maxNum
}
//console.log(largeCheck(200,2,3))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function numRange(num1,num2){

    if((40 <= num1 && 60 >= num1)&&(40 <= num2 && 60 >= num2)){
        return `The two numbers are in the range of 40 to 60`
    }else if((70 <= num1 && 100 >= num1)&&(70 <= num2 && 100 >= num2)){
        return 'The numbers are in the range of 70 to 100'
    }else{
        return 'One of the number is not in the given range'
    }
}

//console.log(numRange(69,71))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/



/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function cityName(givenString){

    if(givenString.substring(0,3)==='Los'){
        return 'Los Angeles'
    }else if(givenString.substring(0,3)==='New'){
        return 'New York'
    }else{
        return 'Blank'
    }
}
//console.log(cityName('Newvwerk'))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function arraySum(givenArray){
    
    let SUM =0
    for(let i=0; i<givenArray.length; i++){
        SUM = SUM+ givenArray[i]
    }
    return SUM
}

//console.log(arraySum([1,2,3,4]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function arrayCheck(givenArray){

    for(let i=0; i< givenArray.length; i++){
        
        if(givenArray[i] === 1){
            return `The given array contains 1`
        }else if(givenArray[i] ===3){
            return `The given array contains 3`
        }
    }
    return `The array contains neither of the numbers`
}

//console.log(arrayCheck([5,2]))


// This is the 10
function arrayCheck(givenArray){

    for(let i=0; i< givenArray.length; i++){
        
        if(givenArray[i] === 1){
            return `The given array contains 1`
        }else if(givenArray[i] ===3){
            return `The given array contains 3`
        }
    }
    return `The array contains neither of the numbers`
}

/*
10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/


/*
11)

Create a function to find the longest string from a given array of strings.
*/

function stringCheck(givenArray){

    let maxString = givenArray[0]
    for(let i = 1; i< givenArray.length; i++){
        maxString = givenArray[i].length > maxString.length ? givenArray[i] : maxString
    }
    return maxString
}

//console.log(stringCheck(['Hello', 'This', 'is', 'My World']))
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

function angleCheck(givenAngle){

    if(0<givenAngle && 90>givenAngle){
        return 'The angle is Acute angle'
    }else if(90<givenAngle && 180>givenAngle){
        return 'The angle is Obtuse angle'
    }else if(givenAngle === 90){
        return 'The given angle is a Right angle'
    }else if(givenAngle === 180){
        return 'The given angle is a straight angle'
    }else{
        return 'The given angle is not in the specified range'
    }
}
//console.log(angleCheck(179))

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
function indexCheck(givenArray){

    let startIndex = 0
    for(let i=1; i<givenArray.length; i++){

        startIndex = givenArray[i]>givenArray[startIndex]? i: startIndex
    }

return startIndex   
}
//console.log(indexCheck[5,10,-10,12])


/*
14)
Create a function to get the largest even number from an array of integers.
*/
function evenNumber(givenArray){

    let startEven = givenArray[0]
    for(let i=1; i<givenArray.length; i++){

        startEven = (givenArray[i]>startEven)&&(givenArray[i]% 2 == 0)? givenArray[i]: startEven
    }

    if(startEven===givenArray[0]){
        return 'There are no Even numbers in the given Array'
    }else{
        return `The largest Even number in the array  is ${startEven}`
    }
    
}

// console.log(evenNumber([1,10,15,19,212]))

/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

function signCheck(num1,num2){
    if(num1>0 || num2 >0){
        if(num1<0 || num2 <0){
            return 'One of the numbers is +ve and another is negative'
        }else{
            return 'Both the numbers are positive'
        }
    }else{
        return 'Both the numbers are negative'
    }
}

//console.log(signCheck(-10,-15))

/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

function caseChange(givenString){

    if(givenString.length < 3){
        return givenString.toUpperCase()
    }else{
        return givenString.substring(0,3).toLowerCase() + givenString.substring(3).toUpperCase()
    }
}
//console.log(caseChange('This is Just Testing'))

/*
17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

function numRange(num1,num2){
    let numSum = num1 +num2

    if(50 <= numSum && 60 >= numSum){
        return 65
    }else{
        return 80
    }
}
//console.log(numRange(10,15))
/*
18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

function numberConversion(numGiven){

    let factorsList = [3,5,7]
    let numString=''

    if(numGiven%3 ==0  || numGiven%5==0  || numGiven%7==0 ){

    for(let factor of factorsList){

        if(numGiven % factor == 0){
            switch (factor) {
                case 3:
                    numString = numString+ 'Diego'
                break;
                case 5:
                    numString = numString+ 'Riccardo'
                break;
                case 7:
                    numString = numString+ 'Riccardo'
                break;
            } 
        }
    }
    }else{
        return `${numGiven}`
    } 
    return numString
}
//console.log(numberConversion(30))


/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

function acronym(givenString){

    let idx = givenString.indexOf(' ');
    let indices=[]
    let acro=givenString[0]
    while (idx != -1) {
      indices.push(idx);
      idx = givenString.indexOf(' ', idx + 1);
    }

    for(let i of indices){
        acro = acro.concat(givenString[i+1])
    }
    return acro
}

console.log(acronym('British Broadcasting Corporation'))