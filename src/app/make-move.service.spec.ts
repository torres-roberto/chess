import { TestBed, inject } from '@angular/core/testing';

import { MakeMoveService } from './make-move.service';

describe('MakeMoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeMoveService]
    });
  });

  it('should be created', inject([MakeMoveService], (service: MakeMoveService) => {
    expect(service).toBeTruthy();
  }));
});
