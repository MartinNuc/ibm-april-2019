import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Article } from './article';
import { VirtualTimeScheduler, Observable, from, interval, Subject } from 'rxjs';
import { distinctUntilChanged, take, skip, filter } from 'rxjs/operators';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  counter = 0;
  menuOpened = false;

  textStyling = {
    large: false,
    red: false
  };

  num = 0;

  subj = new Subject();

  @ViewChild('counterButton')
  counterButton: ElementRef<HTMLButtonElement>;

  constructor(public articlesService: ArticlesService) {
    const subs$ = interval(200).subscribe(() => {
        console.log('tick');
      },
      () => console.log('error'),
      () => console.log('complete')
    );
    setTimeout(() => {
      subs$.unsubscribe();
    }, 2000);
    return;

    interval(200).pipe(
      filter(x => isPrime(x)),
      skip(5),
      take(4)
    ).subscribe(x => console.log(x));

    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n !== 1 && n !== 0;
    }
  }

  ngOnInit() {
    this.subj.subscribe(x => console.log(x));
  }

  makeSubjectEmit() {
    this.subj.next('hello');
  }

  toggleColor() {
    this.textStyling.red = !this.textStyling.red;
  }

  ngAfterViewInit() {
    this.counterButton.nativeElement.disabled = true;
  }

  toggleFontSize() {
    this.textStyling.large = !this.textStyling.large;
  }

  removeArticle(article: Article) {
    this.articlesService.removeArticle(article);
  }

  writeArticle() {
    this.articlesService.writeArticle();
  }

  increment() {
    this.counter++;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
