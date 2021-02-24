import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { fadeInAnimation, slideInOutAnimation } from '../animations';
import { aboutSlide1, aboutSlide2, aboutSlide3 } from './../animations'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation,
    slideInOutAnimation, aboutSlide1, aboutSlide2, aboutSlide3 ]
})

export class AboutComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
  }

}
