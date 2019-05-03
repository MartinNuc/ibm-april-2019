import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { WordsCounterPipe } from './words-counter.pipe';
import { ArticleCounterComponent } from './article-counter/article-counter.component';

@NgModule({
  declarations: [ // everything except services
    AppComponent,
    ArticleComponent,
    WordsCounterPipe,
    ArticleCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
