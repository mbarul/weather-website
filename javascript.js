function searching() {

    x = document.getElementById("nameCity").value;
    document.getElementById("city").innerHTML = x + " :";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=118aa3da3a47e88cef12f69cb6bdcf0b`).then(response =>
    { return response.json(); }).then(results => {
        console.log(results);

        Celsius.innerHTML = (Math.round(((results.main.temp - 273.15) * 100)) / 100) ;

        var offset = new Date().getTimezoneOffset();
        console.log(offset);
    });

    return false;
}