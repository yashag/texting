# texting
> Add additional styles to a block of text

## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save texting
```

## Usage
```js
const texting = require('texting');

texting(text, options);
```

## API
------
### texting(text, [opts])
##### Params:
* **text**: `Array.<string>` - An array of text lines
* **opts**: `Object` - optional - An options object
    * **blockStart**: `string` - A string to be inserted before the inputed text
    * **blockEnd**: `string` - A string to be inserted after the inputed text
    * **lineStart**: `string` - A string to be inserted before each inputed text line
    * **lineEnd**: `string` - A string to be inserted after each inputed text line
    * **seperator**: `string` -A string to be inserted as a seperator between text line

##### Returns: 
`string` - A formatted text output after joining the text lines and the requested options

##### Example
```js
texting(["first sentence", "second sentence", "third sentence"], {
    lineStart: "+",
    blockEnd: "-----"
});
```
The result (a string) is going to be:
```
+first sentence
+second sentence
+third sentence
-----
```

### texting.comments(comments)
##### Params:
* **comments**: `Array.<string>` - An array of comments

##### Returns: 
`string` - A commented text output built from the comments

##### Example
```js
texting.comments(["first comment", "second comment"]);
```
The result (a string) is going to be:
```
// first comment
// second comment
```

### texting.multiComments(comments)
##### Params:
* **comments**: `Array.<string>` - An array of comments

##### Returns: 
`string` - A multiline commented text output built from the comments

##### Example
```js
texting.multiComments(["first comment", "second comment", "third comment"]);
```
The result (a string) is going to be:
```
/*
first comment
second comment
third comment
*/
```

### texting.jsdocComments(comments)
##### Params:
* **comments**: `Array.<string>` - An array of comments

##### Returns: 
`string` - JSDoc formatted comments output built from the comments

##### Example
```js
texting.jsdocComments(["@ param {string} str", "@ param {number} num", "@ return {string}"]);
```
The result (a string) is going to be:
```
/**
* @ param {string} str
* @ param {number} num
* @ return {string}
*/
```

## texting.list(listItems)
##### Params:
* **listItems**: `Array.<string>` - An array of list items

##### Returns: 
`string` - A formatted list output built from list items

##### Example
```js
texting.list(["milk", "bread", "potato", "cheese"]);
```
The result (a string) is going to be:
```
- milk
- bread
- potato
- cheese
```

## License

Copyright © 2017 Yasha Gootkin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.