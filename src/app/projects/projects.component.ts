import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';
import { trigger, state, transition, style, animate, keyframes, useAnimation } from '@angular/animations'
import { fade, jackBox, slowSlide, slideAnimation, slideInOutAnimation, fadeInAnimation } from './../animations';
import { ViewportScroller } from '@angular/common';
import { ProductService } from '../product.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
        slideInOutAnimation,
        fadeInAnimation,
        fade,
        slowSlide,
        jackBox,
        trigger('mainAnimation', [
          transition(':enter', [
            useAnimation(slideAnimation,{
              params: {
                duration: '500ms',
                delay: '.33s'
              }
            })
          ])
        ]),
        trigger('mainAnimation2', [
          transition(':enter', [
            useAnimation(slideAnimation,{
              params: {
                duration: '500ms',
                delay: '.66s'
              }
            })
          ])
        ]),
        trigger('mainAnimation3', [
          transition(':enter', [
            useAnimation(slideAnimation,{
              params: {
                duration: '500ms',
                delay: '.99s'
              }
            })
          ])
        ]),
      ]
      // ,
      // host: { '[@fadeInAnimation]': '' }

})
export class ProjectsComponent {
  list: any
  projectList: any
  constructor(private viewportScroller: ViewportScroller,
              private productService: ProductService,
              public config: NgbCarouselConfig,
              private wowService: NgwWowService) {
                this.list = this.productService.getList()
                this.list.subscribe((snapshot: any) => {
                  this.projectList = snapshot})
                  config.interval = 4000;  
                  config.wrap = true;  
                  config.keyboard = false;  
                  config.pauseOnHover = false;
                this.wowService.init();
            }

  public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }
    
  particlesOptions: ISourceOptions = {
    background: {

        color: {
            value: "transparent"
        }

    },
    fpsLimit: 60,
    interactivity: {

        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }

    },
    particles: {

        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }

    },
    detectRetina: true
};
}
