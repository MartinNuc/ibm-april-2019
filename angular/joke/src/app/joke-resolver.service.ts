import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Joke } from './joke';
import { Observable } from 'rxjs';
import { JokeService } from './joke.service';

@Injectable({
  providedIn: 'root'
})
export class JokeResolverService implements Resolve<Joke> {
  constructor(public service: JokeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Joke> {
    const category = route.paramMap.get('category');
    return this.service.fetchJokeByCategory(category);
  }
}
