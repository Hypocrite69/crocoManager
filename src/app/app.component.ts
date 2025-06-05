import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  cards = [
    {
        "image": "croco 1.jpg",
        "title": "Frederik",
        "description": "Hallo"
    },
    {
        "image": "croco 2.jpg",
        "title": "Tobiarsch",
        "description": "Hallo"
    },
    {
        "image": "croco 3.jpg",
        "title": "Gustav",
        "description": "Hallo"
    },
    {
        "image": "croco 4.jpg",
        "title": "Guttural Slug",
        "description": "Blood, sprays out of your face"
    },
    {
        "image": "croco 5.jpg",
        "title": "Rieke",
        "description": "Hallo"
    },
    {
        "image": "croco 6.jpg",
        "title": "Dekristolvit",
        "description": "Hallo"
    },
    {
        "image": "croco 7.jpg",
        "title": "Maria",
        "description": "Hallo"
    },
    {
        "image": "croco 8.jpg",
        "title": "MX-Master",
        "description": "Hallo"
    }
  ]
}