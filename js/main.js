var p_time = document.getElementById("p_time");
var p_wind = document.getElementById("p_wind");
var p_temperature = document.getElementById("p_temperature");
var p_weather = document.getElementById("p_weather");
var icon = document.getElementById("icon");
function CallAPI() {
    var weather_request = new XMLHttpRequest();
    weather_request.open('GET', 'https://goweather.herokuapp.com/weather/Lebane', true);
    weather_request.onload = function () {
        var requested_data = JSON.parse(this.response);
        var temperature = requested_data["temperature"];
        var wind = requested_data["wind"];
        var description = requested_data["description"];
        var current_time = new Date();
        var hours = current_time.getHours();
        if (hours < 10) {
            hours = "0" + hours.toString();
        }
        var minutes = current_time.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes.toString();
        }
        ;
        var time = hours + ":" + minutes;
        p_time.innerHTML = time.toString();
        p_wind.innerHTML = wind.toString();
        p_temperature.innerHTML = temperature.toString();
        p_weather.innerHTML = description.toString();
        if (hours > 5 && hours < 20) {
        }
    };
    weather_request.send();
}
CallAPI(); //Call function on site load up.
setInterval(CallAPI, 60000); //Function will be called every minute.
// <i class="fas fa-sun"></i> SUNNY
// <i class="fas fa-cloud-sun"></i> SUNNY + CLOUD
// <i class="fas fa-cloud-sun-rain"></i> SUNNY + RAINING
// <i class="fas fa-cloud"></i> CLOUD
// <i class="fas fa-cloud-showers-heavy"></i> RAINING
// <i class="fas fa-moon"></i> MOON
// <i class="fas fa-cloud-moon"></i> MOON + CLOUD 
// <i class="fas fa-cloud-moon-rain"></i> MOON + RAINING
// <i class="fas fa-smog"></i> FOGGY
// <i class="fas fa-snowflake"></i> SNOWING
// <i class="fas fa-bolt"></i> STORM
// <i class="fas fa-wind"></i> WINDY
// Night after 8 PM
// Day after 5 AM
// Partialy Cloudy, Cloudy, Sunny, Clear
