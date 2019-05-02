# Recap of Tuesday

## What is Typescript?

programming language

types for variables

.ts

needs transpilation


















## What types do you know?

number, string, boolean

any - type for anything - like in JS

let myVariable: any = 1;
myVariable = 5;
myVariable = {};
myVariable = 'something';

undefined, never, void

object - {}, { age: 20 }

for object with known properties -> create interface

generation, clock speed, L2 cache

interface Processor {
  generation: string;
  clockSpeed: number;
  l2Cache: number;
}

interface Computer {
  processor: Processor;
  screensize?: number;
}

let computer: Computer = {
  processor: {
    generation: 'Sandy bridge'
    clockSpeed: 2000
    l2Cache: 8
  }
}

array - 

let myVariable: string[] = [];
let myVariable: number[] = [];
let myVariable: Array<number> = [1,2,3];

class Array<T> {

}

















## How do you use types?

let myVariable: number;

JS:
class Component {

  constructor() {
    this.myVariable = 'something';
  }
}

TS:
class Component {
  myVariable = 'something';
}

let c = new Component();



class Dog {
  //------------- name: string;
  constructor(public name: string) {
    //------------ this.name = name;
  }

  bark(): void {
    console.log('Huf huf, I am ' + this.name);
  }
}

let rex: Dog = new Dog('Rex');
rex.bark();
let lassie = new Dog('Lassie');
lassie.bark();






















## What is typescript compiler?

compile / transpile TS to JS

tsc

tsconfig.json
- target: es6
- strict: false

let x;




npm install -g typescript








## How do you split project into modules?

CommonJS

module.exports = {}

const myModule = require('./my-module');





export function x() 
export class Person {}
export default function y()


import {x as renamedX } from './my-module';
renamedX();
import renamedYFunction from './my-module';











## How to use third party library in Typescript?

1) install lib itself
2) install types for it
- not when written in TS or has already types in it
- npm i @types/<name-of-lib>


import lodash from 'lodash'
import express from 'express'














## What is an interface?

interface Person {
  name: string;
  age: number;
}

let mike: Person = {
  name: 'Mike',
  age: 20
}

class Employee implement Person {
  constructor(public name: string, public age: number) {}
}

let john: Person = new Employee('John', 23);












## What are classes? How do they differ in TS from JS?


















## Do you know how to use access modificators (public/private/protected)?


class Elevator {
  private currentFloor: number = 0;
  private doorClosed = false;

  constructor(public name: string) {}

  moveUp() {
    if (this.doorClosed) {
      this.currentFloor++;
    }
  }
  moveDown() {}
  openDoor() {}
  closeDoor() {}
  callItToFloor(desiredFloor: number) {}
}

let blockDElevator = new Elevator();
// blockDElevator.currentFloor = 5;
blockDElevator.moveUp();
let blockCElevator = new Elevator();















## What is union type?

type Container = number | string | Person;

let myVariable: Container = 5;

















## What are generics?

Array<>

Promise<>


let myPromise = new Promise<number>((resolve, reject) => {
  resolve(5);
})

myPromise.then((data: number) => console.log(data)) /// 5













## What is Angular?

framework - client side application - runs in browser








## How do you create an Angular project?

ng new <name>














## How do you create a component?

ng generate component
ng g c













## How do you print out something from Typescript in HTML?

html - template
css - stylesheet
ts - class
spec.ts

class Component {
  nameOfVariable = 5;
}


HTML:
{{ nameOfVariable }}












## How do you do something when event happens?

click
hover

HTML

<a href="https://google.com" (click)="methodToExecute()">link</a>
<a href="https://google.com" onclick="methodToExecute">link</a>

TS:
class Component {
  methodToExecute() {
    console.log('clicked');
  }
}














## How do you show/hide stuff?

<div *ngIf="currentFloor === 5">
  Top floor
</div>

class Component {
  currentFloor = 5;

}















## How do you iterate over an array inside of a template?

class Component {
  articles = [
    {},
    {},
    {}
  ]
}


HTML:

<div *ngFor="let item of articles">
  {{item}}
</div>













## What is component tree?

- 

















## What is Angular module?

- glue of the app
- declarations: [components]












## How do components communicate between each other?

inputs, outputs


Input
- passing data from the parent to child

class ParentComponent {
  nameStoredInParent = 'John';
}

parent HTML:

<app-child [name]="nameStoredInParent"></app-child>


TS:
@Component({
  selector: 'app-child'
})
class ChildComponent {
  @Input()
  name: string = 'John';
}

{{ name }}



