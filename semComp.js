var JSFuck = require('./jsfuck.js').JSFuck
const fs = require('fs');
const { exec } = require('child_process');

function cipherRot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
      
    }
  }

const H = cipherRot13("frzpbzc iv");

const C = H[0];
const X = H[3];
const G = H[9];
const A = H[1];
const P = H[2];
const Y = H[7];
const L = H[6];
const U = H[4];
const I = H[8];

const CAPXUPLYIG = C + A + P + X + U + P + L + Y + I + G;

fs.writeFile('encoded.txt', "console.log(" + JSFuck.encode(CAPXUPLYIG) + ")", (err) => {
    if (err) console.log('The file has been saved!');
    console.log('There is an error with your input');
});

exec('node ./encoded.txt', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing file: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});