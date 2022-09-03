import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderandreturnComponent } from './orderandreturn.component';

describe('OrderandreturnComponent', () => {
  let component: OrderandreturnComponent;
  let fixture: ComponentFixture<OrderandreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderandreturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderandreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
