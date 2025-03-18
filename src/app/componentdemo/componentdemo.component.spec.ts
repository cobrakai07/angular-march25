import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentdemoComponent } from './componentdemo.component';

describe('ComponentdemoComponent', () => {
  let component: ComponentdemoComponent;
  let fixture: ComponentFixture<ComponentdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
