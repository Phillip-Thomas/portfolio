import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from './../animations'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  animations:
    [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class DevComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
) { }


  ngOnInit(): void {
  }

}
