import { Component,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = true;
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = !(window.scrollY > 40);
  }
}