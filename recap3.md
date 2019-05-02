# Recap of Wednesday

## How to send event to the parent component? How to pass a value?

```
@Component({
  selector: 'app-child'
})
class ChildComponent {

  article: Article;

  @Output()
  emitter = new EventEmitter<Article>();

  constructor() {
    let interval = setInterval(() => {
      this.emitter.emit({
        article: this.article
        date: new Date()
      });
    }, 1000);
    clearInterval(interval);

    let timeout = setTimeout(() => console.log('hi'), 5000);
    clearTimeout(timeout);
  }
}
```

HTML parent:
```
<div *ngFor="let article of articles">
  <app-child (emitter)="methodInParent($event)"></app-child>
</div>
```

TS parent:

```
class ParentComponent {
  counter = 0;
  methodInParent(params) {
    params.date
    params.article

  }
}
```

Output 

emit


















## What are pipes? Which one do you know?

json - good for debugging


```
class Component {
  currentTime = new Date()
}
```

```
{{ currentTime | date: 'mediumTime' | lowercase }}
```












## How do you create your own?

> ng g p my-pipe

```
class MyPipe {
  tranforms(input, params) {
    this.calculateSum();
    return 'this is output';
  }

  calculateSum() {

  }
}
```
















## How does ngClass work?

```
<div [ngClass]="obj">
</div>
```

```
obj = {
  className: boolean,
  red: false
}
obj.red = true;
```




## What is a service? Why do we have services?

1. data + functionality shared accross multiple components

2. not to have too much code in components

3. easy to test

> ng g s users -> UsersService




## How do you use a service from a component?

```
class Component {
  constructor(
      public service: UsersService,
      public calculator: CalculatorService) {
  }

  method() {
    this.service....
    this.calculator...
  }
}
```
















## How do you use a service from a service?

```
class UsersService {
  constructor(public calculator: CalculatorService) {

  }
}
```















## How do we test stuff in Angular? What is a structure of tests?

spec.ts

```
describe('', () => {

  it('should do something', () => {
    ...... // test body
  })
  it('should do something', () => {
    ...... // test body
  })

  describe('', () => {

    beforeEach(() => {

    });

    it('should do something', () => {

      ...... // test body
    })
  });
});
describe('', () => {
  it('should do something', () => {
    ...... // test body
  })
  it('should do something', () => {
    ...... // test body
  })
});
```














## How does expect work? toBe...?

const result = .... tested thing

```
expect(result).toBe()
expect(result).not.toBe()
expect({
  address: {
    street: 'Baker street',
    city: 'London'
  }
}).toEqual({
  address: {
    street: 'Baker street',
    city: 'London',
    zipCode: '12345'
  }
})
expect(() => testedFunction()).toThrow(Error);
```














## How do you test a pipe?

```
class Pipe {
  constructor(public calculator: CalculatorService) {

  }

  transform(input) {
    return 'output' + this.calculator.add(1,5);
  }
}
```

```
it('should work as I expect', () => {
  const calculator = new CalculatorService();
  const pipe = new Pipe(calculator);
  expect(pipe.transform(new Date())).toBe('12th September 2018');
})
```














## How do you test a service?

- have to configure testing module

```
class Service {
  constructor(calculator: CalculatorService, users: UsersService) {}
}
```

```
beforeEach(() => {
  ...configureTestingModule({
    providers: [
      CalculatorService,
      UsersService
    ]
  })
})

it('should do something', () => {
  const service = TestBed.get(Service);
  <!-- const calc = new Calcualtor();
  const users = new UsersService(??????????);
  new Service(calc, users) -->
  expect(service.method()).toBe(...)
})
```











## How do you use promises?

- for asynchronous
- when we want to do something AFTER it's complete

```
const fs = require('fs');

fs.writeFile('file.txt', 'this is content', () => {
  fs.readFile('file.txt', 'utf8', () => {
    fs.unlink('file.txt', () => {
      ....
    })
  })
})

function writeFilePromised() {
  return new Promise((resolve, reject) => {
    ////////// async code
    resolve();
  });
}
```

```
const promise = fetch('https://google.com');
promise.then(response => {

})
```