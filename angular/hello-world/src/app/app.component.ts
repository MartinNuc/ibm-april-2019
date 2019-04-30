import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  menuOpened = false;
  articles: Article[] = [
    {
      id: 1,
      title: 'Turn the ship around',
      text: 'lorem ipsum',
      timestamp: new Date()
    },
    {
      id: 2,
      title: 'Traffic jam in London',
      text: 'Its insane! I couldnt get to the work!',
      timestamp: new Date()
    }
  ];

  writeArticle() {
    const objWithHighestId = this.articles.reduce((acc, curr) => {
      if (curr.id > acc.id) {
        return curr;
      } else {
        return acc;
      }
    });
    const id = objWithHighestId.id + 1;
    const article = {
      id,
      title: 'title' + id,
      text: 'bla bla bla lorem ipsum ',
      timestamp: new Date()
    };
    this.articles.push(article);
  }

  increment() {
    this.counter++;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
