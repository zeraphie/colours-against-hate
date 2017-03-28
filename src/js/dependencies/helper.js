var helpers = {};

helpers.append = function(tag, text, appendTo){
    var el = document.createElement(tag);
    el.appendChild(document.createTextNode(text));
    return appendTo.appendChild(el);
};
