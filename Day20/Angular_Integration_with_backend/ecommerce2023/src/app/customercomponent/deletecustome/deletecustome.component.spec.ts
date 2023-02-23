import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecustomeComponent } from './deletecustome.component';

describe('DeletecustomeComponent', () => {
  let component: DeletecustomeComponent;
  let fixture: ComponentFixture<DeletecustomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecustomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecustomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
