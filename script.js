const hoursDisplay= document.getElementById("timeDisplay")
const amPmDisplay= document.getElementById("AmPmDisplay")
const changeTimeDisplay= document.getElementById("button")
const longHand= document.getElementById("secondsHand")
const mediumHand= document.getElementById("minutesHand")
const shortHand= document.getElementById("hoursHand")

let date= ""
let hours= ""
let minutes= ""
let seconds= ""
let amPm= ""
let hoursModifier= 0
let degreeModifier=0

const DisplayTime = ()=>{
    
    date =new Date()
    hours= date.getHours() <10? `0${date.getHours()}`: date.getHours() >12?`${date.getHours()-hoursModifier}`:`${date.getHours()}`
    minutes= date.getMinutes() <10? `0${date.getMinutes()}`:`${date.getMinutes()}`
    seconds= date.getSeconds() <10? `0${date.getSeconds()}`:`${date.getSeconds()}`
    amPm = date.getHours() <10? "AM" : "PM"
    hoursDisplay.innerText= `${hours}:${minutes}:${seconds}`
    amPmDisplay.innerText = amPm
    
    degreeModifier = minutes/2

    const hoursDegrees= 90 + (hours* 30)+ degreeModifier
    const minutesDegrees= 90 + (minutes* 6) 
    const secondsDegrees= 90 + (seconds* 6)


    longHand.style.transform =`rotate(${secondsDegrees}deg)`
    mediumHand.style.transform =`rotate(${minutesDegrees}deg)`
    shortHand.style.transform =`rotate(${hoursDegrees}deg)`

}

const change24h = ()=>{
    
    if( changeTimeDisplay.innerText== "24h"){
        hoursModifier= 12
        amPmDisplay.classList.remove("hidden")
        changeTimeDisplay.innerText= "12h"
    }else {
        hoursModifier= 0
        amPmDisplay.classList.add("hidden")
        changeTimeDisplay.innerText= "24h"
    }
    
}

setInterval(DisplayTime, 1000);
changeTimeDisplay.addEventListener("click", change24h)
