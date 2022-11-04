locationJs = document.getElementById('location-name');
let city
const locationFind = (e) =>{
    if(e.key=='Enter'){
        city = locationJs.value
        // fetchFunction()
        fetchForecastFunction()

    }
}
const searchLocationFind = () =>{
    city = locationJs.value
    // fetchFunction()
    fetchForecastFunction()
}

const fetchForecastFunction =() =>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7584a6c968ef5512c04ae1156cf3f701&units=metric`)
    .then(response => response.json())
    .then(json =>{
        inputForecastFunction(json)
    })
}

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}
inputHtml = document.getElementById('input-section')

const inputForecastFunction=(weather)=>{
    let forecastResult =[]
    for(let i=0;i<5;i++){
        forecastResult[i] ={
            Date:       new Date().getDate()+i,
            Month:      new Date().getMonth()+1,
            city:       weather.city.name,
            sunrise:    new Date(weather.city.sunrise).toLocaleTimeString(),
            sunset:     new Date(weather.city.sunset).toLocaleTimeString(),
            tempMax:    Math.round(weather.list[i].main.temp_min),
            tempMin:    Math.round(weather.list[i].main.temp_max),
            humidity:   Math.round(weather.list[i].main.humidity),
            weatherToday:    weather.list[i].weather[0].main,
            icon:       `http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`,
            wind:       Math.round(weather.list[i].wind.speed),
            windDeg:    weather.list[i].wind.deg,
        }
    }
   
    let mainDivJs = document.createElement('div');
        mainDivJs.classList.add('mainDivInput');

    forecastResult.forEach(forecastResult=>{
        let divJs = document.createElement('div');
        divJs.classList.add('divInput');
        let imgJs = document.createElement('img');
        imgJs.classList.add('imgInput');
        let headingJs = document.createElement('h3');
        headingJs.classList.add('h3Input');
        let paraJs = document.createElement('p');
        paraJs.classList.add('pInput');
        let paraJsClimate = document.createElement('p');
        paraJsClimate.classList.add('pCInput');
        let paraJsPersep = document.createElement('p');
        paraJsPersep.classList.add('ppInput');

        headingJs.innerHTML = `${forecastResult.city}<br>${forecastResult.Date}/${forecastResult.Month}`;

        imgJs.src = forecastResult.icon;
        paraJsClimate.innerHTML = `${forecastResult.weatherToday}`;
        paraJs.innerHTML = `${forecastResult.tempMin} &#176;<b> ${forecastResult.tempMax}&#176;</b>`;
        
        paraJsPersep.innerHTML = ` <i class="fa-solid fa-droplet"></i> ${forecastResult.humidity} % <i class="fa-solid fa-wind windp"></i> ${forecastResult.wind}km/h`

        divJs.appendChild(headingJs)
        divJs.appendChild(imgJs)
        divJs.appendChild( paraJsClimate)
        divJs.appendChild(paraJs)
        divJs.appendChild(paraJsPersep)
        mainDivJs.appendChild(divJs)
       
    })

inputHtml.appendChild(mainDivJs)

    // document.body.insertAdjacentHTML("beforeend", `<img src=${weatherResult.icon}>`)
//     console.log(weatherResult)
// console.log(weatherResult.icon)

}
locationJs.addEventListener('keypress',locationFind)

// const fetchFunction =() =>{
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7584a6c968ef5512c04ae1156cf3f701&units=metric`)
//     .then(response => response.json())
//     .then(json =>{
//     // inputHtmlFunction(json)
//     })
// }
// const inputHtmlFunction = (weather) =>{
    
    
//     let icon = {
//         Clear:'http://openweathermap.org/img/wn/01d@2x.png',
//         Clouds  :  'http://openweathermap.org/img/wn/04d@2x.png',
//         Smoke   : 'http://openweathermap.org/img/wn/01d@2x.png' ,
//         Haze    : 'http://openweathermap.org/img/wn/01d@2x.png' ,
//         Rain    : 'http://openweathermap.org/img/wn/09d@2x.png' ,
//         Thunderstorm:'http://openweathermap.org/img/wn/11d@2x.png' ,
//         Snow    :'http://openweathermap.org/img/wn/13d@2x.png',
//         Mist    :'http://openweathermap.org/img/wn/50d@2x.png',
//         Fog     :'http://openweathermap.org/img/wn/50d@2x.png',
//         Tornnado:'http://openweathermap.org/img/wn/50d@2x.png',
//     }
//     let weatherResult ={
//         Date : 'Today',
//         city : weather.name,
//         tempMax : Math.round(weather.main.temp_max),
//         tempMin :  Math.round(weather.main.temp_min),
//         wind : Math.round( weather.wind.speed),
//         weatherToday :weather.weather[0].main,
//         humidity : Math.round( weather.main.humidity),
//         sunrise : new Date(weather.sys.sunrise).toLocaleTimeString(),
//         sunset : new Date(weather.sys.sunset).toLocaleTimeString(),
//         icon : icon[weather.weather[0].main]
//     }
// }
