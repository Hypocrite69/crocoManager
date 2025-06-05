import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckassUserModalComponent } from './fuckass-user-modal.component';

describe('FuckassUserModalComponent', () => {
  let component: FuckassUserModalComponent;
  let fixture: ComponentFixture<FuckassUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuckassUserModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuckassUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
