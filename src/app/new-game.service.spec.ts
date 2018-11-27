import { TestBed, inject } from '@angular/core/testing';

import { NewGameService } from './new-game.service';

describe('NewGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewGameService]
    });
  });

  it('should be created', inject([NewGameService], (service: NewGameService) => {
    expect(service).toBeTruthy();
  }));
});
