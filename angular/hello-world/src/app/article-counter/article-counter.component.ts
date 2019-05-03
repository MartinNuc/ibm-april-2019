import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-article-counter',
  templateUrl: './article-counter.component.html',
  styleUrls: ['./article-counter.component.css']
})
export class ArticleCounterComponent implements OnInit {

  constructor(public service: ArticlesService) { }

  get articlesLength$() {
    return this.service.changes$.pipe(
      tap(x => console.log(x)),
      map(array => array.length)
    );
  }

  ngOnInit() {
  }

}
