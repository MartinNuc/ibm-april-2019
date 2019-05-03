import { TestBed } from '@angular/core/testing';

import { JokeResolverService } from './joke-resolver.service';

describe('JokeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokeResolverService = TestBed.get(JokeResolverService);
    expect(service).toBeTruthy();
  });
});
