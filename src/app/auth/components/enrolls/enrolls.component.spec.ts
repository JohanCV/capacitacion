import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollsComponent } from './enrolls.component';

describe('EnrollsComponent', () => {
  let component: EnrollsComponent;
  let fixture: ComponentFixture<EnrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
