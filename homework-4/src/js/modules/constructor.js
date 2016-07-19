define(["js/modules/constructor.js"], function(){

    function prepend (container, newElement) {
         container.insertBefore(newElement, container.firstElementChild)
    }
    
    return {
        prepend : prepend
    };

});
