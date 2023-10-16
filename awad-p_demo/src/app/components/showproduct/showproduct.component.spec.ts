import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductComponent } from './showproduct.component';

describe('ShowproductComponent', () => {
  let component: ShowproductComponent;
  let fixture: ComponentFixture<ShowproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowproductComponent]
    });
    fixture = TestBed.createComponent(ShowproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
