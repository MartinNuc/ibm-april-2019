
// heat water -> 2 seconds
// when its hot -> put spagetti in
// boil for 7 seconds
// add ketchup

let bowl = [];

async function execute() {
  const data = await heatWater();
  console.log('water is hot now: ' + data);
  putSpaggetiIn();
  console.log('spaggeti in')
  await boilForSevenMinutes()
  console.log('boiled')
  addKetchup();
  console.log('ready to serve')
}

heatWater()
  .then((data) => console.log('water is hot now: ' + data))
  .then(() => putSpaggetiIn())
  .then(() => 'something')
  .then((data) => console.log('spaggeti in'))
  .then(() => boilForSevenMinutes())
  .then(() => console.log('boiled'))
  .then(() => addKetchup())
  .then(() => console.log('ready to serve'))

function heatWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data from promise');
    }, 2000) // 2 seconds
  });
}

function boilForSevenMinutes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 7000) // 7 seconds
  });
}

function putSpaggetiIn() {
  return bowl.push('spagetti');
}
function addKetchup() {
  return bowl.push('ketchup');
}