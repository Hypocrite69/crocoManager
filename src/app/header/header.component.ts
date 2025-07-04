import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginModalComponent, RegisterModalComponent, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isLoginModalOpen = false;
  isRegisterModalOpen = false;

  openLoginModal() {
    this.isLoginModalOpen = true;
    console.log('LoginModal öffnen...');
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
    console.log('RegisterModal öffnen...');
  }
}
