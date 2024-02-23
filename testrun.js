const { Tagtical } = require('./tagtical.js');


const parameters = {
    var1: 123,
    var2: 123
};

const htmlInput = `
  <ar-view var="var1 + var2"/>
`;
const renderedOutput = Tagtical.render(htmlInput, parameters);
console.log('Rendered Output:', renderedOutput.trim());


