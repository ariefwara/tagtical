const { Window, HTMLElement } = require('happy-dom');
const { v4: uuidv4 } = require('uuid');

const window = new Window();
const document = window.document;

const contextMap = {};
class ARIf extends HTMLElement {
    constructor() {
        super();
        this.originalContent = '';
        this.condition = '';
    }

    static get observedAttributes() {
        return ['condition'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'condition') {
            this.condition = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.originalContent = this.originalContent || this.innerHTML;
        this.render();
    }

    render() {
        const rootElement = this.closest('.root');
        const context = contextMap[rootElement.id];
       
        const result = new Function(...Object.keys(context), 'return ' + this.condition)(...Object.values(context));
        this.innerHTML = result ? this.originalContent : '';
    }
}

class ARFor extends HTMLElement {
    constructor() {
        super();
        this.each = '';
        this.in = [];
        this.originalContent = '';
    }

    static get observedAttributes() {
        return ['each', 'in'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = name === 'in' ? JSON.parse(newValue) || [] : newValue;
        this.render();
    }

    connectedCallback() {
        this.originalContent = this.originalContent || this.innerHTML;
        this.render();
    }

    render() {
        const rootElement = this.closest('.root');
        const context = contextMap[rootElement.id];
        const items = context[this.in];
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'volatile';
            context[this.each] = item;
            div.innerHTML = this.originalContent;
            this.appendChild(div);
        });
    }
}

class ARView extends HTMLElement {
    constructor() {
        super();
        this.var = '';
    }

    static get observedAttributes() {
        return ['var'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'var') {
            this.var = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const value = this.getAttribute('var');
        const rootElement = this.closest('.root');
        const context = contextMap[rootElement.id];
       
        const result = new Function(...Object.keys(context), 'return ' + value)(...Object.values(context));
        this.innerHTML = result;
    }
}


window.customElements.define('ar-if', ARIf);
window.customElements.define('ar-for', ARFor);
window.customElements.define('ar-view', ARView);

class Tagtical {

    static render(htmlString, parameters){
        const uniqueId = uuidv4();
        contextMap[uniqueId] = parameters;
        const div = document.createElement('div');
        div.id = uniqueId;
        div.className = 'root';
        div.innerHTML = htmlString;
        document.body.appendChild(div);

        const customElements = div.querySelectorAll('ar-if, ar-view, ar-for', '.volatile');
        customElements.forEach(el => { el.outerHTML = el.innerHTML; });

        return document.getElementById(uniqueId).innerHTML;
    }

}

module.exports = { Tagtical };
