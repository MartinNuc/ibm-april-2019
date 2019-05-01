import { Component } from '@angular/core';
import { Article } from './article';
import { VirtualTimeScheduler } from 'rxjs';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  menuOpened = false;

  textStyling = {
    large: false,
    red: false
  };

  constructor(public articlesService: ArticlesService) {

  }

  toggleColor() {
    this.textStyling.red = !this.textStyling.red;
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
