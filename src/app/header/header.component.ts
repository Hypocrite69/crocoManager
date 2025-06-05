import { Component } from '@angular/core';

import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginModalComponent, RegisterModalComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isLoginModalOpen = false;
  isRegisterModalOpen = false;

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }
}
