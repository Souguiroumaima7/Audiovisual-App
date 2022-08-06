import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdreConfirmationComponent } from './ordre-confirmation.component';

describe('OrdreConfirmationComponent', () => {
  let component: OrdreConfirmationComponent;
  let fixture: ComponentFixture<OrdreConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdreConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdreConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
