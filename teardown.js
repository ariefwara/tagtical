class Teardown {
  constructor(htmlString) {
    this.htmlString = htmlString;
    this.customTags = ['for', 'if'];
  }

  parse() {
    return this.parseNested(this.htmlString);
  }

  parseNested(html, parts = [], parentTag = null) {
    let currentIndex = 0;
    while (currentIndex < html.length) {
      const nextTagIndex = this.findNextCustomTagIndex(html, currentIndex);
      if (nextTagIndex !== -1) {
        const tag = this.extractTagName(html, nextTagIndex);
        if (tag) {
          const closingTag = `</${tag}>`;
          const closingTagIndex = html.indexOf(closingTag, nextTagIndex);
          if (closingTagIndex !== -1) {
            const nestedHtml = html.substring(nextTagIndex, closingTagIndex + closingTag.length);
            const content = nestedHtml.substring(nestedHtml.indexOf('>') + 1, nestedHtml.lastIndexOf('<'));
            const part = { tag, content, nested: [] };
            if (parentTag) {
              const parentIndex = parts.findIndex(p => p.tag === parentTag);
              if (parentIndex !== -1) {
                parts[parentIndex].nested.push(part);
              }
            } else {
              parts.push(part);
            }
            this.parseNested(content, parts, tag);
            currentIndex = closingTagIndex + closingTag.length;
            continue;
          }
        }
      }
      break; // No more custom tags found
    }
    return parts;
  }

  findNextCustomTagIndex(html, startIndex) {
    return this.customTags.reduce((acc, tag) => {
      const tagIndex = html.indexOf(`<${tag}>`, startIndex);
      return tagIndex !== -1 && (acc === -1 || tagIndex < acc) ? tagIndex : acc;
    }, -1);
  }

  extractTagName(html, index) {
    const endIndex = html.indexOf('>', index);
    if (endIndex !== -1) {
      return html.substring(index + 1, endIndex).replace('/', '');
    }
    return null;
  }
}

// Test the Teardown class
const htmlString = `
<div>
  <for>Loop Content<if>Conditional Content<if>Another Conditional Content 2#</if></if></for>
  <if>Another Conditional Content</if>
</div>
`;

const teardown = new Teardown(htmlString);
const parsedHtml = teardown.parse();
console.log(JSON.stringify(parsedHtml, null, 2));



