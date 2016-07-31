// import { Handlebars } from '../../../node_modules/handlebars/dist/handlebars'

function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", url);
        xhr.responseType = 'json';
        
        xhr.addEventListener('load', ()=> {

            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                let error = new Error(xhr.statusText);
                error.code = xhr.status;
                reject(error);
            }

        });

        xhr.addEventListener('error', ()=> {
            reject(new Error("Network Error"));
        });
        xhr.send();
    })
}

function sortCity(array) {
    array.sort(function(a, b) {
        var x = a['name']; var y = b['name'];
        if (x < y) return -1;
        if (x > y) return 1;
        else return 0;
    });
}

function displayListOfCityByHandlebars(data) {

    let cityList = document.querySelector('#cityList');

    let source = document.getElementById('city-template').innerHTML;
    let template = Handlebars.compile(source);
    

    cityList.innerHTML = template(data);
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

export { sendAJAX , sortCity, searchCity, displayListOfCityByHandlebars }