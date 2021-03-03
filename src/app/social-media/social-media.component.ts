import { Component, OnInit } from '@angular/core';
import {upSlide1, upSlide2, upSlide3} from './../animations'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
  animations: [upSlide1, upSlide2, upSlide3]
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
