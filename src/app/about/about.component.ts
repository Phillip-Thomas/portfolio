import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { fadeInAnimation, slideInOutAnimation } from '../animations';
import { aboutSlide1, aboutSlide2, aboutSlide3 } from './../animations';
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation,
    slideInOutAnimation, aboutSlide1, aboutSlide2, aboutSlide3 ]
})

export class AboutComponent implements OnInit {

  constructor(private wowService: NgwWowService,
              private router: Router) {
    this.wowService.init();
  }

  ngOnInit(): void {
  }

  redirectDev() {
    this.router.navigate(['about/dev']);
  }
  redirectTrade() {
    this.router.navigate(['about/trade']);
  }
  redirectBJJ() {
    this.router.navigate(['about/bjj']);
  }
  redirectClose() {
    this.router.navigate(['./about']);
  }

}
