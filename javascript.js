function searching() {

    x = document.getElementById("nameCity").value;
    document.getElementById("city").innerHTML = x + " :";

const fetchWeather =
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=118aa3da3a47e88cef12f69cb6bdcf0b`);
fetchWeather.then(response => {
    return response.json();
}).then(results => {
  console.log(results);
  Celsius.innerHTML = results.main.temp;
  Conditions.innerHTML = results['weather'][0]['description'];
  Time.innerHTML = results.timezone;
});
}
let d = new Date();
let ufc_offset = d.getTimezoneOffset();
d.setMinutes(d.getMinutes() + ufc_offset);
console.log(d)