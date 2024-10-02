import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlaygroundControlsComponent } from './quiz-playground-controls.component';

describe('QuizPlaygroundControlsComponent', () => {
  let component: QuizPlaygroundControlsComponent;
  let fixture: ComponentFixture<QuizPlaygroundControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlaygroundControlsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizPlaygroundControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
