import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEscrowComponent } from './cancel-escrow.component';

describe('CancelEscrowComponent', () => {
  let component: CancelEscrowComponent;
  let fixture: ComponentFixture<CancelEscrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelEscrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelEscrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
