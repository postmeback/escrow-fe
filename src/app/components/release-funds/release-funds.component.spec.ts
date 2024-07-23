import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseFundsComponent } from './release-funds.component';

describe('ReleaseFundsComponent', () => {
  let component: ReleaseFundsComponent;
  let fixture: ComponentFixture<ReleaseFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseFundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
