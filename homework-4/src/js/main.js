require([

    'js/modules/constructor.js',
    'js/modules/destructor.js',

],
    function(add, del){
        var listFirst = document.querySelector('.first__objects');
        var listSecond = document.querySelector('.second__objects');
        var listSecondRecursion = document.querySelector('.second-recursion__objects');
        var newLi = document.createElement('li');

        newLi.innerHTML = 'New element';
        add.prepend(listFirst, newLi);

        del.deleteTextNodes(listSecond);
        del.deleteTextNodes(listSecondRecursion, true);
    }
);