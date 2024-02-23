const { Window, HTMLElement } = require('happy-dom');
const { v4: uuidv4 } = require('uuid');

const window = new Window();
const document = window.document;

class ARIf extends HTMLElement {
    constructor() {
        super();
        this.originalContent = '';
        this.condition = false;
    }

    static get observedAttributes() {
        return ['condition'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'condition') this.condition = new Function(`return ${newValue}`)(), this.render();
    }

    connectedCallback() {
        this.originalContent = this.originalContent || this.innerHTML;
        this.render();
    }

    render() {
        this.innerHTML = this.condition ? this.originalContent : '';
    }
}

class ARFor extends HTMLElement {
    constructor() {
        super();
        this.each = '';
        this.in = [];
    }

    static get observedAttributes() {
        return ['each', 'in'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = name === 'in' ? JSON.parse(newValue) || [] : newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.each && this.in.length ? this.in.map(item => {
            const itemElement = document.createElement(this.each);
            Object.entries(item).forEach(([key, value]) => itemElement.setAttribute(key, value));
            return itemElement.outerHTML;
        }).join('') : '';
    }
}

window.customElements.define('ar-if', ARIf);
window.customElements.define('ar-for', ARFor);

class Tagtical {

    static render(htmlString){
        const uniqueId = uuidv4();
        const div = document.createElement('div');
        div.id = uniqueId;
        div.innerHTML = htmlString;
        document.body.appendChild(div);
        return document.getElementById(uniqueId).outerHTML;
    }

}

module.exports = { Tagtical };
