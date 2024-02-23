const { Tagtical } = require('./tagtical.js');

(function testTagticalTemplateEngine() {
    const htmlInput = `
        <ar-if condition="true">This will render</ar-if>
        <ar-if condition="false">This will not render</ar-if>
        <ar-for each="item" in='[{"content":"First"},{"content":"Second"}]'>
            <div>item.content</div>
        </ar-for>
    `;

    const renderedOutput = Tagtical.render(htmlInput);
    console.log('Rendered Output:', renderedOutput.trim());
 
})();

