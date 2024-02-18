const Template = require('./template.js');

const htmlString = `
<h1>Title</h1>
<p>Description paragraph here.</p>
<section>
    <set:for in="articles" each="article">
        <set:if condition="article.isVisible">
            <set:for in="article.authors" each="author">
                <article>
                <header>Article Header by {author.name}</header>
                <footer>Article Footer</footer>
                </article>
            </set:for>
        </set:if>
    </set:for>
</section>
`;

const template = new Template(htmlString);
console.log(template.render({
  articles: [
    {
      isVisible: true,
      authors: [{ name: "John Doe" }, { name: "Jane Doe" }]
    },
    {
      isVisible: true,
      authors: [{ name: "Hidden Author" }]
    }
  ]
}));
