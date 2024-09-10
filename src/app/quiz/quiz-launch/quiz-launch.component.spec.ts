import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLaunchComponent } from './quiz-launch.component';

describe('QuizLaunchComponent', () => {
  let component: QuizLaunchComponent;
  let fixture: ComponentFixture<QuizLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizLaunchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
