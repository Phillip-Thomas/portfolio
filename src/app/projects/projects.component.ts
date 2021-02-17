import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';
import { trigger, state, transition, style, animate, keyframes, useAnimation } from '@angular/animations'
import { fade, jackBox, slowSlide, slideAnimation } from './../animations';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
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
})
export class ProjectsComponent {
  constructor(private viewportScroller: ViewportScroller) {}

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
