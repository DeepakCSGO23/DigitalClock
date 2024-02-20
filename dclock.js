const date=new Date()
//call getSeconds function which somehow gets the current second from the date object
let hour=date.getHours()
let minute=date.getMinutes()
let second=date.getSeconds()
let am_pm_flag=0
var am_pm
console.log(typeof minute)
console.log(date.getMonth())
var month,day
if(date.getMonth()==0){
    month="Jan"
}
else if(date.getMonth()==1){
    month="Feb"
}
else if(date.getMonth()==2){
    month="Mar"
}
else if(date.getMonth()==3){
    month="Apr"
}
else if(date.getMonth()==4){
    month="May"
}
else if(date.getMonth()==5){
    month="Jun"
}
else if(date.getMonth()==6){
    month="Jul"
}
else if(date.getMonth()==7){
    month="Aug"
}
else if(date.getMonth()==8){
    month="Sep"
}
else if(date.getMonth()==9){
    month="Oct"
}
else if(date.getMonth()==10){
    month="Nov"
}
else{
    month="Dec"
}
if(date.getDay()==1){
    day='Monday'
}
else if(date.getDay()==2){
    day='Tuesday'
}
else if(date.getDay()==3){
    day='Wednesday'
}
else if(date.getDay()==4){
    day='Thursday'
}
else if(date.getDay()==5){
    day='Friday'
}
else if(date.getDay()==6){
    day='Saturday'
}
else{
    day='Sunday'
}
console.log(date.getDay())
document.getElementById("info").innerHTML=`${day} ${month} ${date.getDate()}/${date.getFullYear()} `
setInterval(()=>{
    second++
    //reset second and increase minute
    if(second==60){
        second=0
        minute++;
    }
    //reset minute and increase hour
    if(minute==60){
        minute=0
        hour++;
    }
    //reset hour after 12 & increase flag count only at every 12 hours because after every 12 hours the AM becomes PM & vice-versa
    if(hour==12){
        hour=0
        am_pm_flag++;
    }
    if(am_pm_flag%2==0){
        am_pm='AM'
    }
    else{
        am_pm='PM'
    }
    const displayTime=document.getElementById("display")
    //add leading zero when the length of the string length is less than 2
    const h=hour.toString().padStart(2,'0')
    const s=second.toString().padStart(2,'0')
    const m=minute.toString().padStart(2,'0')
    displayTime.innerHTML=`${h}:${m}: ${s} ${am_pm}`
},1000)