import { Injectable } from '@angular/core';
import { Article } from './article';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  changes$ = new ReplaySubject<Article[]>(1);
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

  constructor() {
    this.notifyComponents();
  }

  writeArticle(title: string, text: string) {
    let id: number;
    if (this.articles.length === 0) {
      id = 1;
    } else {
      id = this.findAvailableId();
    }
    const article = {
      id,
      title,
      text,
      timestamp: new Date()
    };
    this.articles.push(article);
    this.notifyComponents();
  }

  notifyComponents() {
    this.changes$.next(this.articles);
  }

  findAvailableId(): number {
    const objWithHighestId = this.articles.reduce((acc, curr) => {
      if (curr.id > acc.id) {
        return curr;
      } else {
        return acc;
      }
    });
    return objWithHighestId.id + 1;
  }

  removeArticle(article: Article) {
    this.articles = this.articles.filter(
      item => item.id !== article.id
    );
    this.notifyComponents();
  }
}
