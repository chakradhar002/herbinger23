import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddressComponent } from './customeraddress.component';

describe('CustomeraddressComponent', () => {
  let component: CustomeraddressComponent;
  let fixture: ComponentFixture<CustomeraddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeraddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
