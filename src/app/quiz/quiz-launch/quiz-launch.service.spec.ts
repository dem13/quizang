import { TestBed } from '@angular/core/testing';

import { QuizLaunchService } from './quiz-launch.service';

describe('QuizLaunchService', () => {
  let service: QuizLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
