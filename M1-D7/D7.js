/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/

const changeTitle = function (newTitle) {
  pageTitle = document.getElementsByTagName('h1')[0]
  pageTitle.innerHTML = newTitle
  console.log(pageTitle)
}; changeTitle('Strive school for strivers')/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/const addClassToTitle = function () {
  titleData = document.getElementsByTagName('h1')[0]
  titleData.classList.add('myHeading')
}; addClassToTitle()

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function (changedPara) {

  let divParagraph = document.querySelector('div').getElementsByTagName('p')[0]
  divParagraph.innerHTML = changedPara
};

//changePcontent('This is the changed Div Paragragh')

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/
const changeUrls = function () {

  let anchorData = document.getElementsByTagName('a')[0]
  anchorData.href = 'https://www.google.com'
};

//changeUrls()

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */
const addToTheSecond = function (content) {

  let listData = document.createElement('li')
  let textNode = document.createTextNode(content)
  listData.appendChild(textNode)
  document.getElementsByTagName('ul')[1].appendChild(listData)
};

//addToTheSecond('How are you doing')


/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/
const addParagraph = function (content) {

  let newPara = document.createElement('p')
  let paraText = document.createTextNode(content)
  newPara.appendChild(paraText)
  document.getElementsByTagName('div')[0].appendChild(newPara)
};

//addParagraph('Hello this is the new paragraph')

/* EXERCISE 7
Write a function for making the first UL disappear.
*/
const firstUlDisappear = function () {

  let firstList = document.getElementsByTagName('ul')[0]
  firstList.remove()
};
//firstUlDisappear()

/* EXERCISE 8
Write a function for making the background of every UL green.
*/
const paintItGreen = function () {

  let unorderedList = document.getElementsByTagName('ul')[0]
  unorderedList.style.backgroundColor = 'green'
};

//paintItGreen()

//Random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorChange() {

  let headingData = document.querySelector(h1)
  headingData.style.backgroundColor = getRandomColor()
}


/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/
const makeItClickable = function () {

  let headingData = document.querySelector(h1)

  headingData.setAttribute("onclick", "colorChange()")
};
/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/
const changeFooterText = function () {



};
/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/
const inputField = document.getElementById("input-field");
// ...
/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/
window.onload = function () {
  //
};
    /* EXERCISE 13
  Use HTML5 tags to divide the content of the page in a more semantic way.
  */