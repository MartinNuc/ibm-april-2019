import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ArticlesService } from './articles.service';
import { ArticleCounterComponent } from './article-counter/article-counter.component';
import { ArticleComponent } from './article/article.component';
import { WordsCounterPipe } from './words-counter.pipe';
import { By } from '@angular/platform-browser';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ArticleCounterComponent,
        ArticleComponent,
        WordsCounterPipe
      ],
      providers: [
        ArticlesService
      ]
    }).compileComponents();
  }));

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment counter on button click', () => {
    const button = fixture.debugElement.query(By.css('#counter-button'));
    const counter = fixture.debugElement.query(By.css('#counter'));
    expect(button.nativeElement.textContent).toBe('0');
    expect(counter.nativeElement.textContent).toBe('0');
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(button.nativeElement.textContent).toBe('1');
    expect(counter.nativeElement.textContent).toBe('1');
  });

  it('should show one more article after clicking create article button', () => {
    const button = fixture.debugElement.query(By.css('#write-article'));
    const countBeforeAdding = fixture.debugElement.queryAll(
      By.directive(ArticleComponent)
    ).length;
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const countAfterAdding = fixture.debugElement.queryAll(
      By.directive(ArticleComponent)
    ).length;
    expect(countAfterAdding).toBe(countBeforeAdding + 1);
  });
});
