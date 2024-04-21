setInterval(function () {
    //SouthAfrica
    let countryElements = document.querySelector("#Amsterdam");

   if(countryElements){
    let DateElements = document.querySelector(".date");
    let TimeElements = document.querySelector(".time");
    let Time = moment().tz("Europe/Amsterdam");


    DateElements.innerHTML = Time.format("MMMM Do YYYY");
    TimeElements.innerHTML = `
    ${Time.format('h:mm:ss')}
    <small>${Time.format("A")}</small>
    `;
   }
}, 1000)

setInterval(function () {
    //New York
    let Elements = document.querySelector("#New-York");
   if (Elements) {
    let DateElements = Elements.querySelector(".date");
    let TimeElements = Elements.querySelector(".time");
    let Time = moment().tz("America/New_York");


    DateElements.innerHTML = Time.format("MMMM Do YYYY");

    TimeElements.innerHTML = `${Time.format('h:mm:ss')}
<small>${Time.format("A")}</small>`;
   }
}, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess()
    }
    let cityName = cityTimeZone.replace('_', " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
        <div class="Date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All cities</a>
    `;
}

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);