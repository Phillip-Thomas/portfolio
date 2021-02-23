import { Component, OnInit } from '@angular/core';
import {slideInOutAnimation} from './../animations'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:
    [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ProjectListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit(): void {
  }

}
