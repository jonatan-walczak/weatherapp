const button = document.querySelector('.submit');
const image = document.querySelector('.image img')
const api_key = `14d887d852effc70a1b85f409cfecc39`;

function weather_engine(){
    const search = document.querySelector('.search');
    const city = search.value;
    if(search.value === '')return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(response => response.json())
    .then(json => {
        const temperature = document.querySelector('.temperature-box .temperature');
        const type = document.querySelector('.type');
        const humidity = document.querySelector('.values');
        const wind_speed = document.querySelector('.wind-speed');
        const temp_scale = document.querySelector('.temperature-scale');
        if(json.cod == '404'){
            image.src = 'images/404.png';
            temperature.innerHTML = `<p>Wrong city name</p>`;
        }
        switch(json.weather[0].main){
            case 'Thunderstorm':
                image.src = 'images/thunderstorm.png';
                break;
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Drizzle':
                    image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
            default:
                image.src = '';
        }

        temperature.innerHTML = `<p>${parseInt(json.main.temp-273.15)}</p>`;
        temp_scale.innerHTML = `°C`;
        type.innerHTML = `<p>${json.weather[0].main}</p>`
        humidity.innerHTML = `<div><i class="fa-solid fa-water"></i><p>${json.main.humidity}%</p></div><p>humidity</p>`;
        wind_speed.innerHTML = `<div><i class="fa-solid fa-wind"></i><p>${json.wind.speed}</p></div><p>wind speed</p>`;
    })
}

button.addEventListener('click', () =>{
    weather_engine();
})

document.addEventListener("keydown", e =>{
    if(e.key.toLowerCase() == 'enter') weather_engine();
})