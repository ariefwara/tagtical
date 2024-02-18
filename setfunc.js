
class Set {

    constructor(attributes = {}, segments = []) {
        this.attributes = attributes;
        this.segments = segments;
    }

    render(parameters){
        let renderedContent = '';
        if (this.segments && this.segments.length > 0) {
            this.segments.forEach(segment => {
                if (typeof segment === 'string') {
                    renderedContent += segment;
                } else if (segment instanceof Set) {
                    renderedContent += segment.render(parameters);
                }
            });
        }
        return renderedContent;
    }

}

class SetIf extends Set {
    constructor(attributes = {}, segments = []) {
        super(attributes, segments);
        this.condition = attributes.condition;
    }

    render(parameters) {
        if (new Function(...Object.keys(parameters), 'return ' + this.condition)(...Object.values(parameters))) {
            return super.render(parameters);
        }
        return '';
    }
}
class SetFor extends Set {
    constructor(attributes = {}, segments = []) {
        super(attributes, segments);
        this.loopOver = attributes.in;
        this.eachItem = attributes.each;
    }

    render(parameters) {
        let renderedContent = '';
        if (parameters[this.loopOver] && parameters[this.loopOver].length > 0) {
            parameters[this.loopOver].forEach((item) => {
                const tempParams = { ...parameters, [this.eachItem]: item };
                renderedContent += super.render(tempParams);
            });
        }
        return renderedContent;
    }
}

// Note: The Register object can include more than these two classes (SetIf, SetFor).
// Users can extend functionality by adding unlimited custom classes as needed.
const SetFunc = {
  'vessel': Set,
  'if': SetIf,
  'for': SetFor
};

module.exports = { SetFunc: SetFunc };
