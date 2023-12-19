const apiKey = 'c3869dd8fbb6b6898f771cc67763a388';
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector('.search input')
const searchBnt = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weatherIcon')
async function checkWeather(city){
const res =  await fetch(ApiUrl + city + `&appid=${apiKey}`)
let data  = await res.json()
allData(data)
console.log(data);
} 
const allData = (data)=>{
    document.querySelector('.city').innerHTML = data?.name;
    document.querySelector('.temp').innerHTML = Math.round(data?.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data?.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data?.wind.speed + ' km/h';
    document.querySelector('.wind').innerHTML = data?.wind.speed + ' km/h';
if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = 'images/clouds.png'
}
else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = 'images/clear.png'
}
else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = 'images/rain.png'
}
else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = 'images/drizzel.png'
}
else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = 'images/mist.png'
}

} 
searchBnt.addEventListener('click', ()=>{
    if(searchBox.value > 0){
        checkWeather(searchBox.value)
    }
    else{
        alert('Please write City name in the Input')
    } 
})
searchBox.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter' && searchBox.value > 0){
        checkWeather(searchBox.value)
    }
    else{
        alert('Please write City name in the Input')
    }    
})


