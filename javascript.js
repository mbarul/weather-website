function searching() {

    x = document.getElementById("nameCity").value;
    document.getElementById("city").innerHTML = x + " :";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=118aa3da3a47e88cef12f69cb6bdcf0b`).then(response => {
         return response.json(); }).then(results => {
        console.log(results);
        //temp
        Celsius.innerHTML = (Math.round(((results.main.temp - 273.15) * 100)) / 100);
        //conditions
        Conditions.innerHTML = results['weather'][0]['description'];
        //date
        var d = new Date();
        var UTC = d.getTimezoneOffset()*60;
        d.setSeconds(results.timezone + UTC);
        document.getElementById("Time").innerHTML = d.getHours() + '.' + d.getMinutes() + ' | ' + d.getDate() + '.' + d.getMonth()+ '.' + d.getFullYear();
    });


};

