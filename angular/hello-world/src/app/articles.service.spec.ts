import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';

fdescribe('ArticlesService', () => {
  let service: ArticlesService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new article', () => {
    service.articles = [
      { id: 5 }
    ] as any;
    service.writeArticle();
    expect(service.articles.length).toBe(2);
    expect(service.articles[1].id).toBe(6);
  });

  it('should create article with id=1 when there are no articles', () => {
    service.articles = [];
    service.writeArticle();
    expect(service.articles[0].id).toBe(1);
  });

  it('generates highest empty id', () => {
    service.articles = [
      { id: 5 },
      { id: 4 },
      { id: 3 }
    ] as any;
    const result = service.findAvailableId();
    expect(result).toBe(6);
  });

  it('should delete one item', () => {
    service.articles = [
      { id: 5 },
      { id: 4 },
      { id: 3 }
    ] as any;
    const articleToBeRemoved = service.articles[1];
    service.removeArticle(articleToBeRemoved);
    expect(service.articles[1].id).not.toBe(4);
    expect(service.articles.length).toBe(2);
  });

});
