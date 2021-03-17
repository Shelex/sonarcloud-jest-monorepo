'use strict';

const packageName = require('./package.json')
    .name.split('@shelex/')
    .pop();
const config = {
    displayName: packageName,
    rootDir: '../..',
    roots: [`<rootDir>/web/${packageName}`],
    coverageDirectory: `<rootDir>/web/${packageName}/coverage`
};

module.exports = {
    ...config,
};