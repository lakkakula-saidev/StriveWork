/*      JS EXERCISES

        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values */

let x ='John'
let y = 'Joe'
//console.log(`${x} <> ${y}`)

const user = {
    name: 'Saidev',
    surname: 'Lakkakula',
    email: 'saidev.lakkakula@gmail.com'
}

delete user.email
let stringArray =[]

for(let i=1; i<=10; i++){

    stringArray.push(`${i}`)
    //console.log(stringArray[i])
}


let randomArray = []

for(let i=1; i<=100; i++){
    let random = Math.floor(Math.random()*99+1)
    randomArray.push(random)
}

const maxMin = function(){

    return ['MAX:', Math.max(...randomArray),'Min: ',Math.min(...randomArray)]
}

function randGenerator(i){
    let arrayNew = []
    for(let j=1; j<=i; j++){
        arrayNew.push(Math.random()*99+1)
    }
return arrayNew
}
let arrayOfArrays = [randGenerator(10),randGenerator(11)]

function longArray(A1,A2){
    return A1.length > A2.length ? A1: A2
}

function longArray(A1,A2){
    return A1.length > A2.length ? A1: A2
}

function sumArray(A1, A2){
    let S1 =0
    let S2=0
    for(let i=1; i<=A1.length; i++){
        S1 += A1[i] 
    }
    for(let i=1; i<=A2.length; i++){
        S2 += A1[i] 
    }
    return S1 > S2 ? A1: A2
}

let tableData = document.getElementsByTagName('td')

function printData(){
for(let i=0; i< tableData.length; i++){
    tableData[i].innerHTML += i
}
}
function addRow(){

    let tableContent = document.querySelector('table')
    let newRow = tableContent.insertRow(-1)
    let nCells = tableContent.rows[0].cells.length

    for(let i=0; i<=nCells; i++){
         let CellData = newRow.insertCell(-1)  
         CellData.innerHTML = `This is new celL ${i}`

    }

}

function addClass(){

    let tableRows = document.getElementsByTagName('tr')
    for(let i=0; i<tableRows.length; i++ ){
        tableRows[i].className = 'test'
    }    
}

function linkStyle(){

    let Links = document.getElementsByTagName('td')
    for(let i=4; i<Links.length; i= i+5 ){
        
        Links[i].style.backgroundColor = 'red'
    }    
}
linkStyle()

window.onload = function(){

    console.log('Page Loaded')

}