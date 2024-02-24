const { Tagtical } = require('./tagtical.js');


const parameters = {
    items: [
        { name: 'Apple', quantity: 3 },
        { name: 'Banana', quantity: 5 },
        { name: 'Orange', quantity: 2 }
    ],
    showList: true
};

const htmlInput = `
  <ar-if condition="showList">
    <ul>
      <ar-for each="item" in="items">
        <li><ar-view var="item.name"/>: <ar-view var="item.quantity"/></li>
      </ar-for>
    </ul>
  </ar-if>
`;
const renderedOutput = Tagtical.render(htmlInput, parameters);
console.log('Rendered Output:', renderedOutput.trim());


