define(["js/modules/destructor.js"], function(){

    function deleteTextNodes(element, text) {
        if (element.childNodes.length > 1) {

            if (text) {console.log('before del #text: ', element.childNodes)}

            for (var i = element.childNodes.length - 1; i >= 0 ;i--) {
                
                var el = element.childNodes[i];

                if (el.nodeType == 3) {
                    element.removeChild(el);
                } else if (el.childNodes.length) {
                        deleteTextNodes(el, text)
                }
            }

         if (text) {console.log('after del #text: ', element.childNodes)}

        }
    }

    return {
        deleteTextNodes : deleteTextNodes
    };

});
