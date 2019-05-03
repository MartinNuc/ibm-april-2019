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
