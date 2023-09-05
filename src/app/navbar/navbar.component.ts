import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarOpen = false;

  @Input() isOpen: boolean = false;

  @Input() toggleSidebar: () => void = () => {};

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
