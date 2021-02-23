import { Component } from '@angular/core';
import  {rotateCubeToLeft, rotateCubeToRight}  from  "ngx-router-animations";
import { trigger, state, transition, style, animate, keyframes, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('homeToAbout',  [ transition('home => about', useAnimation(rotateCubeToLeft))]),
    trigger('homeToProjects',  [ transition('home => projects', useAnimation(rotateCubeToLeft))]),
    trigger('homeToContact',  [ transition('home => contact', useAnimation(rotateCubeToLeft))]),
    trigger('aboutToHome',  [ transition('about => home', useAnimation(rotateCubeToRight))]),
    trigger('aboutToProjects',  [ transition('about => projects', useAnimation(rotateCubeToLeft))]),
    trigger('aboutToContact',  [ transition('about => contact', useAnimation(rotateCubeToLeft))]),
    trigger('projectsToHome',  [ transition('projects => home', useAnimation(rotateCubeToRight))]),
    trigger('projectsToAbout',  [ transition('projects => about', useAnimation(rotateCubeToRight))]),
    trigger('projectsToContact',  [ transition('projects => contact', useAnimation(rotateCubeToLeft))]),
    trigger('contactToHome',  [ transition('contact => home', useAnimation(rotateCubeToRight))]),
    trigger('contactToAbout',  [ transition('contact => about', useAnimation(rotateCubeToRight))]),
    trigger('contactToProjects',  [ transition('contact => projects', useAnimation(rotateCubeToRight))]),
  
  ]
})
export class AppComponent {
  title = 'portfolio';
  

  getState(outlet: any)  {
		return outlet.activatedRouteData.state;
	}

}
