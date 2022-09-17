import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateordersComponent } from './updateorders.component';

describe('UpdateordersComponent', () => {
  let component: UpdateordersComponent;
  let fixture: ComponentFixture<UpdateordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
