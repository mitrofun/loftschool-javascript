let cityJSON = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let button = document.querySelector('.cities__btn');
let city =[];

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


window.addEventListener("load", () => {
    sendAJAX(cityJSON).then(response => {
       
        city = response;
        console.log(city);
    })
});


