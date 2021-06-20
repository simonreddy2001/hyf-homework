const input = document.getElementById('city_name');
const button = document.getElementById('btn');
const msg = document.getElementById('errorMsg')

button.addEventListener('click', () => {
    if (input.value) {
        const cityName = input.value.toLowerCase();
        url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=19a22c19916855a97938c4084c52be58';
        fetch(url)
            .then(response => response.json())
            //.then(data=>console.log(data))
            .then(data => renderCityWeatherInfo(data));
    } else {
        msg.innerHTML = 'Please enter the city';
        return false;
    }
});

function renderCityWeatherInfo(data) {
    msg.innerHTML = " "
    input.value = ""
    const location = document.getElementById('location');
    location.innerHTML = data.name;

    const weatherIcon = document.getElementById('weather_icon');
    weatherIcon.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

    const temp = document.getElementById('temperature');
    temp.innerHTML = Math.floor(data.main.temp - 273) + '&#176' + 'C';

    const description = document.getElementById('desc');
    description.innerHTML = data.weather[0].description;

    const wind = document.getElementById('wind_speed');
    wind.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s';

    const high = document.getElementById('max_temp');
    high.innerHTML = 'High: ' + Math.floor(data.main.temp_max - 273) + '&#176' + 'C';

    const Low = document.getElementById('min_temp');
    Low.innerHTML = 'Low: ' + Math.floor(data.main.temp_min - 273) + '&#176' + 'C';

    const humidity = document.getElementById('humidity');
    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';

    const clouds = document.getElementById('clouds');
    clouds.innerHTML = 'Clouds: ' + data.clouds.all + '%';

    const sunrise = document.getElementById('sunrise');
    sunrise.innerHTML = 'Sunrise:' + new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    const sunset = document.getElementById('sunset');
    sunset.innerHTML = 'Sunset:' + new Date(data.sys.sunset * 1000).toLocaleTimeString();

    //Map showing where the city is located
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    //console.log(lat)
    //console.log(lng)
    function initMap(lat, lng) {
        const coords = new google.maps.LatLng(lat, lng);
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: coords,
        });
    }
    initMap(lat, lng);
    document.querySelector('#display_data').style.visibility = 'visible';
    document.getElementById('map').innerHTML = `<div style="width: 100%"><iframe width="650" height="500" src="https://maps.google.com/maps?q=${data.name}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
}


//Getting current position(optional)
const btn2 = document.querySelector('#geoLoc');

btn2.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myPosition);
    } else {
        alert = "browser doesn't support";
    }
});

function myPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    getWeather(lat, long);
}

function getWeather(lat, long) {
    const api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=19a22c19916855a97938c4084c52be58';
    //console.log (api);
    fetch(api).then(response => response.json())
        .then(data => {
            data.name;//output's only  current position location name
            //Rendering current position weather
            url = 'https://api.openweathermap.org/data/2.5/weather?q=' + data.name + '&appid=19a22c19916855a97938c4084c52be58';
            fetch(url)
                .then(response => response.json())
                //.then(data=>console.log(data))
                .then(response => renderCityWeatherInfo(response));
        });
}

navigator.geolocation.getCurrentPosition(function (p) {
    localStorage.setItem("lat", p.coords.latitude);
    localStorage.setItem("long", p.coords.longitude)
}, function (e) { console.log(e) })

function myPositionFromLocal() {
    const latL = localStorage.lat;
    const longL = localStorage.long;
    getWeather(latL, longL);
}



// api="19a22c19916855a97938c4084c52be58"