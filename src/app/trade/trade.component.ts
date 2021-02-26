import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from './../animations'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss'],
  animations:
    [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class TradeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
) { }


  ngOnInit(): void {
  }

}
