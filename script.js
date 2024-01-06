//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
const timeArray = document.querySelectorAll('.time-block')

for (let i=0; i<timeArray.length; i++){
    const hour = parseInt(timeArray[i].id.split('-')[1])
    console.log (hour)
    const now = dayjs().hour()

console.log (now)
    if(now === hour){
        timeArray[i].setAttribute('class', 'row time block present')
    }
    if(now > hour){
        timeArray[i].setAttribute('class', 'row time-block past')
    }
    if(now < hour){
        timeArray[i].setAttribute('class', 'row time-block future')
    }
    const text = localstorage.getItem(timeArray[i].id)
    if(text){
       console.log(text)
       timeArray[i].children[1].value=text
    }
}
const clickHandler = (event) => {
    const text = event.target.previousElementSibling.value
    const parentId = event.target.parentNode.id
    console.log (text)
    console.log (parentID)
    localStorage.setItem (parentID, text)
}

const button = document.querySelectorAll('button')
const textInput = document.querySelectorAll('.description')

for (let i=0; i<button.length; i++){
    button[i].addEventListener('click', clickHandler)
}
var currentHour = dayjs().hour();
let date = dayjs().format('DD, MMMM, YYYY');
console.log(date)
let currentDay = document.querySelector ('#currentDay');

const paragraph = document.createElement('p');
paragraph.innerText = date;
currentDay.appendChild(paragraph);