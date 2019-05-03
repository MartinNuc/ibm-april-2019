import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Article } from './article';
import { VirtualTimeScheduler, Observable, from, interval, Subject } from 'rxjs';
import { distinctUntilChanged, take, skip, filter } from 'rxjs/operators';
import { ArticlesService } from './articles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  counter = 0;
  menuOpened = false;

  textStyling = {
    large: false,
    red: false
  };

  num = 0;

  subj = new Subject();

  articleForm: FormGroup;

  @ViewChild('counterButton')
  counterButton: ElementRef<HTMLButtonElement>;

  get titleControl() {
    return this.articleForm.controls.title;
  }

  constructor(public articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.subj.subscribe(x => console.log(x));
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl(''),
      author: new FormGroup({
        name: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email])
      })
    });
  }

  makeSubjectEmit() {
    this.subj.next('hello');
  }

  toggleColor() {
    this.textStyling.red = !this.textStyling.red;
  }

  ngAfterViewInit() {
    this.counterButton.nativeElement.disabled = true;
  }

  toggleFontSize() {
    this.textStyling.large = !this.textStyling.large;
  }

  removeArticle(article: Article) {
    this.articlesService.removeArticle(article);
  }

  writeArticle() {
    const dataFromForm = this.articleForm.value;
    this.articlesService.writeArticle(
      dataFromForm.title,
      dataFromForm.text
    );
    this.articleForm.reset();
  }

  increment() {
    this.counter++;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
