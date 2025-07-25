import { TestBed } from '@angular/core/testing';

import { MathGame } from './math-game';

describe('MathGame', () => {
  let service: MathGame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
