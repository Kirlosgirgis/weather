let inputser= document.querySelector("#in-ser")
let btnFind= document.querySelector("#btn-Find")
let day1= document.querySelector("#day1")
let date1= document.querySelector("#date1")
let month1= document.querySelector("#month1")
let city1= document.querySelector("#city1")
let temp1= document.querySelector("#temp1")
let mood1= document.querySelector("#mood1")
let wind= document.querySelector("#wind")
let winddir= document.querySelector("#wind-dir")
let windpower= document.querySelector("#wind-power")
let tempmax2= document.querySelector("#temp-max2")
let tempmin2= document.querySelector("#temp-min2")
let nextmood2= document.querySelector("#nextmood2")
let nextday2= document.querySelector("#nextday2")
let tempmax3= document.querySelector("#temp-max3")
let tempmin3= document.querySelector("#temp-min3")
let nextmood3= document.querySelector("#nextmood3")
let nextday3= document.querySelector("#nextday3")

 async function getweatherdata(cityname) {
   let weatherResponse =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5e7e2b663bf34cb4a45134007240107&q=${cityname}&days=3`)
   let weatherdata = await weatherResponse.json()
   return weatherdata
}


function displayday1(data) {
    let todaydate= new Date()
    day1.innerHTML=todaydate.toLocaleDateString("en-US",{weekday:"long"})
    date1.innerHTML=todaydate.getDate()
    month1.innerHTML=todaydate.toLocaleDateString("en-US",{month:"long"})
    city1.innerHTML= data.location.name
    temp1.innerHTML= data.current.temp_c+"<sup>o</sup>C"
    mood1.innerHTML= data.current.condition.text
    windpower.innerHTML=data.current.humidity+"%"
    wind.innerHTML=data.current.wind_kph+"km/h"
    winddir.innerHTML=data.current.wind_dir
}
function displayday2(data) {
    let nextdaydate= new Date(data.forecast.forecastday[1].date)
    nextday2.innerHTML=nextdaydate.toLocaleDateString("en-US",{weekday:"long"})
    tempmax2.innerHTML= data.forecast.forecastday[1].day.maxtemp_c+"<sup>o</sup>C";
    tempmin2.innerHTML= data.forecast.forecastday[1].day.mintemp_c+"<sup>o</sup>C";
    nextmood2.innerHTML= data.forecast.forecastday[1].day.condition.text;
}
function displayday3(data) {
    let nextdaydate2= new Date(data.forecast.forecastday[2].date)
    nextday3.innerHTML=nextdaydate2.toLocaleDateString("en-US",{weekday:"long"})
    tempmax3.innerHTML= data.forecast.forecastday[2].day.maxtemp_c+"<sup>o</sup>C";
    tempmin3.innerHTML= data.forecast.forecastday[2].day.mintemp_c+"<sup>o</sup>C";
    nextmood3.innerHTML=data.forecast.forecastday[2].day.condition.text;
}


async function startApp(city="cairo") {
    let weatherdata = await getweatherdata(city)
    displayday1(weatherdata)
    displayday2(weatherdata)
    displayday3(weatherdata)

}
startApp()
inputser.addEventListener("input",function () {
    startApp(inputser.value)
})
btnFind.addEventListener("click",function(){
    startApp()
}
)





getweatherdata()












