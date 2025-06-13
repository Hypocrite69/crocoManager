import { Component, EventEmitter, Output } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-password-forgor-modal',
  standalone: true,
  imports: [FormsModule],
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
    if (!this.formData.oldPassword) return false; // ← Neuer Teil!
    return (
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

  async onSubmit(form: NgForm) {
  if (
    form.invalid ||
    this.newPasswordsDoNotMatch() ||
    this.newPasswordTooShort()
  ) {
    alert('Bitte überprüfe deine Eingaben.');
    return;
  }

  const { employeeId, oldPassword, newPassword } = this.formData;

  try {
    const success = await this.supabase.updatePassword(
      parseInt(employeeId, 10),
      oldPassword || '', // leeres Passwort erlauben
      newPassword
    );

      if (success) {
        alert('Passwort wurde erfolgreich geändert.');
        this.closeModal();
      } else {
        alert('Änderung fehlgeschlagen. Passwort evtl. falsch.');
      }
    } catch (error: any) {
      console.error('Fehler beim Passwort ändern:', error.message);
      alert('Ein Fehler ist aufgetreten.');
    }
  }
  constructor(private supabase: SupabaseService) {}
}