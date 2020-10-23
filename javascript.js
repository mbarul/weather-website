 

function searching() {
        
        let x = document.getElementById("nameCity").value;
        document.getElementById("city").innerHTML = x + " :";
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=118aa3da3a47e88cef12f69cb6bdcf0b`).then(response => {
         return response.json(); }).then(results => {
             console.log(results);
                 //Error check
             if (results.cod === '404') {
                 document.getElementById('error').style.visibility = 'visible';
                 document.getElementById('Conditions').style.visibility = 'hidden';
                 document.getElementById('cel').style.visibility = 'hidden';
                 document.getElementById('Time').style.visibility = 'hidden';
             } else {
                 init(results);
                 //temp
                 Celsius.innerHTML = (Math.round(((results.main.temp - 273.15) * 100)) / 100);
                 //conditions
                 Conditions.innerHTML = results['weather'][0]['main'];
                 //dates
                 let d = new Date();
                 let UTC = d.getTimezoneOffset() * 60;
                 d.setSeconds(results.timezone + UTC);
                 document.getElementById("Time").innerHTML = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' | ' + d.toLocaleDateString();
             }

    });
    
}
function init(resultsFromServer) {
    
    let weather = resultsFromServer.weather[0].main;
    switch (weather) {
        case 'Clear':
            document.getElementById('sun').style.visibility = 'visible';
            break;
        case 'Clouds':
            break;
        case 'Rain':
            document.getElementById('rain').style.visibility = 'visible';
              break;
        case 'Thunderstorm':
            document.getElementById('storm').style.visibility = 'visible';
             break;
        case 'Snow':
            document.getElementById('snow').style.visibility = 'visible';
            document.getElementById('snow2').style.visibility = 'visible';
            document.getElementById('snow3').style.visibility = 'visible';
            break;
    }

}

