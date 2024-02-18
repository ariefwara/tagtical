const { SetFunc } = require('./setfunc.js');

class Template {

    constructor(htmlText) {
        this.vessel = this.#parse(htmlText);
    }

    render(parameter){
        return this.vessel.render(parameter);
    }

    #parse(htmlText) {
        const regex = /<set:([a-zA-Z]+) (.*?)>(.*?)<\/set:\1>/gs;
        const segments = [];
        let cursor = 0;
        let match;

        while ((match = regex.exec(htmlText)) !== null) {
            const [fullMatch, tagName, attributesString, content] = match;
            const attributes = this.#attrs(attributesString);

            // Add the string before the match
            if (match.index > cursor) {
                segments.push(htmlText.substring(cursor, match.index));
            }

            // Process the tag
            const TagClass = SetFunc[tagName];
            if (TagClass) {
                // Corrected to parse the content of the current match
                const childSegments = this.#parse(content); // Recursively parse inner content
                segments.push(new TagClass(attributes, childSegments));
            } else {
                console.error(`Unknown tag: ${tagName}`);
            }

            cursor = regex.lastIndex;
        }

        // Add the remaining string after the last match
        if (cursor < htmlText.length) {
            segments.push(htmlText.substring(cursor));
        }

        return new SetFunc['vessel']({}, segments);
    }

    #attrs(attributesString) {
        const attributes = {};
        attributesString.split(' ').forEach(attr => {
            const [key, value] = attr.split('=');
            attributes[key] = value.replace(/"/g, '');
        });
        return attributes;
    }
}

module.exports = Template;
