function timer(time) {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {return resolve(time)}, time);
    })
}

// timer(3000).then((time) => console.log(`я вывелась через ${time/1000} сек.`));

export {timer}
