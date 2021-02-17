import { Component, OnInit } from '@angular/core';
import { fastSlide, fastSlide2, fastSlide3, fastSlide4, fastSlide5 } from './../animations'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    fastSlide, fastSlide2, fastSlide3, fastSlide4, fastSlide5
  ]
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  constructor() { }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit(): void {
  }

}
