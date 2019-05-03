import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke$: Observable<string>;

  constructor(
    public jokeService: JokeService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    // ❗️ subscribe inside of subscribe!! Terrible!!!
    // this.route.paramMap.subscribe(params => {
    //   const category = params.get('category');
    //   this.jokeService.fetchJokeByCategory(category)
    //     .subscribe(joke => console.log('joke'));
    // });

    // correct way:
    this.joke$ = this.route.paramMap.pipe(
      map(params => params.get('category')),
      switchMap(category =>
        this.jokeService.fetchJokeByCategory(category)
      ),
      map(response => response.value)
    );
  }

}
