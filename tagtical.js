const { ARIf, ARFor } = require('./area-render.js');
const { Window } = require('happy-dom');

const window = new Window();
const document = window.document;

window.customElements.define('ar-if', ARIf);
window.customElements.define('ar-for', ARFor);

class Tagtical {

    static render(htmlString){
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.innerHTML;
    }
    
}