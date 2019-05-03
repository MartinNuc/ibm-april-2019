import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  joke$: Observable<string>;

  constructor(public jokeService: JokeService) {}

  ngOnInit() {
    this.joke$ = this.jokeService.fetchRandomJoke().pipe(
      map(joke => joke.value)
    );
  }
}
