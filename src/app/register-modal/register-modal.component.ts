import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { CreateUserModalComponent } from '../create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [FormsModule, CreateUserModalComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  @Output() close = new EventEmitter<void>();

  // Modal für Nutzererstellung
  isCreateUserModalOpen = false;

  // Formulardaten
  formData = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  };

  // Methode zum Schließen des Modals
  closeModal() {
    this.close.emit();
  }

  // Prüft, ob Passwort und Bestätigung übereinstimmen
  passwordsDoNotMatch(): boolean {
  const { password, confirmPassword } = this.formData;
  return !!password && !!confirmPassword && password !== confirmPassword;
}



  // Formularabsendung nur, wenn alles gültig
  onSubmit(form: NgForm) {
    if (form.invalid || this.passwordsDoNotMatch()) {
      return;
    }

    // Hier kannst du weitere Logik einbauen (z.B. Backend-Aufruf)
    console.log('Registrierungsdaten:', this.formData);

    this.openCreateUserModal();
  }

  openCreateUserModal() {
    this.isCreateUserModalOpen = true;
  }
}