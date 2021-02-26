import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjjComponent } from './bjj.component';

describe('BjjComponent', () => {
  let component: BjjComponent;
  let fixture: ComponentFixture<BjjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BjjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BjjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
