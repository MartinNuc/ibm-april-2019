import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<string[]>;

  constructor(public jokeService: JokeService) { }

  ngOnInit() {
    this.categories$ = this.jokeService.fetchCategories();
  }

}
