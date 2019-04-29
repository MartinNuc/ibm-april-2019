const fs = require('fs');

function write(filename, data) {
  fs.writeFileSync(filename, data);
}

function read(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  return content;
}

module.exports = {
  write,
  read
};


