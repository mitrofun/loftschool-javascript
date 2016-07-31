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

function CityToSortArray(array) {
    let newArr = array.map(function(item){
        return item.name
    })
    .sort();
    // console.log(newArr);
    return newArr

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
            if (re.test(array[i])) {
                result.push(array[i]);
            }
    }

    if (keyword.length > 0 && !result.length) {
        result = ['Not found'];
    }

    return result;
}

export { sendAJAX , CityToSortArray, searchCity, displayListOfCityByHandlebars }