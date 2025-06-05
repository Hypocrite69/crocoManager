import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-fuckass-user-modal',
  imports: [],
  templateUrl: './fuckass-user-modal.component.html',
  styleUrl: './fuckass-user-modal.component.css'
})
export class FuckassUserModalComponent {
  @Input() mnr: string = '';
  @Input() name: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
