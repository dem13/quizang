import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLaunchButtonComponent } from './quiz-launch-button.component';

describe('QuizLaunchButtonComponent', () => {
  let component: QuizLaunchButtonComponent;
  let fixture: ComponentFixture<QuizLaunchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizLaunchButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizLaunchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
