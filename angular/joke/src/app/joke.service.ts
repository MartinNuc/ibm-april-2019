import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(public http: HttpClient) { }

  fetchRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random');
  }

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }

  fetchJokeByCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  }
}
