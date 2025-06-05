import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordForgorModalComponent } from '../password-forgor-modal/password-forgor-modal.component';
import { SupabaseService } from '../supabase.service';
import { FuckassUserModalComponent } from '../fuckass-user-modal/fuckass-user-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, PasswordForgorModalComponent, FuckassUserModalComponent, CommonModule],
  templateUrl: './login-modal.component.html',
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  isPasswordForgorrModalOpen = false;
  isFuckassUserModalOpen = false;

  loggedInMnr: string = '';
  loggedInName: string = '';

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

    userModal(){
    this.isFuckassUserModalOpen = true;
  }
  
  onNextModalClose() {
  this.isFuckassUserModalOpen = false;
}

  async login() {
    const { mnr, password } = this.formData;

    const isValid = await this.supabase.checkPassword(mnr, password);

    if (isValid) {
      this.loggedInMnr = mnr;

      const mitarbeiter = await this.supabase.getMitarbeiterByMnr(mnr);
      if (mitarbeiter) {
        this.loggedInName = `${mitarbeiter.Vorname} ${mitarbeiter.Name}`;
      } else {
        this.loggedInName = 'Unbekannt';
      }

      this.isFuckassUserModalOpen = true;
    } else {
      alert('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Zugangsdaten.');
    }
  }
}