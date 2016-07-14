let arrFunc = require('./modules/functions');
let deepEqual = require('./modules/objects');

let array = [1, 2, 3, 4, 5, 6];

arrFunc.forEach(array, item => console.log(item));
//1
//2
//3
//4
//5
//6

console.log(arrFunc.filter(array, item => item > 4)); // [ 5, 6 ]

console.log(arrFunc.map(array, item => item*item)); // [ 1, 4, 9, 16, 25, 36 ]

console.log(arrFunc.slice(array, 0)); // [ 1, 2, 3, 4, 5, 6 ]

console.log(arrFunc.reduce(array, function(a) {
  return a + a;
})); // 32

console.log(arrFunc.splice(array, 0, 3)); // [ 1, 2, 3 ]
console.log(array); // [ 4, 5, 6 ]

console.log(arrFunc.splice(array, 0, 3, 100, 200, 300, 400)); // [ 4, 5, 6 ]
console.log(array); // [ 100, 200, 300, 400 ]


let objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
};

let objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true