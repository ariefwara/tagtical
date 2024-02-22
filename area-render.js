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
        if (name === 'condition') {
            this.condition = new Function(`return ${newValue}`)();
            this.render();
        }
    }

    connectedCallback() {
        if (!this.originalContent) {
            this.originalContent = this.innerHTML;
        }
        this.render();
    }

    render() {
        if (this.condition) {
            this.innerHTML = this.originalContent;
        } else {
            this.innerHTML = '';
        }
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
        if (name === 'each') {
            this.each = newValue;
        } else if (name === 'in') {
            try {
                this.in = JSON.parse(newValue);
            } catch (e) {
                console.error('Error parsing JSON for "in" attribute', e);
                this.in = [];
            }
        }
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.each || !this.in.length) {
            this.innerHTML = '';
            return;
        }
        const items = this.in.map(item => {
            const itemElement = document.createElement(this.each);
            for (const [key, value] of Object.entries(item)) {
                itemElement.setAttribute(key, value);
            }
            return itemElement.outerHTML;
        }).join('');
        this.innerHTML = items;
    }
}

module.exports = { ARIf, ARFor };


