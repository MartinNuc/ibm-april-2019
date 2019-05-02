import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Article } from './article';
import { VirtualTimeScheduler } from 'rxjs';
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

  @ViewChild('counterButton')
  counterButton: ElementRef<HTMLButtonElement>;

  constructor(public articlesService: ArticlesService) {

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
