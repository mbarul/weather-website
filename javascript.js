function searching() {

    x = document.getElementById("nameCity").value;
    document.getElementById("city").innerHTML = x + " :";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=118aa3da3a47e88cef12f69cb6bdcf0b`).then(response => {return response.json();}).then( results => console.log(results));
    return false;
}
