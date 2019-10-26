import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackinglistingComponent } from './product-trackinglisting.component';

describe('ProductTrackinglistingComponent', () => {
  let component: ProductTrackinglistingComponent;
  let fixture: ComponentFixture<ProductTrackinglistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrackinglistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrackinglistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
