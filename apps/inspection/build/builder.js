const path = require('path');
const fs = require('fs');
const util = require('util');

// get application version from package.json
const appVersion = require('../../../package.json').version;

// promisify core API's
const readDir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

console.log('\nRunning post-build tasks');

// our version.json will be in the dist folder
const versionFilePath = path.join(__dirname + '/../../../dist/apps/inspection/version.json');

let mainHash = '';
let mainBundleFile = '';

// RegExp to find main.bundle.js, even if it doesn't include a hash in it's name (dev build)
let mainBundleRegexp = /^main.?([a-z0-9]*)?.js$/;

// read the dist folder files and find the one we're looking for
readDir(path.join(__dirname, '../../../dist/apps/inspection/')).then(files => {
    mainBundleFile = files.find(f => mainBundleRegexp.test(f));

    if (mainBundleFile) {
      let matchHash = mainBundleFile.match(mainBundleRegexp);

      // if it has a hash in it's name, mark it down
      if (matchHash.length > 1 && !!matchHash[1]) {
        mainHash = matchHash[1];
      }
    }

    console.log(`Writing version and hash to ${versionFilePath}`);

    // write current version and hash into the version.json file
    const src = `{"version": "${appVersion}", "hash": "${mainHash}"}`;

    return writeFile(versionFilePath, src);
    
  }).then(() => {
    // main bundle file not found, dev build?
    if (!mainBundleFile) {
      return;
    }

    console.log(`Replacing hash in the ${mainBundleFile}`);

    readFile(path.join(__dirname, '../../shell/src/assets/app/app.json'), 'utf8', (err, data) => {  
      if (err) throw err;
      let appList = JSON.parse(data);
      if(appList[0].inspection){
        appList[0].inspection.path = 'assets/app/inspection/main.' + mainHash + '.js';
      }else {
        appList[0].inspection = {
            "loaded": false,
            "path": "assets/app/inspection/main." + mainHash + ".js",
            "element": "app-inspection"
        };
      }

      let appListjson = JSON.stringify(appList);
      console.log(appListjson);
      writeFile(path.join(__dirname, '../../shell/src/assets/app/app.json'), appListjson, 'utf8');
      
    });
  }).catch(err => {
    console.log('Error with post build:', err);
  });


  