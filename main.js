let daysItem = document.getElementById("days")
let hoursItem = document.getElementById("hours")
let minsItem = document.getElementById("min")
let secsItem = document.getElementById("sec")
let countDown = () => { 

    let futureDate = new Date("17 june 2024")
    let currentDate = new Date()
    let diff = futureDate - currentDate

    let day = Math.floor(diff/1000/60/60/24)
    
    let hour = Math.floor(diff/1000/60/60)%24
    let min = Math.floor(diff/1000/60)%60

       let sec = Math.floor(diff/1000)%60
    
       daysItem.innerHTML =  day
       hoursItem.innerHTML = hour
       minsItem.innerHTML = min
       secsItem.innerHTML = sec



 }


 countDown()
 setInterval(countDown,1000)