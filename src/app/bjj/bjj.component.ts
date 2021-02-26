import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from './../animations'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bjj',
  templateUrl: './bjj.component.html',
  styleUrls: ['./bjj.component.scss'],
  animations:
    [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class BjjComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
) { }


  ngOnInit(): void {
  }

}
