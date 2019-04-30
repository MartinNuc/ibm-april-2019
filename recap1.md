# Recap for Monday

## What is nodejs?

- env for running JS
- outside of browser



















## How do you do after joining a project?

npm install














## What is npm?

node package manager

npm install -> installs dependencies
npm init -> ** package.json

npm start = npm run start
npm test

npm run <script-name>

package.json -> scripts











## What can you find in package.json?

author, description

version, dependencies, script















## How does the semantic versioning work?

npm install

major.minor.patch












## What are npm scripts?
















## How to use 3rd party library in your project?

npm install express


const express = require('express');







## How to read/write files using node?

const fs = require('fs');

fs.writeFile / fs.readFile / fs.writeFileSync / fs.readFileSync

setTimeout(() => console.log('after 2 seconds), 2000);

const content = fs.readFileSync('large-file.txt', 'utf8');


fs.readFile('large-file.txt', 'utf8', function(err, data) {
  if (err) { console.log('something went wrong'); }

});


function readFile(filename, encoding, callback) {
  ....
  .... ???? const content = ....
  callback(err, content);

}



## What are modules and how to use them in node?

function func1() {

}

let obj = {
  func1,
  func2() {

  },
  func3: () => {

  },
  func4: function() {

  }
}

module.exports = obj;



----------------------

const myModule = require('./my-module');
myModule.func3()
const func3 = require('./my-module').func3;
const { func3 } = require('./my-module');











## What is Express.js used for?

framework for creating a web server














## How do you create a page / endpoint using express?

.....
const express = require('express');
const app = express();

app.get('/about', (request, response) => {
  response.send('html');
})
app.get('/products')
.....












## What parts of URL do you know?

protocol://hostname:port/path?query=params&key=value#anchor





GET
POST
PUT
DELETE
PATCH

DELETE api.ibm.com/users/6

app.delete('/users/:id', (req, res) => {
  req.params.id
})






## How does middleware work? Which one do you know?

app.use(middleware)
app.use('path', middleware)

Static MW
- loads and sends data from directory













## How to create your own middleware?

const fs = require('fs');

function static(req, res, next) {
  fs.readFile(req.path, 'utf8', (err, content)=> {
    // err
    if (err) {
      req.send(404, 'not found');
      next();
      return;
    }

    // content
    req.send(content);
    next();
  });
}











