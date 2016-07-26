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

function displayListOfCity(obj) {

    let listCity = document.querySelector('.city__list');

    if (!listCity) {
        listCity = document.createElement('ul');
        let container = document.querySelector('.panel__body');
        listCity.classList.add('city__list');
        container.appendChild(listCity);
    } else {
        listCity.innerHTML = "";
    }

    for({name} of obj) {
        let el = document.createElement('li');
        el.classList.add('city__item');
        el.innerText = name;
        listCity.appendChild(el);
    }
}

function searchCity(array, keyword){

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

    if (keyword.length > 0 && !result.length) {
        result = [{name:'Not found'}];
    }

    return result;
}

export { sendAJAX , sortCityByName, displayListOfCity, searchCity }