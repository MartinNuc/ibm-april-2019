const {write, read} = require('./filesystem-functions');
write('file1.txt', 'Hey');
const content = read('file1.txt');