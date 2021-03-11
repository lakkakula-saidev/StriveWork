/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {

    let rect_area = l1 * l2
    return rect_area
}

//console.log(area(23,37))


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(Z1,Z2){

    let sum = Z1 === Z2 ? (Z1 + Z2) * 3 : Z1 + Z2
    return sum
}

//console.log(crazySum(16,10))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(Z1){

    let diff = Math.abs(Z1-19)  // Inbuilt function
    diff = diff > 19 ? diff*3 : diff
    return diff

}
//console.log(crazyDiff(15))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n){

    let bool = (20 <= n <= 100)|| (n===400) ? true : false 
    return bool
}

//console.log(boundary(101))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/


const strivify = function(randString){

    let newString
    truthValue = randString.startsWith('Strive')
    newString = truthValue ? randString : 'Strive' + randString
     return newString
} 

//console.log(strivify(' School, How are you'))


/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(n){

    if(n < 0){

        return 'Enter a positive number please...'
    }else{

        if(n % 3 === 0){

            return 'Multiple of THREE'
        } else if (n % 7 === 0){

            return 'Multiple of SEVEN'
        }else{

            return 'Not a multiple of 3 and 7'
        }
    }

}

//console.log(check3and7(63))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(stringGiven){

    let splitString = stringGiven.split('')
    let reverseSplitString = splitString.reverse()
    splitString = reverseSplitString.join('')
    return splitString
}
//console.log(reverseString('Sherlock Holmes'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(stringGiven) {

    let splitString = stringGiven.split(' ')

    for(i=0; i <= splitString.length-1; i++ ){
        
        let charChange = splitString[i]
        splitString[i] = charChange.charAt(0).toUpperCase() + charChange.slice(1)
    }

    stringGiven = splitString.join(' ')
    return stringGiven
}

//console.log(upperFirst('sun rises in the east'))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(givenString){

    let lengthOfString = givenString.length

    givenString = givenString.slice(1, lengthOfString-1)
    return givenString
}

//console.log(cutString('sun rises in the east'))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){

    let arrayArray = []
    for(i=0; i<n; i++){

        let randomInt = Math.random() * 11
        randomInt = Math.floor(randomInt)
        arrayArray.push(randomInt)
    }

    return arrayArray

}

console.log(giveMeRandom(9))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/