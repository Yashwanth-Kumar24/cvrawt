import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsdemoComponent } from './formsdemo.component';

describe('FormsdemoComponent', () => {
  let component: FormsdemoComponent;
  let fixture: ComponentFixture<FormsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
