import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInputGetInputComponent } from './set-input-get-input.component';

describe('SetInputGetInputComponent', () => {
  let component: SetInputGetInputComponent;
  let fixture: ComponentFixture<SetInputGetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetInputGetInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetInputGetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
