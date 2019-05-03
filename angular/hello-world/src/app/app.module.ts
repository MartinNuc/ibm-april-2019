import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WordsCounterPipe } from './words-counter.pipe';
import { ArticleCounterComponent } from './article-counter/article-counter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // everything except services
    AppComponent,
    ArticleComponent,
    WordsCounterPipe,
    ArticleCounterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // ❗️❗️ import forms module to use forms
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
