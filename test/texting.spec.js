const assert = require('assert');
const EOL = require('os').EOL;

const texting = require('../');

const expectations = require('./expectations/expectations');
const lorem = [
    'Lorem ipsum dolor sit amet,',
    'consectetur adipiscing',
    'elit, sed do eiusmod tempor incididunt',
    'ut labore et dolore',
    'magna aliqua. Ut enim ad minim',
    'veniam, quis'
];

describe('texting', () => {

    describe('#texting', () => {

        it('return a fully formatted text block', () => {
            const result = texting(lorem, {
                blockStart: "123",
                blockEnd: ">>>>",
                lineStart: "++ ",
                lineEnd: "987",
                seperator: (EOL + "@ ")
            });
            assert.equal(result, expectations.randomExpectation);
        });

        it('return an unformatted text block', () => {
            const result = texting(lorem);
            assert.equal(result, expectations.emptyExpectation);
        });

    });

    describe('#comments', () => {
        it('return a single-line commented text block', () => {
            const result = texting.comments(lorem);
            assert.equal(result, expectations.commentsExpectation);
        });
    });

    describe('#multiComments', () => {
        it('return a multi-line commented text block', () => {
            const result = texting.multiComments(lorem);
            assert.equal(result, expectations.multiCommentsExpectation);
        });
    });

    describe('#jsdocComments', () => {
        it('return a jsdoc-style commented text block', () => {
            const result = texting.jsdocComments(lorem);
            assert.equal(result, expectations.jsdocCommentsExpectation);
        });
    });

    describe('#list', () => {
        it('return a list formatted text block', () => {
            const result = texting.list(lorem);
            assert.equal(result, expectations.listExpectation);
        });
    });

});