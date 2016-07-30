import { sendAJAX, sortCityByName, displayListOfCity , displayListOfCityByHandlebars, searchCity } from './modules/city'
import { timer } from './modules/time'

let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let input = document.querySelector('.city__search');
let button = document.querySelector('#getCityList');

if (!!button) {
    button.addEventListener("click", () => {
    sendAJAX(cityJSON).then(response => {

        sortCityByName(response);
        return response;

    }).then(response => {
        
        displayListOfCityByHandlebars(response)

    });
});
}


window.addEventListener("load", () => {
    sendAJAX(cityJSON).then(response => {

        sortCityByName(response);
        return response;

    }).then(response => {
        if (input) {
            input.addEventListener("input", () =>{
                
                displayListOfCityByHandlebars(searchCity(response, input.value));

            })
        }
    })
});

window.timer = timer;
// timer(3000).then((time) => console.log(`я вывелась через ${time/1000} сек.`));