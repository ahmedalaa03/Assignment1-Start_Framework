import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [StarComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';
  labelClasses: { [key: string]: object } = {
    userName: { 'top-0': false, '__top': true },
    userAge: { 'top-0': false, '__top': true },
    userEmail: { 'top-0': false, '__top': true },
    userPassword: { 'top-0': false, '__top': true },
  };
  updateLabel(inputName: string, value: string): void {
    this.labelClasses[inputName] = { 'top-0': value.length > 0, '__top': value.length === 0 };
  }
}