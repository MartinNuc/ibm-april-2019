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
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.joke$ = this.route.data.pipe(
      map(data => data.joke),
      map(joke => joke.value)
    );
  }

}
