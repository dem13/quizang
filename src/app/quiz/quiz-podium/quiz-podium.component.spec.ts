import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPodiumComponent } from './quiz-podium.component';

describe('QuizPodiumComponent', () => {
  let component: QuizPodiumComponent;
  let fixture: ComponentFixture<QuizPodiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPodiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
