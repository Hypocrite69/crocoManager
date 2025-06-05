import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-password-forgor-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-forgor-modal.component.html',
  styleUrl: './password-forgor-modal.component.css'
})
export class PasswordForgorModalComponent {
  @Output() close = new EventEmitter<void>();

  formData = {
    employeeId: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  closeModal() {
    this.close.emit();
  }

  // Neues Passwort darf nicht gleich dem alten sein
  newPasswordEqualsOld(): boolean {
    return (
      !!this.formData.oldPassword &&
      !!this.formData.newPassword &&
      this.formData.oldPassword === this.formData.newPassword
    );
  }

  // Neue Passwörter müssen übereinstimmen
  newPasswordsDoNotMatch(): boolean {
    return (
      !!this.formData.newPassword &&
      !!this.formData.confirmNewPassword &&
      this.formData.newPassword !== this.formData.confirmNewPassword
    );
  }

  // Neues Passwort muss mindestens 8 Zeichen lang sein
  newPasswordTooShort(): boolean {
    return (
      !!this.formData.newPassword &&
      this.formData.newPassword.length < 8
    );
  }

  onSubmit(form: NgForm) {
    if (
      form.invalid ||
      this.newPasswordEqualsOld() ||
      this.newPasswordsDoNotMatch() ||
      this.newPasswordTooShort()
    ) {
      return;
    }

    console.log('Passwort wird geändert:', this.formData);
    this.closeModal();
  }
}