const { SetFunc } = require('./setfunc.js');
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

const expected = 
  new SetFunc['vessel']({}, [
    "<h1>Title</h1><p>Description paragraph here.</p><section>",
    new SetFunc['for']({in: 'articles', each: 'article'}, [
      new SetFunc['if']({condition: 'article.isVisible'}, [
        new SetFunc['for']({in: 'article.authors', each: 'author'}, [
          "<article><header>Article Header by {author.name}</header><footer>Article Footer</footer></article>"
        ])
      ])
    ]), 
    "</section>"
  ]);