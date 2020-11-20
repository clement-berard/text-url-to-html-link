# text-url-to-html-link
<p align="center">  
    <a href="https://www.npmjs.com/package/text-url-to-html-link">
        <img src="https://img.shields.io/npm/v/text-url-to-html-link.svg" alt="Coverage">
    </a>
    <a href="https://www.npmjs.com/package/text-url-to-html-link">
        <img src="https://img.shields.io/npm/dw/text-url-to-html-link.svg" alt="Coverage">
    </a>
</p>

It's a simple function that fetches all the urls in a string, and transforms them into HTML links (tag <a>)

## Install

```bash
yarn add text-url-to-html-link
```

This package is build with Parcel Builder.

## Get started

```js
const {textUrlToHtmlLink} = require('text-url-to-html-link');
// or
import {textUrlToHtmlLink} from 'text-url-to-html-link'



const myText = `Create Share Links to send your expressions to co-workers or link to them on Twitter or your blog [ex. http://RegExr.com?2rjl6]. Built by gskinner.com with Flex 3 [adobe.com/go/flex] and Spelling Plus Library for text highlighting [gskinner.com/products/spl].`;

console.log(textUrlToHtmlLink(myText));
```

Result with restrictive regex: 

```
Create Share Links to send your expressions to co-workers or link to them on Twitter or your blog [ex. <a href="http://RegExr.com?2rjl6" >http://RegExr.com?2rjl6</a>]. Built by gskinner.com with Flex 3 [adobe.com/go/flex] and Spelling Plus Library for text highlighting [gskinner.com/products/spl].
```

Result with less restrictive regex: 

```
Create Share Links to send your expressions to co-workers or link to them on Twitter or your blog [ex. <a href="http://RegExr.com?2rjl6" >http://RegExr.com?2rjl6</a>]. Built by <a href="gskinner.com" >gskinner.com</a> with Flex 3 [<a href="adobe.com/go/flex" >adobe.com/go/flex</a>] and Spelling Plus Library for text highlighting [<a href="gskinner.com/products/spl" >gskinner.com/products/spl</a>].
```

## Options

Here is signature: 

```
textUrlToHtmlLink(text, htmlAttrs, restrictive)
```

- `htmlAttrs`: an object of a-tag Html attributes
- `restrictive`: boolean to set restrictive mode