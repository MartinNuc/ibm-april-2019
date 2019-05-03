# Recap of Thursday

## What component lifecycle hooks do you know?

class Component implements OnInit {
  ngOnInit() {

  }
}

ngOnDestroy - comp is being removed from the page

ngAfterViewInit





















## How do we access native elements from the component?

HTML

<button #myButton (click)="doSomething()">
</button>


TS
class Component {

  @ViewChild('myButton')
  button: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    this.button.nativeElement.click();
  }
}


















## When testing component - what is `component = fixture.componentInstance`?

component -> CLASS
component.method();
expect(component.myVariable).toBe('hello');


class Component {
  myVariable = 'hello';

  method() {

  }
}














## What would you use `nativeElement` and `debugElement` for? How do they differ?

```
let a = fixture.nativeElement.querySelector('.red')
a.click()
let b = fixture.debugElement.query(By.css('.red'))
fixture.debugElement.query(By.directive(ArticleComponent))

b.nativeElement.click();
b.nativeElement.textContent;
```














## How do you trigger click?

let nativeElement = ...querySelector('...');
nativeElement.click();

let debugElement = debugElement.query(By.css(...));
debugElement.nativeElement.click()
debugElement.triggerEventHandler('click', null);














## What is change detection?

fixture.detectChanges()


















## When and how would you mock a service in the test?

```
{
  declarations: [],
  providers: [
    CalculatorService,
    {
      provide: ArticleService,
      useValue: {}
    }
  ]
}
```

```
class Component {
  constructor(service: ArticleService) {
    console.log(service); // {}
  }
}
```














## What are spies? How to use them?

- used to track whether the method has been called

```
let myObj = {
  sayHello() {
    console.log('hello');
    return 5;
  }
}


spyOn(myObj, 'sayHello')
myObj.sayHello.and.callFake(() => {
  console.log('kidnapped');
  return 99;
});
myObj.sayHello.and.callThrough();

let result = myObj.sayHello();
expect(myObj.sayHello).toHaveBeenCalled();
```

```
let myObj = {
  sayHello() {
    console.log('hello');
    return 5;
  }
}

myObj.add = jasmine.createSpy();
myObj.add();
expect(myObj.add).toHaveBeenCalled();
```

















## What are observables? What are basic principles?

- SUBSCRIBE ❗️️️️️️️️❗️❗️
- like promises but "resolve" (=emit) multiple times
- you can unsubscribe
- operators















## How do you create an observable?

```
new Observable(controller => {
  controller.next(data);
  controller.error();
  controller.complete();
})
```
```
new Promise((resolve, reject) => {
  resolve(data);
  reject(new Error('something went wrong'));
})
```













## Describe subscribe :-)

interval(1000).subscribe((value) => {
  // onTick
  console.log(value)
}, (error) => {
  // onError
  console.log('errored', error);
}, () => {
  // onComplete
  console.log('completed')
});



















## How to stop listening to observable?


let subscription = obs$.subscribe()
subscription.unsubscribe();















## What are operators and how to apply them?

- take
- skip
- filter
- map
- reduce
- scan
- tap
- switchMap
- ...

```
let obs$ = interval(1000);

obs$.pipe(
  take(5),
  skip(2),
  tap(x => console.log(x)),
  map(x => x + 3)
).subscribe(x => console.log(x))
```
