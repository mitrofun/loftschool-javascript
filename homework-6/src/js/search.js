let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let input = document.querySelector('.city__search');

function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        xhr.responseType = 'json';

        xhr.addEventListener('load', ()=> {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', ()=> {
            reject(xhr);
        });
        xhr.send();
    })
}

function sortCityByName(array) {

    return array.sort(function(a, b) {
        var x = a['name']; var y = b['name'];
        if (x < y) return -1;
        if (x > y) return 1;
        else return 0;
    });
}

function SearchCity(array, keyword){
    let result =[];

    if (keyword.length == 0 || keyword == ' ') {
        return result;
    }

    for (let i = 0; i < array.length; i++) {
            let re = new RegExp(keyword, "i");
            if (re.test(array[i]["name"])) {
                result.push(array[i]);
            }
    }
    return result;
}

function displayListOfCity(obj) {

    let listCity = document.querySelector('.cities__list');

    if (!listCity) {
        listCity = document.createElement('ul');
        let container = document.querySelector('.container');
        listCity.classList.add('cities__list');
        container.appendChild(listCity);
    } else {
        listCity.innerHTML = "";
    }

    for({name} of obj) {
        let el = document.createElement('li');
        el.classList.add('cities__item');
        el.innerText = name;
        listCity.appendChild(el);
    }
}

window.addEventListener("load", () => {
    sendAJAX(cityJSON).then(response => {

        sortCityByName(response);
        return response;

    }).then(response => {
        
        input.addEventListener("input", () =>{
            displayListOfCity(SearchCity(response, input.value));
        })

    })
});