import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { WordsCounterPipe } from '../words-counter.pipe';
import { By } from '@angular/platform-browser';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleComponent, WordsCounterPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = {
      id: 1,
      text: 'This is long story about...',
      timestamp: new Date(2019, 1, 1, 1, 1, 1, 1),
      title: 'Long story'
    };
    fixture.detectChanges();
  });

  it('should render article', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    const text = fixture.debugElement.query(By.css('[data-test="article"]'));
    expect(title.nativeElement.textContent).toContain('Long story');
    expect(text.nativeElement.textContent).toContain('This is long story about...');
    // words count
    // created
  });
});
