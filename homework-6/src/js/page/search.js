import { sendAJAX, sortCityByName, displayListOfCity , searchCity } from '../modules/city'

let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let input = document.querySelector('.city__search');

window.addEventListener("load", () => {
    sendAJAX(cityJSON).then(response => {

        sortCityByName(response);
        return response;

    }).then(response => {
        
        input.addEventListener("input", () =>{
            displayListOfCity(searchCity(response, input.value));
        })

    })
});