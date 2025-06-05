import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordForgorModalComponent } from '../password-forgor-modal/password-forgor-modal.component';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, PasswordForgorModalComponent],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  isPasswordForgorrModalOpen = false;

  formData = {
    mnr: '',
    password: ''
  };

  constructor(private supabase: SupabaseService) {}

  closeModal() {
    this.close.emit();
  }

  forgotPassword() {
    this.isPasswordForgorrModalOpen = true;
  }

  async login() {
    const { mnr, password } = this.formData;

    const isValid = await this.supabase.checkPassword(mnr, password);

    if (isValid) {
      console.log('Login erfolgreich!');
      this.closeModal();
    } else {
      alert('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Zugangsdaten.');
    }
  }
}