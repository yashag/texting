// Because template literals always end in LF I had to go for this ugly solution: \r
// Any suggestions to solve this in a better way are welcome

const randomExpectation = `123\r
@ ++ Lorem ipsum dolor sit amet,987\r
@ ++ consectetur adipiscing987\r
@ ++ elit, sed do eiusmod tempor incididunt987\r
@ ++ ut labore et dolore987\r
@ ++ magna aliqua. Ut enim ad minim987\r
@ ++ veniam, quis987\r
@ >>>>`;

const emptyExpectation = `Lorem ipsum dolor sit amet,\r
consectetur adipiscing\r
elit, sed do eiusmod tempor incididunt\r
ut labore et dolore\r
magna aliqua. Ut enim ad minim\r
veniam, quis`;

const commentsExpectation = `// Lorem ipsum dolor sit amet,\r
// consectetur adipiscing\r
// elit, sed do eiusmod tempor incididunt\r
// ut labore et dolore\r
// magna aliqua. Ut enim ad minim\r
// veniam, quis`;

const multiCommentsExpectation = `/*\r
Lorem ipsum dolor sit amet,\r
consectetur adipiscing\r
elit, sed do eiusmod tempor incididunt\r
ut labore et dolore\r
magna aliqua. Ut enim ad minim\r
veniam, quis\r
*/`;

const jsdocCommentsExpectation = `/**\r
* Lorem ipsum dolor sit amet,\r
* consectetur adipiscing\r
* elit, sed do eiusmod tempor incididunt\r
* ut labore et dolore\r
* magna aliqua. Ut enim ad minim\r
* veniam, quis\r
*/`;

const listExpectation = `- Lorem ipsum dolor sit amet,\r
- consectetur adipiscing\r
- elit, sed do eiusmod tempor incididunt\r
- ut labore et dolore\r
- magna aliqua. Ut enim ad minim\r
- veniam, quis`;


module.exports = {
    randomExpectation,
    emptyExpectation,
    commentsExpectation,
    multiCommentsExpectation,
    jsdocCommentsExpectation,
    listExpectation
}