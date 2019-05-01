import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-counter',
  templateUrl: './article-counter.component.html',
  styleUrls: ['./article-counter.component.css']
})
export class ArticleCounterComponent implements OnInit {

  constructor(public service: ArticlesService) { }

  get articlesLength() {
    return this.service.articles.length;
  }

  ngOnInit() {
  }

}
