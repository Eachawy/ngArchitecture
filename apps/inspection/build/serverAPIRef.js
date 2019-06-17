const path = require('path');
const fs = require('fs');
const util = require('util');
const cheerio = require('cheerio');

// promisify core API's
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const FilePath = path.join(__dirname + '/../src/index.html');

readFile(path.join(FilePath), 'utf8', (err, html) => {  

    if (err) throw err;
    const $ = cheerio.load(html);
    $('head').append('<script src="/assets/lib/env.js"></script>');
    writeFile(path.join(FilePath), $.html(), 'utf8');
    
  });








