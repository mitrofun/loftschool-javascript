import { sendAJAX, sortCityByName, displayListOfCity } from '../modules/city'

let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let button = document.querySelector('#getCityList');


button.addEventListener("click", () => {
    sendAJAX(cityJSON).then(response => {

        sortCityByName(response);
        return response;

    }).then(response => {

        displayListOfCity(response);

    });
});