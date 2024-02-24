# Tagtical - A Logic-Embedded HTML-like Template Engine

Welcome to Tagtical, a template engine designed to enhance HTML with the power of logic through an intuitive, HTML-like syntax. This engine utilizes custom tags, such as `<ar-if>`, `<ar-for>`, and `<ar-view>`, to enable conditional rendering, iteration over collections, and dynamic expression evaluation directly within HTML templates. This approach streamlines dynamic content generation, making it more accessible and efficient for developers.

## Features

- **HTML-like Syntax**: Tagtical uses a syntax that closely resembles HTML, ensuring a seamless transition for developers familiar with web development.
- **Embedded Logic**: Directly integrate logical constructs like loops (`<ar-for>`), conditionals (`<ar-if>`), and expression evaluation (`<ar-view>` or `{{ }}`) within your templates, facilitating dynamic content generation without external scripting.
- **Seamless Integration**: Designed for effortless integration into existing HTML projects, Tagtical minimizes the need for extensive rewrites or adjustments.
- **Comprehensive Tag System**: Employs a range of custom tags to incorporate logic within templates, increasing the flexibility and capability of dynamic content generation.
- **Extensible**: Tagtical encourages the addition of custom logic and tags through its comprehensive tag system, offering limitless customization and functionality expansion.

## Getting Started
To quickly integrate Tagtical into your project, you can either add it directly to your `package.json`, clone this repository, or use the command `npm install tagtical`.


```javascript
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
```

Output: 
```html
<ul>
  <ar-for each="item" in="items">
    <li><ar-view var="item.name">Apple</ar-view></li>
    <li><ar-view var="item.name">Banana</ar-view></li>
    <li><ar-view var="item.name">Orange</ar-view></li>
  </ar-for>
</ul>
