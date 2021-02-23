import { Component, OnInit } from '@angular/core';
import { fade, jackBox, slowSlide, slideAnimation, slideInOutAnimation } from './../animations';
import * as d3 from "d3";
import { NgwWowService } from 'ngx-wow';
import { trigger, state, transition, style, animate, keyframes, useAnimation } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInOutAnimation,
    fade,
    slowSlide,
    jackBox]
})
export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
    this.buildSystem()
  }

  buildSystem(this: any)  {

      // establish variables
      var w     = 1400;
      var h     = 800;
      var x     = (w/2);
      var y     = (h/2) - 150;
      var t0    = new Date().setHours(0,0,0,0);
      var delta = (Date.now() - t0);

      // planets and moons
      var planets = [
        { R:    23, r:   1, speed: -1.60, phi0:  35, moons: [   // mercury
        ]},
        { R:    45, r:   2, speed: -1.17, phi0: 185, moons: [   // venus
        ]},
        { R:    87, r:   2, speed: -1.00, phi0: 135, moons: [   // earth
          { R:  10, r:   1, speed: -9.00, phi0:  15 }           // the moon
        ]},
        { R:   140, r:   1, speed: -0.80, phi0: 235, moons: [   // mars
          { R:   6, r: 0.5, speed: -3.80, phi0:  15 },          // phobos
          { R:   9, r: 0.5, speed: -2.80, phi0: 115 }           // deimos
        ]},
        { R:   290, r:  22, speed: -0.43, phi0: 135, moons: [   // jupiter
          { R:  30, r:   2, speed: -7.70, phi0:  25 },          // io
          { R:  36, r:   1, speed: -2.45, phi0:  95 },          // europa
          { R:  49, r:   3, speed: -1.10, phi0: 125 },          // ganymede
          { R:  79, r:   2, speed: -0.50, phi0: 315 }           // callisto
        ]},
        { R:   583, r:  18, speed: -0.32, phi0: 260, moons: [   // saturn
          { R:  28, r:   1, speed: -4.10, phi0: 120 },          // mimas
          { R:  33, r:   1, speed: -3.90, phi0:  20 },          // enceladus
          { R:  38, r:   1, speed: -3.60, phi0:   0 },          // tethys
          { R:  44, r:   1, speed: -3.20, phi0: 100 },          // dione
          { R:  58, r:   2, speed: -2.90, phi0: 300 },          // rhea
          { R:  98, r:   5, speed: -1.30, phi0: 180 },          // titan
          { R: 188, r:   2, speed: -0.10, phi0:  10 }           // lapetus
        ]}
      ];

      // insert svg element
      var svg = d3.select('#system').insert("svg")
          .attr("width", w)
          .attr("height", h)
          .attr("transform", "scale(-1,1)")
          // .attr("background-color", 'white');

      // sun
      svg.append("circle")
         .attr("r", 10)
         .attr("cx", x)
         .attr("cy", y)
         .attr("id", "sun");

      // planet group
      var container = svg.append("g")
          .attr("id", "orbit_container")
          .attr("transform", "translate(" + x + "," + y + ")");

      // draw planets and moon clusters
      container.selectAll("g.planet").data(planets).enter().append("g")
               .attr("class", "planet_cluster").each(function(this:any, d, i) {
                 d3.select(this).append("circle").attr("class", "orbit")
                   .attr("r", d.R);
                 d3.select(this).append("circle").attr("r", d.r).attr("cx",d.R)
                   .attr("cy", 0).attr("class", "planet");
                 d3.select(this).append("g").attr("transform", "translate(" + d.R + ",0)")
                    .selectAll("g.moon").data(d.moons).enter().append("g")
                    .attr("class", "moon_cluster").each(function(this:any, d, i) {
                      d3.select(this).append("circle").attr("class", "orbit")
                        .attr("r", d.R);
                      d3.select(this).append("circle").attr("r", d.r).attr("cx",d.R)
                        .attr("cy", 0).attr("class", "moon");
                    })
                    .attr("transform", function(d) {
                      return "rotate(" + (d.phi0 + (delta * (d.speed/100))) + ")";
                    });
               })
               .attr("transform", function(d) {
                 return "rotate(" + (d.phi0 + (delta * (d.speed/100))) + ")";
               });

      // throttled rotaiton animations
      setInterval(function(){
        var delta = (Date.now() - t0);
        svg.selectAll(".planet_cluster, .moon_cluster").attr("transform", function(d: any) {
          return "rotate(" + (d.phi0 + (delta * (d.speed/100))) + ")";
        });
      }, 40);
  }
}
