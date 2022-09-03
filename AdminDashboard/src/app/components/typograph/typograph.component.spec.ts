import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographComponent } from './typograph.component';

describe('TypographComponent', () => {
  let component: TypographComponent;
  let fixture: ComponentFixture<TypographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
