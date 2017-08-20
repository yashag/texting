const EOL = require('os').EOL;

/**
 * @param {string[]} text - An array of text lines
 * @param {Object} [opts] - An options object
 * @param {string} [opts.blockStart] - A string to be inserted before the inputed text
 * @param {string} [opts.blockEnd] - A string to be inserted after the inputed text
 * @param {string} [opts.lineStart] - A string to be inserted before each inputed text line
 * @param {string} [opts.lineEnd] - A string to be inserted after each inputed text line
 * @param {string} [opts.seperator] - A string to be inserted as a seperator between text line
 * @return {string} - A formatted text output after joining the text lines and the requested options
 */
function texting(text, opts = {}) {
    opts = Object.assign({}, {
        blockStart: "",
        blockEnd: "",
        lineStart: "",
        lineEnd: "",
        seperator: EOL
    }, opts);

    let textLines = text.map(textLine => opts.lineStart + textLine + opts.lineEnd);
    if(!!opts.blockStart) textLines = [opts.blockStart].concat(textLines);
    if(!!opts.blockEnd) textLines = textLines.concat([opts.blockEnd]);

    return textLines.join(opts.seperator);
}

/**
 * @param {string[]} comments - An array of comments
 * @return {string} - A commented text output built from the comments
 */
function comments (comments) {
    return texting(comments, {lineStart: "// "});
}

/**
 * @param {string[]} comments - An array of comments
 * @return {string} - A multiline commented text output built from the comments
 */
function multiComments (comments) {
    return texting(comments, {blockStart: "/*", blockEnd: "*/"});
}

/**
 * @param {string[]} comments - An array of comments
 * @return {string} - JSDoc formatted comments output built from the comments
 */
function jsdocComments(comments) {
    return texting(comments, {blockStart: "/**", blockEnd: "*/", lineStart: "* "});
}

/**
 * @param {string[]} listItems - An array of list items
 * @return {string} - A formatted list output built from list items
 */
function list(listItems) {
    return texting(listItems, {lineStart: "- "});
}

module.exports = {
    texting,
    comments, 
    multiComments,
    jsdocComments,
    list
}