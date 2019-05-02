import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Article } from './article';
import { VirtualTimeScheduler, Observable } from 'rxjs';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  counter = 0;
  menuOpened = false;

  textStyling = {
    large: false,
    red: false
  };

  num = 0;

  @ViewChild('counterButton')
  counterButton: ElementRef<HTMLButtonElement>;

  constructor(public articlesService: ArticlesService) {

    resolveAfterTime(2000)
      .then(() => console.log('after 2 seconds'));

    const obs$ = interval(2000);
    obs$.subscribe(num => {
      this.num = num;
      console.log(num);
    });

    function resolveAfterTime(ms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    }

    function interval(ms) {
      return new Observable<number>(observer => {
        let x = 0;
        setInterval(() => {
          observer.next(x);
          x++;
        }, ms);
      });
    }




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
