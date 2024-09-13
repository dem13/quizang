import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLaunchSettingsComponent } from './quiz-launch-settings.component';

describe('QuizLaunchSettingsComponent', () => {
  let component: QuizLaunchSettingsComponent;
  let fixture: ComponentFixture<QuizLaunchSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizLaunchSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizLaunchSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
