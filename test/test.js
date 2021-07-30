const htmlparser2 = require("htmlparser2");
const fs = require('fs');
const path = require('path');
let code = fs.readFileSync(path.resolve(__dirname, `./MDN HTML.html`), {encoding: 'utf-8'});

console.time("test")
const dom = htmlparser2.parseDocument(code);
console.timeEnd("test")
