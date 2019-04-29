
// require
const fs = require('fs');
const qrCodeLib = require('qrcode');
// generate QR
qrCodeLib.toString('Hello, how are you?').then(() => {

  // write to file
  fs.writeFile('qr.txt', qr, () => {
    //// file is written
    // wait 5 seconds
    setTimeout(() => {
      // read from file
      fs.readFile('qr.txt', 'utf8', (err, content) => {
        ///// content is read
        // print out
        console.log(content);
      });
    }, 5000);
  });
})


// say hi
// wait 2 seconds
// say how are you?
// wait 3 seconds
// say goodbye
console.log('hi');
waitNSeconds(2).then(() => {
  console.log('how are you?');
}).then(() => {
  return waitNSeconds(3);
}).then(() => {
  console.log('goodbye');
})


function waitNSeconds(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}


