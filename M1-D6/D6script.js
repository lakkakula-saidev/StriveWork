
// Function for changing the heading h1
const textHeading = function(givenText){
        let headData = document.querySelector('h1')
    headData.innerText = givenText
}
textHeading('Your website is Hacked')


//Function for changing the backgroung colour
const bodyColor = function(givenColor){
        document.body.style.backgroundColor = givenColor
    }
//bodyColor('blue')

//Function for changing the address of the shop
const addressChange = function(givenAddress) {
        let footerAddress = document.getElementById('address')
footerAddress.innerHTML = givenAddress
}
addressChange('Sorry we have moved away and will update you soon')

// Function for adding class to the anchor or amazon link
const insertClass = function(){

        let amazonLinks = document.querySelector('table').getElementsByTagName('a')
    for(let i=0; i<amazonLinks.length; i++){
        amazonLinks[i].classList.add(`amazonLink$_{i}`)
    }
}
insertClass()


// Function to toggle the class of an image and change the properties
const toggleClass = function(){

    let imageClass = document.getElementsByTagName('img')
    for (let i = 0; i < imageClass.length; i++) {
        imageClass[i].classList.toggle('imgClass')
    }
}


//Function to color the price of each product in a different one every time it's invoked
const priceColor = function(){
    
    let tableData = document.querySelector('table').getElementsByTagName('tr')

    for(i=1; i<= tableData.length;i++){

        console.log(tableData[i].querySelector('td'))

    }

}

