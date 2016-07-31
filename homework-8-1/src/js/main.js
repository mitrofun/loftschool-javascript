import { sendAJAX, sortCity, displayListOfCityByHandlebars, searchCity } from './modules/city'


let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let input = document.querySelector('.city__search');
let button = document.querySelector('#getCityList');

if (!!button) {
    button.addEventListener("click", () => {
    sendAJAX(cityJSON).then(response => {

        sortCity(response);
        return response;

    },
    error => alert(`Rejected: ${error}`)
    ).then(response => {
        
        displayListOfCityByHandlebars(response)

    });
});
}


window.addEventListener("load", () => {
    sendAJAX(cityJSON).then(response => {

        sortCity(response);
        return response;

    },
    error => alert(`Rejected: ${error}`)
    ).then(response => {
        if (input) {
            input.addEventListener("input", () =>{
                
                displayListOfCityByHandlebars(searchCity(response, input.value));

            })
        }
    })
});