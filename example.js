const { textUrlToHtmlLink } = require('./dist');

const text = `
Create Share Links to send your expressions to co-workers or link to them on Twitter or your blog [ex. http://RegExr.com?2rjl6]. Built by gskinner.com with Flex 3 [adobe.com/go/flex] and Spelling Plus Library for text highlighting [gskinner.com/products/spl].\`
`;

const result = textUrlToHtmlLink(text, {
    target: "_blank"
}, false);

console.log(result);
