import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlayerSettingsComponent } from './quiz-player-settings.component';

describe('QuizPlayerSettingsComponent', () => {
  let component: QuizPlayerSettingsComponent;
  let fixture: ComponentFixture<QuizPlayerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlayerSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizPlayerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
