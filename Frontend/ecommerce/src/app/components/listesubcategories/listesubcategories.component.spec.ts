import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesubcategoriesComponent } from './listesubcategories.component';

describe('ListesubcategoriesComponent', () => {
  let component: ListesubcategoriesComponent;
  let fixture: ComponentFixture<ListesubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
