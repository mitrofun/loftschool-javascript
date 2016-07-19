require([

    'js/modules/constructor.js',
    'js/modules/destructor.js',
    'js/modules/counter.js',

],
    function(adder, remove, scanner){

        window.prepend = adder.prepend;
        window.deleteTextNodes = remove.deleteTextNodes;
        window.scanDOM = scanner.scanDOM;

        var listFirst = document.querySelector('.first__objects');
        var listSecond = document.querySelector('.second__objects');
        var listSecondRecursion = document.querySelector('.second-recursion__objects');
        
        var newLi = document.createElement('li');
        newLi.innerHTML = 'New element';
        
        adder.prepend(listFirst, newLi);

        remove.deleteTextNodes(listSecond);
        remove.deleteTextNodes(listSecondRecursion, true);

        scanner.scanDOM(document);
        scanner.scanDOM(listFirst);
    }
);