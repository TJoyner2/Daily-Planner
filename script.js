//  GIVEN I am using a daily planner to create a schedule
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

let date = dayjs().format('dddd, MMMM DD, YYYY')
//console.log(date)
let currentDay = document.getElementById('currentDay');
let paragraph = document.createElement('p')
paragraph.innerText = date
currentDay.appendChild(paragraph)

$(function () {
for (let i=0; i<timeArray.length; i++){
    const timeArray = document.querySelectorAll('.time-block')
    console.log (timeArray)
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

    




});