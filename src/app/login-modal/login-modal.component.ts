import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordForgorModalComponent } from '../password-forgor-modal/password-forgor-modal.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordForgorModalComponent],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  isPasswordForgorrModalOpen = false;

  closeModal() {
    this.close.emit();
  }

  forgotPassword() {
    this.isPasswordForgorrModalOpen = true;
  }
}