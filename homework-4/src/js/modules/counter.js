define(["js/modules/counter.js"], function(){

    var counter = {
        tags: {},
        class: {},
        texts: {}
    };

    function add(dictionary, key) {

        if (dictionary[key]) {
            dictionary[key] += 1;
        } else {
            dictionary[key] = 1;
        }
    }

    function addTag(el) {
        if (el.nodeType == 1) {
            add(counter.tags, el.tagName.toLocaleLowerCase())
        }
    }

    function addText(el) {
        if (el.nodeType == 3) {
            add(counter.texts, 'text')
        }
    }

    function addClass(el) {
        if (el.classList) {

            for (var i = 0; i< el.classList.length; i ++) {
                add(counter.class, el.classList[i])
            }
        }
    }

    function countElement(el) {

        addTag(el);
        addText(el);
        addClass(el);

    }

    function reportToConsole(obj, element) {

        console.log('======= Отчет по',element.nodeName,'=======');
        for (var key in obj.tags) {
            console.log('Тэгов', key,':', obj.tags[key])
        }
        for (var key in obj.texts) {
            console.log('Текстовых узлов:', obj.texts[key])
        }
        for (var key in obj.class) {
            console.log('Элементов с классом',key,':', obj.class[key])
        }
        console.log('======= Отчет по', element.nodeName,'окончен =======');
    }


    function scan(element) {

       for (var i = element.childNodes.length - 1; i >= 0; i--) {

           var el = element.childNodes[i];

           countElement(el);

           if (el.childNodes.length) {
               scan(el);
           }
       }

   }

    function scanDOM(element) {
        scan(element);
        reportToConsole(counter, element);

        counter = {
            tags: {},
            class: {},
            texts: {}
        };
    }


    return {
        scanDOM : scanDOM
    };

});
