import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordForgorModalComponent } from './password-forgor-modal.component';

describe('PasswordForgorModalComponent', () => {
  let component: PasswordForgorModalComponent;
  let fixture: ComponentFixture<PasswordForgorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordForgorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordForgorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
